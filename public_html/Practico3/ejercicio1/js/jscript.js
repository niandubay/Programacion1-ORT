// Practico 3
//
// Ejercicoi 1
//
var numero1 = 0;
var numero2 = 0;
var acumulado = 1;

function producto() {
    numero1 = parseInt($("#numero1").val());
    numero2 = parseInt($("#numero2").val());
    for (var i = numero1; i <= numero2; i++) {        
        acumulado = i * acumulado; // esto es igual a acumulado *= 1;
    }
    $("#salida").append(acumulado + "<br>");
}
$("#producto").click(producto);