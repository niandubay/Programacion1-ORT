// Ejercicio 1-b
//
// creo el Array alias
var alias = new Array();
// declaro la variable para introducir un nuevo alias..
var nuevoAlias;

function ingresar() {
    $("#salida").html("");
    nuevoAlias = $("#alias").val();
    // establezco una variable a false para
    // cambiarla en caso de encontrar un alias repetido...
    var estaRepetido = false;
    // recorro todo el Array comprobando que ningun elemento
    // sea igual al nuevoAlias...
    for (var i = 0; i < alias.length; i++) {
        if (alias[i] === nuevoAlias) {
            // si encuentra uno repetido cambio la variable a
            // true y hago un break para no seguir controlando
            // el resto del Array.. que pueden ser 1 millón.
            estaRepetido = true;
            break;
        }
    }
    // si estaRepetido es true, o sea, que se encontró
    // una repetición...
    if (estaRepetido){
        alert("esta repetido");
    } else {
        // si estaRepetido es false, agrego nuevoAlias
        // como nuevo elemento del Array...
        alias.push(nuevoAlias);
    }
    // ahora imprimo directamente el contenido del Array...
    for (var j = 0; j < alias.length; j++) {
        $("#salida").append(alias[j] + "<br>");
    }
}
$("#ingresar").click(ingresar);

// funcion completa generica para
// controlar elementos repetidos dentro de
// un Array
// 
//function estaEnArray (_arrayEvaluar, _dato){
//    var _estaPresente = false;
//    for(var i = 0; i < _arrayEvaluar.length; i++){
//        if(_dato === _arrayEvaluar[i]){
//            _estaPresente = true;
//            break;
//        }
//    }
//    return _estaPresente;
//}