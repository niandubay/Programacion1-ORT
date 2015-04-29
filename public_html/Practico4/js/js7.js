// Ejercicio 7
//
var celsius = 0;
var fahrenheit = 0;
// función para captar datos y hacer el llamado a la 
// función cambiarCcambiarCelsiusAFahrenheit(...)
function calcular(){
    celsius = parseFloat($("#celsius").val());
    fahrenheit = cambiarCelsiusAFahrenheit(celsius);
    $("#salida").html("La temperatura en Fahrenheit es " + fahrenheit);
}
$("#calcular").click(calcular);
// ahora la función que hace el cambio...
function cambiarCelsiusAFahrenheit(_celsius){
    var _fahrenheit = 0;
    // los decimales se escriben con punto, no con coma...
    _fahrenheit = (_celsius * 1.8) + 32;
    return _fahrenheit;
}