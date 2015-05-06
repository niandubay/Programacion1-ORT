// Ejercicio 7
//
function controlar(){
    var texto1 = $("#texto1").val();
    var texto2 = $("#texto2").val();
    var contiene = texto1.indexOf(texto2);
    // cuando no encuentra ese texto2 dentro de texto 1, devuelve -1 que es
    // una poscició no valida para un string
    if(contiene === -1){
        $("#salida").html("el segundo texto no está incluido en el primero.");
    } else {
        $("#salida").html("el segundo texto está incluido en el primero.");
    }
}
$("#controlar").click(controlar);