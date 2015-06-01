// Ejercicio 2
//
// Array con algunos objetos precargados..
 var peliculas = new Array({
 nombre: 'godzilla',
 year: 1979,
 genero: 'cficcion',
 cantVotantes: 6,
 votosTotales: 36
 },{
 nombre: 'robocop',
 year: 1985,
 genero: 'cficcion',
 cantVotantes: 8,
 votosTotales: 31
 },{
 nombre: 'porkys',
 year: 2002,
 genero: 'comedia',
 cantVotantes: 5,
 votosTotales: 19
 },{
 nombre: 'franchutes',
 year: 1982,
 genero: 'comedia',
 cantVotantes: 4,
 votosTotales: 20
 },{
 nombre: 'lloremos',
 year: 1969,
 genero: 'drama',
 cantVotantes: 6,
 votosTotales: 30
 },{
 nombre: 'mujeres',
 year: 2012,
 genero: 'drama',
 cantVotantes: 12,
 votosTotales: 36
 });
// validar nombre no repetido
function validarNombre(_nombre,_peliculas){
    var _valido = true;
    for (var i = 0; i < _peliculas.length; i++){
        if(_peliculas[i].nombre === _nombre){
            _valido = false;
            break;
        }
    }
    return _valido;
}
// validar año valor numérico
function validarYear(_year){
    var _valido = true;
    if(isNaN(_year)){
        _valido = false;
    }
    return _valido;
}
// ingresar datos
function ingresar(){
    // cargo y lo paso a minúsculas
    var _nombre = $("#nombre").val().toLowerCase();
    // le paso la validación
    var _nombreDisponible = validarNombre(_nombre,peliculas);
    // cargo year como string
    var _year = $("#year").val();
    // le paso la validación para ver si los caracteres son todos números
    var _yearValido = validarYear(_year);
    var _genero = $("#genero").val();
    // los siguientes campos los cargo directamente com int..
    var _cantVotantes = parseInt($("#cantVotantes").val());
    var _votosTotales = parseInt($("#votosTotales").val());
    if (_nombreDisponible === false){
        alert("El nombre de la película ya existe.");
    }
    if (_yearValido === false){
        alert("El año no es un valor numérico.");
    } else {
        // si todos los caracteres eran numéricos entonces
        // paso el tipo de variable a _int para guardar el dato
        // correctamente tipeado...
        _year = parseInt(_year);
    }
    if (_nombreDisponible && _yearValido){
        // si esta todo bien creo el objeto y lo subo..
        var _nuevaPelicula = {
            nombre: _nombre,
            year: _year,
            genero: _genero,
            cantVotantes: _cantVotantes,
            votosTotales: _votosTotales
        };
        peliculas.push(_nuevaPelicula);
    }
}
$("#ingresar").click(ingresar);
// buscar los populares
function populares(_array){
    var _populares = new Array();
    for (var i = 0; i < _array.length; i++){
        var _votantes = _array[i].cantVotantes;
        var _votos = _array[i].votosTotales;
        var _promedio = _votos/_votantes;
        if (_promedio >= 4){
            _peliPopular = _array[i];
            _populares.push(_peliPopular);
        }
    }
    return _populares;
}
// dibujar la tabla
function tabla(_array){
    // thead
    var _cabecera = "<tr>";
    for(var j in _array[0]){
        // arreglo para que muestre la palabra año aunque
        // la clave se llame year...
        if(j==='year'){
            j='año';
        }
        _cabecera += "<th>" + j + "</th>";
    }
    _cabecera += "</tr>";
    // un thead que sea hijo directo de un #table1
    $("#table1>thead").html(_cabecera);
    // limpio el tbody para rellenarlo..
    $("#table1>tbody").html("");
    // tbody
    for(var i = 0; i < _array.length; i++){
        var _linea = "<tr>";
        for (var k in _array[i]){
            _linea += "<td>" + _array[i][k] + "</td>";
        }
        _linea += "</tr>";
        $("#table1>tbody").append(_linea);
    }
}
$("#tabla").click(function(){
    tabla(populares(peliculas));
});
// buscador y presentar resultados
function buscar(_array){
    var _busqueda= $("#busqueda").val().toLowerCase();
    var _posicionEncontrada = -1;
    for(var i = 0; i < _array.length; i++){
        if(_array[i].nombre===_busqueda){
            _posicionEncontrada = i;
        }
    }
    if(_posicionEncontrada!== -1){
        $("#salida").html("La película " + _array[_posicionEncontrada].nombre +
                    " es del año " + _array[_posicionEncontrada].year + 
                    ", del género " + _array[_posicionEncontrada].genero +
                    " y ha recibido " + _array[_posicionEncontrada].votosTotales + 
                    " votos de " + _array[_posicionEncontrada].cantVotantes + 
                    " votantes.");
    } else {
        alert("La pelicula no se encuentra ingresada.");
    }
}
$("#buscar").click(function(){
    buscar(peliculas);
});