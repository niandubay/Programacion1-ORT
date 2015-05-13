// Ejercicio 2
//
//declaro el Array y ya lo relleno con ejemplos...
var strings = new Array("hola","celular","ser","exige");
var numeros = new Array();
function mostrar(){
    numeros = contarStringsDeUnArray(strings);
    for (var i = 0; i < numeros.length; i++){
    $("#salida").append(numeros[i]+"<br>");
    }
}
function contarStringsDeUnArray(_arrayStrings){
    var _string = _arrayStrings;
    var _numeros = new Array();
    for( var j = 0; j < _string.length; j++){
        _numeros.push(_string[j].length);
    }
    return _numeros;
}
$("#mostrar").click(mostrar);

