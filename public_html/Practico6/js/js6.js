// Ejercicio 6
//
var numeros = new Array();
var mayores = new Array();

function ingresar() {
    var nuevoNumero = parseInt($("#numero").val());
    numeros.push(nuevoNumero);
    $("#numero").val("");
    $("#salida").html("");
}
$("#ingresar").click(ingresar);

function mostrar(){
    mayores = mayorQue20(numeros);
    for (var i = 0; i < mayores.length; i++){
        $("#salida").append(mayores[i] + " ");
    }
}
$("#mostrar").click(mostrar);

function mayorQue20(_array){
    var _mayores = new Array();
    for (var j = 0; j < _array.length; j++){
        if (_array[j] > 20){
            _mayores.push(_array[j]);
        }
    }
    
    return _mayores;
}
