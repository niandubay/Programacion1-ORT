// Ejercicio 1
//
var n1 = 0;
var n2 = 0;
var cantidad = 0;
// esta función es para captar los datos y podér pasarlos
// a la función que necesita parámetros...
function captarDatos(){
    n1 = parseInt($("#numero1").val());
    n2 = parseInt($("#numero2").val());
    // hago el llamado a la función pero pasándole
    // las variables como parámetros...
    cantidad = cantidadNumerosPares(n1,n2);
    $("#salida").html(cantidad);
}
$("#nroPares").click(captarDatos);

function cantidadNumerosPares(_n1,_n2){
    var _cantidad = 0;
    var _aux = 0;
    // controlo que n2 siempre sea el mayor...
    if(_n2 < _n1){
        _aux = _n1;
        _n1 = _n2;
        _n2 = _aux;
    }
    for( var _i = _n1; _i <= _n2; _i++){
        if(_i%2===0){
            _cantidad++;
        }
    }
    // devuelve el valor de la variable _cantidad
    return _cantidad;
}