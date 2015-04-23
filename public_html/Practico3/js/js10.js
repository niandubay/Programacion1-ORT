// Ejercicio 10
//
var numero1 = 0;
var numero2 = 0;
var numero3 = 0;
var diferencia = 0;

function mostrar() {
    $("#salida").html("");
    numero1 = parseInt($("#numero1").val());
    numero2 = parseInt($("#numero2").val());
    numero3 = parseInt($("#numero3").val());
    diferencia = numero2 - numero1;
    if (diferencia > 0) {
        for (var i = numero2; i >= numero1; i--) {
            if (i % numero3 === 0) {
                $("#salida").append(i + "<br>");
            }
        }
    } else {
        for (var i = numero2; i <= numero1; i++) {
            if (i % numero2 === 0) {
                $("#salida").append(i + "<br>");
            }
        }
    }
}
$("#mostrar").click(mostrar);