// Ejercicio 7
//
function mostrar(){
    for(var i = -33; i <= 230; i++){
        if( i%4===0){
            $("#salida").append(i + "<br>");
        }
    }
}
$("#mostrar").click(mostrar);