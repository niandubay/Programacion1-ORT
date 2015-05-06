// Ejercicio 5
//
texto = "";

function aMayusculas(){
    texto = $("#texto").val();
    texto = texto.toUpperCase();
    $("#salida").html(texto);
}
$("#mayusculear").click(aMayusculas);
