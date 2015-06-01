// Ejercicio 1
//
var personas = new Array();
function agregar() {
    var _nombre = $("#nombre").val();
    var _nacionalidad = $("#nacionalidad").val();
    var _edad = parseInt($("#edad").val());
    var _nuevaPersona = {
        nombre: _nombre,
        nacionalidad: _nacionalidad,
        edad: _edad
    };
    personas.push(_nuevaPersona);
}
$("#agregar").click(agregar);
function dibujarTabla(_array) {
    // limpio la tabla anterior...
    $("#thead").html(""); //limpio el thead..
    $("#tbody").html(""); //limpio el thead..
    // armo el thead
    var cabecera = "<tr>"; // abro el trow
    for (var h in _array[0]) { // por cada clave en el array 0 hago...
        cabecera += "<th>" + h + "</th>"; // relleno los th con las claves del array[0]...
    }
    cabecera += "</tr>"; // cierro el trow..
    $("#thead").html(cabecera); // escribo el thead..
    // relleno el tbody
    for (var i = 0; i < _array.length; i++) {
        var linea = "<tr>"; // abro el trow
        for (var h in _array[i]) { // por cada clave en el array i hago...
            linea += "<td>" + _array[i][h] + "</td>"; // relleno los td con los valores
            // de la clave h en el array i
        }
        linea += "</tr>"; // cierro el trow..
        $("#tbody").append(linea);
        linea = ""; //vacío la línea para la siguiente ejecución...
    }
}
$("#tabla1").click(function () {
    dibujarTabla(personas);
});
function mayoresDeEdad(_array) {
    var _mayores = new Array(); // creo el array de salida...
    for (var i = 0; i < _array.length; i++) { //recorro el _array...
        if (_array[i].edad > 17) { // si el valor de la clave edad > 17 en _array[i]...
            var _personaMayor = _array[i]; // guardo ese _array[i]...
            _mayores.push(_personaMayor); // lo pusheo al Array _mayores...
        }        
    }
    return _mayores; // retorno el Array _mayores...
}
$("#tabla2").click(function () {
    var _mayores = mayoresDeEdad(personas);
    dibujarTabla(_mayores);
});