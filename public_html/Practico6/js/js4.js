// Ejercicio 4
//
var palabras = new Array();

function ingresar(){
    var nuevaPalabra = $("#palabra").val();
    palabras.push(nuevaPalabra);
    $("#palabra").val("");
}
$("#ingresar").click(ingresar);
function mostrar(){
    for (var i = 0; i < palabras.length; i++){
        $("#salida").append(palabras[i] + " ");
    }
}
$("#mostrar").click(mostrar);

