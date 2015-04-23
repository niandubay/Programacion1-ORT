// Ejercicio 3
//
function mostrar(){
    for(var i=-100;i<=10;i++){
        $("#salida").append(i + "<br>");
    }
}
$("#mostrar").click(mostrar);