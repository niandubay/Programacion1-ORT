// Ejercicio 4
//
var base = 0;
var altura = 0;
var resultado;
// esta función es para captar el año y podér pasarlo
// a la función que lo necesita como parámetro...
function captarDatos(){
    base = parseInt($("#base").val());
    altura = parseInt($("#altura").val());
    // hago el llamado a la función pero pasándole
    // las variables como parámetros...
    resultado = calcularAreaTriangulo(base,altura);
    $("#salida").html("El área del triángulo es " + resultado);
}
$("#area").click(captarDatos);

function calcularAreaTriangulo(_base,_altura){
    var _resultado = 0;
    if( (_base <= 0) || (_altura <= 0)){
        _resultado = -1;
    } else {
        _resultado = (_base * _altura) / 2;
    }
    
    return _resultado;
}