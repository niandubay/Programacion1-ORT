// Ejercicio 9
//
var numero1 = 0;
var numero2 = 0;
var diferencia = 0;

function mostrar(){
    numero1 = parseInt($("#numero1").val());
    numero2 = parseInt($("#numero2").val());
    diferencia = numero2 - numero1;
    if (diferencia > 0){
        for (var i = numero2; i >= numero1; i--){
            $("#salida").append(i + "<br>");
        }
    } else {
        for (var i = numero2; i <= numero1; i++){
            $("#salida").append(i + "<br>");
        }
    }
}
$("#mostrar").click(mostrar);

