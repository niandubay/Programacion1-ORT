// Ejercicio 8
//
var numero = 0;

function mostrar (){
    numero = parseInt($("#numero").val());
    if ((2<=numero) && (numero <=50)){
        for(var i = numero; i >= 2; i--){
            $("#salida").append(" -");
        }
    } else {
        $("#etiqueta").html("<b>Ingrese un número ENTRE 2 y 50:");
    }
}
$("#mostrar").click(mostrar);