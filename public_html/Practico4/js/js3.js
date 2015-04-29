// Ejercicio 3
//
var year = 0;
var resultado;
// esta función es para captar el año y podér pasarlo
// a la función que lo necesita como parámetro...
function captarDato(){
    year = parseInt($("#year").val());
    // hago el llamado a la función pero pasándole
    // la variable como parámetro...
    resultado = esBisiesto(year);
    if(resultado===true){
        $("#salida").html(year + " es bisiesto.");
    } else {
        $("#salida").html(year + " no es bisiesto.");
    }
}
$("#verificar").click(captarDato);

function esBisiesto(_year){
    var _resultado;
    var _multiploDe4;
    var _multiploDe100;
    var _multiploDe400;
    
    if((_year % 4) === 0){
        _multiploDe4 = true;
    } else {
        _multiploDe4 = false;
    }
    if((_year % 100) === 0){
        _multiploDe100 = true;
    } else {
        _multiploDe100 = false;
    }
    if((_year % 400) === 0){
        _multiploDe400 = true;
    } else {
        _multiploDe400 = false;
    }
    // si es múltiplo de 4 y no es múltiplo de 100, o es múltiplo de 400 es true.
    if(((_multiploDe4 === true) && (_multiploDe100 === false)) || (_multiploDe400 === true)){
        _resultado = true;
    } else {
        _resultado = false;
    }
    // devuelvo el valor de _resultado...
    return _resultado;
}