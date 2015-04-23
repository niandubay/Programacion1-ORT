// Ejercicio 5
//
function mostrar(){
    for(var i=20;i >= -30; i--){
        $("#salida").append(i + "<br>");
    }
}
$("#mostrar").click(mostrar);
