// Ejercicio 12
//
var alto = 0;
var ancho = 0;
var caracter = "*";

function dibujar(){
    $("#salida").html("");
    alto = parseInt($("#alto").val());
    ancho = parseInt($("#ancho").val());
    
    for (var i = alto; i > 0; i--){
        for(var j = ancho; j > 0; j--){
            $("#salida").append(caracter);
        }
        $("#salida").append("<br>");
    }
}
$("#dibujar").click(dibujar);