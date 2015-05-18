// Ejercicio 14
//
function buscar() {
    // cargo el texto 
    var texto = $("#texto").val();
    // hago el llamado a la función chunga pasándole
    // como parámetro el texto cargado...
    var posicion = posicionDeA(texto);
    // escribo el resultado
    $("#salida").html(posicion);
}
function posicionDeA(_texto) {
    var _posicion;
    var _letra = "a";
    var primerOcurencia = _texto.indexOf(_letra);
    var ultimaOcurencia = _texto.lastIndexOf(_letra);
    // si hay una unica vez la letra a o no existe...    
    if ((primerOcurencia === ultimaOcurencia) || (primerOcurencia === -1)) {
        _posicion = -1;        
    } else {
        // si hay más de una letra a...
        for (var i = ultimaOcurencia - 1; i >= 0; i--) {
            if(_texto.charAt(i)===_letra){
                // cuando encuentre alguna letra a, le asigno a _posicion
                // el valor de i, que es eso, la posición que estamos controlando
                // en ese momento dentro del bucle for...
                _posicion = i;
                // con el break hago que se rompa el for al encontrar
                // la primer repetición de la letra a que esté
                // inmediatamente antes que la ultimaOcurrencia...
                break;
            }
        }
    }
    // retorno el valor de _posicion...
    return _posicion;
}
$("#buscar").click(buscar);