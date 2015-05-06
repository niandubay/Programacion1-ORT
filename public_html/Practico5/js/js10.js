// Ejercicio 10
//
function controlar(){
    var texto = $("#texto").val();
    var posiciones = texto.length -1;
    var primerLetra = texto.charAt(0);
    var ultimaLetra = texto.charAt(posiciones);
    if (primerLetra===ultimaLetra){
        $("#salida").html("La primer letra del texto es igual a la última.");
    } else {
        $("#salida").html("La primer letra del texto NO es igual a la última.");
    }
}
$("#controlar").click(controlar);