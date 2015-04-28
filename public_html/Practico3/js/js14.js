// Ejercicico 14
//
var numero = 0;

function mostrar() {
    numero = 0;
    numero = parseFloat($("#numero").val());
    if (numero <= 2000) {
        alert("El número debe ser mayor a 2000!");
        $("#numero").val("");
    } else {
        while (numero >= 100) {
            numero = numero / 20;
        }
        $("#salida").html(numero);
    }
}
$("#mostrar").click(mostrar);