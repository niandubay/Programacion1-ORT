// Ejercicio 4
//
texto = "";

function aMinusculas(){
    texto = $("#texto").val();
    texto = texto.toLowerCase();
    $("#salida").html(texto);
}
$("#minusculear").click(aMinusculas);