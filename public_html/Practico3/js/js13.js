// Ejercicio 13
//
function mostrar() {
    var digito = 1;
    var numero = 0;
    numero = parseInt($("#numero").val());
    if (numero < 0) {
        numero = numero * -1;
    }
    if (numero < 10) {
        digito = 1;
    } else {
        while (numero >= 10) {
            numero = numero / 10;
            digito++;
        }
    }
    $("#salida").html("El número tiene " + digito + " digitos.");
}
$("#mostrar").click(mostrar);