// Ejercicoi 2
//
var texto = "";
var letra = "";
var cantLetras = "";
var contador = 0;

function contarLetra(){
    contador = 0;
    texto = $("#texto").val();
    letra = $("#letra").val();
    cantLetras = texto.length;
    for (var i = cantLetras -1; i >= 0; i--){
        if (texto.charAt(i)===letra){
            contador++;
        }
    }
    $("#salida").html("La letra '" + letra + "' aparece " + contador + " veces.");
}
$("#contar").click(contarLetra);