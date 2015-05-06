// Ejercicio 3
//
var texto = "";
var cantLetras = "";
var contador = 0;

function contarVocales(){
    contador = 0;
    texto = $("#texto").val();
    texto = texto.toLowerCase();
    cantLetras = texto.length;
    for (var i = cantLetras -1; i >= 0; i--){
        letra = texto.charAt(i);
        if (letra==="a" || letra==="e" || letra==="i" || letra==="o" || letra==="u"){
            contador++;
        }
    }
    $("#salida").html("El texto '" + texto + "' tiene " + contador + " vocales.");
}
$("#contar").click(contarVocales);
