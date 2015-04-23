// Ejercicoi 6
//
function mostrar(){
    for(var i = 1; i <= 450;i++){
        if (i%5===0){
        $("#salida").append(i + "<br>");
    }
    }
}
$("#mostrar").click(mostrar);
