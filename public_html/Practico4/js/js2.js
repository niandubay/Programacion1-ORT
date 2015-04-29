// Ejercicio 2
//
var edad = 0;
var tope = 0;
var resultado;
// esta función es para captar los datos y podér pasarlos
// a la función que necesita parámetros...
function captarDatos(){
    edad = parseInt($("#edad").val());
    tope = parseInt($("#tope").val());
    // hago el llamado a la función pero pasándole
    // las variables como parámetros...
    resultado = esMayor(edad,tope);
    if(resultado===true){
        alert("Es mayor.");
    } else {
        alert("No es mayor.");
    }
}
$("#verificar").click(captarDatos);

function esMayor(_edad,_tope){
    var _resultado;
    if(_edad > _tope){
        _resultado = true;
    } else {
        _resultado = false;
    }
    return _resultado;
}