// Ejercicio 8
//
function controlarA(){
    var minusculas = 0;
    var mayusculas = 0;
    var texto = $("#texto").val();
    posiciones = texto.length -1;
    for (var i = 0; i <= posiciones; i++){
        if ((texto.charAt(i) >= "a" && texto.charAt(i) <= "z") || texto.charAt(i)==="ñ"){
            minusculas++;
        }
        if ((texto.charAt(i) >= "A" && texto.charAt(i) <= "Z") || texto.charAt(i)==="Ñ"){
            mayusculas++;
        }
    }
    $("#salida").html("El texto tiene " + minusculas + " minúsculas y " + mayusculas + " mayúsculas.");
}
$("#controlar").click(controlarA);