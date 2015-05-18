// Ejercicio 13
//
function sustituir(){
    // limpio la salida...
    $("#salida").html("");
    var texto = $("#texto").val();
    var letra = $("#letra").val();
    var posiciones = texto.length-1;
    
    for (var i = 0; i <= posiciones; i++){
        if(texto.charAt(i)!==letra){
            $("#salida").append(texto.charAt(i));
        } else {
            $("#salida").append("*");
        }
    }
}
$("#sustituir").click(sustituir);