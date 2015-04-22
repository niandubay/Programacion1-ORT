// Ejercicio 11
//
var numero = 0;
var factorial = 1;
var i = 1;

function mostrar (){
    numero = parseInt($("#numero").val());
    // reinicio estas para volver a hacer el factorial
    // por si quedaron con valores de la ejecución anterior...
    factorial = 1;
    i = 1;
    while(i <= numero){
        factorial = factorial * i;
        i++;
    }
    $("#salida").html(numero + "! = " + factorial);
}
$("#mostrar").click(mostrar);