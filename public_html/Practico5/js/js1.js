// Ejercicio 1
//
var texto = "";
var contador = 0;

function invertir(){
    texto = $("#texto").val();
    contador = texto.length;
    for (var i = contador -1; i >= 0; i--){
        $("#salida").append(texto.charAt(i));
    }
}
$("#invertir").click(invertir);

