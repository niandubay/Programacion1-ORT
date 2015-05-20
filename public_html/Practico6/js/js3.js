// Ejercicio 3
//
function mostrarMayor(){
    // creo un array y lo relleno con los datos
    // de los inputs...
    var numeros = new Array();
    numeros[0] = $("#num1").val();
    numeros[1] = $("#num2").val();
    numeros[2] = $("#num3").val();
    // creo una variable donde voy guardando el número mayor...
    var numeroMayor = Number.NEGATIVE_INFINITY;
    // recorro el array..
    for (var i = 0; i < numeros.length; i++){
        // controlo si el numero es mayor al número mayor...
        if(numeros[i] > numeroMayor){
            // si es mayor lo guardo como nuevo número mayor...
            numeroMayor = numeros[i];
        }
    }
    $("#salida").html("El número mayor es " + numeroMayor + ".");
}
$("#mostrar").click(mostrarMayor);

