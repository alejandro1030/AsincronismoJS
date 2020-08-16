let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest(); //generar la referencia al objeto que necesito
        xhttp.open('GET', url_api, true); //llamado a una URL, un referente
        //generar o escuchar lo que va a hacer esa conexión
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4) {
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api))
            }
        })
        xhttp.send();
    });
}

module.exports = fetchData;