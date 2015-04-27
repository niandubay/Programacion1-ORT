// Ejercicio 13
//
function mostrar() {
    var digito = 0;
    var numero = 0;
    numero = parseInt($("#numero").val());
    if (numero < 0) {
        numero = numero * -1;
    }
    if (numero === 0) {
        digito = 1;
    } else {
        while (numero >= 1) {
            numero = numero / 10;
            digito++;
        }
    }
    $("#salida").html("El número tiene " + digito + " digitos.");
}
$("#mostrar").click(mostrar);