// Ejercicio 8
//
var primerArray = new Array(1,1);
function fribonacci(_array) {
    var _segundoArray = _array.slice(0);
    for (var i = _segundoArray.length-1; i < 20; i++) {
        var _numeroMayor = _segundoArray[i];
        var _numeroMenor = _segundoArray[i-1];
        var _suma = _numeroMayor + _numeroMenor;
        _segundoArray.push(_suma);
    }
    return _segundoArray;
}
function mostrar(){
    $("#salida").html("");
    var _segundoArray = fribonacci(primerArray);    
    for (var j = 0; j < _segundoArray.length; j++) {
        $("#salida").append(_segundoArray[j]+"<br>");
    }
}
$("#fribonacci").click(mostrar);