// Ejercicio 1-a
//
var alias = new Array();

function ingresar() {
    $("#salida").html("");
    var posicion = alias.length;
    nuevoAlias = $("#alias").val();
    alias[posicion] = nuevoAlias;
    // alias.push(nuevoAlias); -->es otra forma de
    // ingresar nuevoAlias en el Array alias.
    for (var i = 0; i <= posicion; i++) {
        $("#salida").append(alias[i] + "<br>");
    }
}
$("#ingresar").click(ingresar);