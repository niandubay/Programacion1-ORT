// Ejercicio 1
//
// Arrays
var programas = new Array(
        {
            nombre:"Memorias de Cecilia",
    canal:10,
    genero: "pelicula",
    horaDeComienzo: "18:30",
    duracion: 60,
    logo: "logocecilia.jpg"
},
{
    nombre:"Muerte por todos lados",
    canal:10,
    genero: "informativo",
    horaDeComienzo: "20:30",
    duracion: 30,
    logo: "genteapedazos.jpg"
},
{
    nombre:"Benito Cámela",
    canal:12,
    genero: "comedia",
    horaDeComienzo: "14:30",
    duracion: 120,
    logo: "chanchitos.jpg"
},
{
    nombre:"Corazón Delator",
    canal:4,
    genero: "comedia",
    horaDeComienzo: "14:30",
    duracion: 120,
    logo: "minasllorando.jpg"
},
{
    nombre:"Subete a mi joroba",
    canal:5,
    genero: "otros",
    horaDeComienzo: "11:30",
    duracion: 25,
    logo: "camelloviajero.jpg"
});
// Funciones
function contarProgramasPorCanal(_canal){
    var _contador = 0;
    for(var i = 0; i < programas.length; i++){        
        if(programas[i].canal===_canal){
            _contador++;
        }
    }
    return _contador;
}
function seleccionarProgramasPorGenero(_genero){
    var _programasPorGenero = new Array();
    for (var i = 0; i < programas.length; i++){
        if(programas[i].genero===_genero){
            _programasPorGenero.push(programas[i]);
        }
    }
    return _programasPorGenero;
}
function dibujarTabla(_array){
    var _thead = "<th>Nombre</th><th>Canal</th><th>Logo</th>";
    $("#MostrarPeliculas>table>thead").html(_thead);
    $("#MostrarPeliculas>table>tbody").html("");
    for(var i = 0; i < _array.length; i++){
        var _linea = "<tr><td>"+
                _array[i].nombre+"</td><td>"+
                _array[i].canal+"</td><td>"+
                _array[i].logo+"</td></tr>";
        $("#MostrarPeliculas>table>tbody").append(_linea);
        _linea = "";
    }
}
// Botones
$("#contarProgramas").click(function(){
   var _canal = parseInt($("#canal").val());
   var _cuantos = contarProgramasPorCanal(_canal);
   $("#salida1").html("Ese canal tiene "+_cuantos+" canales.");
});
$("#filtrar").click(function(){
    var _programasFiltrados = seleccionarProgramasPorGenero($("#genero").val().toLowerCase());
    dibujarTabla(_programasFiltrados);
});