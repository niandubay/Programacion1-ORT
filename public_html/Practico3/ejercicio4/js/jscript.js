// Ejercicio 4
//
function mostrar(){
    for(var i=40;i>=10;i--){
        $("#salida").append(i + "<br>");
    }
}
$("#mostrar").click(mostrar);