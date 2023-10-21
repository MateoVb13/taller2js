function crearNodo(tipoNodo) {

    var nodo = document.createElement(tipoNodo);
    return nodo;

}

function crearNodoTexto(tipoNodo, texto) {

    var nodo = crearNodo(tipoNodo);
    var textoNodo = document.createTextNode(texto);
    nodo.appendChild(textoNodo);
    return nodo;

}
function adicionarNodoBody(nodo) {
    document.body.appendChild(nodo);
}

function crearNodoImagen(url, alt) {

    var nodo = crearNodo("img");
    nodo.src = url;
    nodo.alt = alt;
    return nodo

}

function adicionarNodoContenedor(contenedor, nodo) {

    contenedor.appendChild(nodo);
}

function crearNodoA(texto, href) {

    var nodo = crearNodoTexto("a", texto)
    nodo.href = href;
    return nodo;
}



function crearTablaConImagenes(imagenes) {
    var tabla = document.createElement("table");

    for (let i = 0; i < 2; i++) {
        var fila = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            var celda = document.createElement('td');
            var imagen = document.createElement('img');
            imagen.src = imagenes[i * 3 + j];
            celda.appendChild(imagen);

            var comprarBoton = document.createElement('button');
            comprarBoton.textContent = 'Comprar';
            celda.appendChild(comprarBoton);

            var carritoBoton = document.createElement('button');
            carritoBoton.textContent = 'Agregar al Carrito';
            celda.appendChild(carritoBoton);

            var detallesBoton = document.createElement('button');
            detallesBoton.textContent = 'Detalles';
            celda.appendChild(detallesBoton);

            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    return tabla;
}

var imagenes = [
    "../recursos/Captura de pantalla 2023-10-19 211344.png",
    "../recursos/gancho.png",
    "../recursos/maquina.png",
    "../recursos/play.png",
    "../recursos/reloj.png",
    "../recursos/ropa.png"
];







    







