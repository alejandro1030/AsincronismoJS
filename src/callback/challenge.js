let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest(); //generar la referencia al objeto que necesito
    xhttp.open('GET', url_api, true); //llamado a una URL, un referente
    //generar o escuchar lo que va a hacer esa conexión
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}