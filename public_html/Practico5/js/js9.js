// Ejercicio 9
//
function contar(){
    var texto = $("#texto").val();
    var separador = " ";
    // inicializo palabras en 1 para que cuente también la primer
    // palabra, que no está precedida por un espacio (separador).
    var palabras = 1;
    var posiciones = texto.length -1;
    for ( var i=0; i <= posiciones; i++){
        if(texto.charAt(i)===separador){
            palabras++;
        }
    }
    $("#salida").html("El texto tiene " + palabras + " palabras.");
}
$("#contar").click(contar);