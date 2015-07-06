// Ejercicio 3
//
// Arrays
var personas = new Array();
// Funciones
function ingresarPersona(_nombre, _apellido) {
    var _codigo = personas.length;
    var _nuevaPersona = {
        codigo: _codigo,
        nombre: _nombre,
        apellido: _apellido
    };
    personas.push(_nuevaPersona);
}
function validarCamposVacíos(_nombre, _apellido) {
    var _camposValidos = true;
    if (_nombre === "" || _apellido === "") {
        _camposValidos = false;
    }
    return _camposValidos;
}
function dibujarTablaInformación(_array, _tabla){
    var _thead = "";
    for(var n in _array[0]){
        _thead += "<th>"+n+"</th>";
    }
    $("#"+_tabla+">table>thead").html(_thead);
    $("#"+_tabla+">table>tbody").html("");
    for(var i = 0; i < _array.length; i++){
        var _trow = "<tr>";
        for (var p in _array[i]){
            _trow += "<td>"+_array[i][p]+"</td>";
        }
        _trow += "</tr>";
        $("#"+_tabla+">table>tbody").append(_trow);
    }
}
function buscar(_busqueda){
    var _resultados = new Array();
    for(var i = 0; i < personas.length; i++){
        var _nombre = personas[i].nombre;
        if(_nombre.toLowerCase().indexOf(_busqueda)!==-1){
            _resultados.push(personas[i]);
        }
    }
    return _resultados;
}
// Botones
$("#ingresarPersona").click(function () {
    var _nombre = $("#nombre").val();
    var _apellido = $("#apellido").val();
    var _camposValidos = validarCamposVacíos(_nombre, _apellido);
    if (_camposValidos) {
        ingresarPersona(_nombre, _apellido);
    } else {
        alert("Error en los campos!");
    }
});
$("#mostrarTabla").click(function(){
    dibujarTablaInformación(personas, "tabla1"); 
});
$("#botonBuscar").click(function(){
   var _busqueda = $("#busqueda").val().toLowerCase();
   var _resultados = buscar(_busqueda);
    dibujarTablaInformación(_resultados, "tabla2");
});