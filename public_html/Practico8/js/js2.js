// Ejercicio 2
//
// Arrays
var clases = new Array(
        {
            nombre: "yoga",
            profesor: "pedro",
            dia: "lunes",
            hora: 22,
            edadmin: 12,
            edadmax: 85
        },
{
    nombre: "pilates",
    profesor: "maría",
    dia: "martes",
    hora: 17,
    edadmin: 15,
    edadmax: 65
},
{
    nombre: "salsa",
    profesor: "natalia",
    dia: "miércoles",
    hora: 22,
    edadmin: 18,
    edadmax: 45
},
{
    nombre: "natación",
    profesor: "roberto",
    dia: "jueves",
    hora: 14,
    edadmin: 10,
    edadmax: 40
},
{
    nombre: "masajes",
    profesor: "pedro",
    dia: "viernes",
    hora: 21,
    edadmin: 18,
    edadmax: 25
});
// Funciones
function validarDatosNuméricos(_hora, _edadmin, _edadmax) {
    var _camposNumericosValidos = true;
    if (isNaN(_hora) || isNaN(_edadmin) || isNaN(_edadmax)) {
        _camposNumericosValidos = false;
    }
    return _camposNumericosValidos;
}
function ingresarClase(_nombre, _profesor, _dia, _hora, _edadmin, _edadmax) {
    var _nuevaClase = {
        nombre: _nombre,
        profesor: _profesor,
        dia: _dia,
        hora: _hora,
        edadmin: _edadmin,
        edadmax: _edadmax
    };
    clases.push(_nuevaClase);
}
function filtrarClasePorEdad(_edad){
    var _clasesFiltradasPorEdad = new Array();
    $("#salida").html("Las clasesa a las que no puedes participar son:<br>");
    for (var i = 0; i < clases.length; i++){
        if(_edad > clases[i].edadmax || _edad < clases[i].edadmin){
            _clasesFiltradasPorEdad.push(clases[i]);
        }
    }
    for(var j = 0; j < _clasesFiltradasPorEdad.length; j++){
        $("#salida").append(_clasesFiltradasPorEdad[j].nombre+"<br>");
    }
}
function contarClasesPorProfesor(_profesor){
    var _contadorClasesPorProfesor = 0;
    for(var i = 0; i < clases.length; i++){
        if(clases[i].profesor===_profesor){
            _contadorClasesPorProfesor++;
        }
    }
    $("#salida").html("Este profesor tiene "+_contadorClasesPorProfesor+" clases.");
}
// Botones
$("#ingresarClase").click(function () {
    // capto los datos
    var _nombre = $("#nombreClase").val().toLowerCase();
    var _profesor = $("#profesor").val().toLowerCase();
    var _dia = $("#dia").val().toLowerCase();
    var _hora = parseInt($("#hora").val());
    var _edadmin = parseInt($("#edadmin").val());
    var _edadmax = parseInt($("#edadmax").val());
    // valído campos numéricos
    var _camposNumericosValidos = validarDatosNuméricos(_hora, _edadmin, _edadmax);
    // ingreso la nueva clase o muestro el error
    if (_camposNumericosValidos) {
        ingresarClase(_nombre, _profesor, _dia, _hora, _edadmin, _edadmax);
    } else {
        alert("Error de campos!");
    }
});
$("#filtrarClasesPorEdad").click(function(){
    var _edadAlumno = parseInt($("#edadAlumno").val());
    filtrarClasePorEdad(_edadAlumno);
});
$("#contarClasesPorProfesor").click(function(){
   var _nombreProfesor = $("#nombreProfesor").val().toLowerCase();
   contarClasesPorProfesor(_nombreProfesor);
});