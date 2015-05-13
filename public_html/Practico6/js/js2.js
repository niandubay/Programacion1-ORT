// Ejercicio 2
//
//declaro el Array y ya lo relleno con ejemplos...
var strings = new Array("hola","celular","ser","exige");
var numeros = new Array();
// función para cargar el Array de texto y hacer la llamada
// a la función que cuenta las letras
function mostrar(){
    // llamo a la función
    numeros = contarLetrasDeCadaStringDeUnArray(strings);
    // hago el bucle para mostrar los resultados
    for (var i = 0; i < numeros.length; i++){
    $("#salida").append(numeros[i]+"<br>");
    }
}
// funcion chunga..
function contarLetrasDeCadaStringDeUnArray(_arrayStrings){
    // cargo el Array que nos pasan como parámetro en la
    // variable _string...
    var _string = _arrayStrings;
    // creo un Array que va a ser el que voy a rellenar
    // con los resultados..
    var _numeros = new Array();
    // recorro el Array _string...
    for( var j = 0; j < _string.length; j++){
        // hago un push con el número que me da el .length en
        // cada _string[j]..
        _numeros.push(_string[j].length);
    }
    // retorno el Array _numeros..
    return _numeros;
}
$("#mostrar").click(mostrar);

