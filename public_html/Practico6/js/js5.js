// Ejercicio 5
//
var numeros = new Array();
var sumaTotal = 0;
var promedio = 0;

function ingresar() {
    var nuevoNumero = parseInt($("#numero").val());
    numeros.push(nuevoNumero);
    $("#numero").val("");
}
$("#ingresar").click(ingresar);

function calcularPromedio() {
    for (var i = 0; i < numeros.length; i++) {
        sumaTotal = sumaTotal + numeros[i];
    }
    promedio = sumaTotal / numeros.length;
    $("#salida").html("El promedio de los números ingresados es " + promedio + ".");
    // reinicio sumaTotal para el siguiente calculo...
    sumaTotal = 0;
}
$("#promedio").click(calcularPromedio);
