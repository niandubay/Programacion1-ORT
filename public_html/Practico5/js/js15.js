// Ejercicio 15
//
function repeticiones(_palabra){
    var _repeticiones = 0;
    var _primerLetra = _palabra.charAt(0);
    
    for(var i = 0; i < _palabra.length; i++){
        if(_palabra.charAt(i)===_primerLetra){
            _repeticiones++;
        }
    }    
    return _repeticiones;
}

function contar(){
    var palabra = $("#palabra").val();
    var veces = repeticiones(palabra);
    $("#salida").html("La primer letra de la palabra se repite " + veces + " veces.");
}
$("#contar").click(contar);