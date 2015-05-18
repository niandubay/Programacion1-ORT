// Ejercicio 12
//
function verificar(){
    var esUnPalindromo = true;
    var texto = $("#texto").val();
    var largoDelTexto = texto.length;
    if ((largoDelTexto%2)===0){
        //si tiene cantidad de letras pares...perfecto
        //empiezo a verificar las 2 del medio y así...
        posicionCentral = (largoDelTexto/2)-1;
    } else {
        // si no tiene cantidad pares, entonces ignoro la del
        // medio y empiezo a controlar a partir de las siguientes...
        posicionCentral = (Math.floor(largoDelTexto/2))-1;
    }
    // hago un bucle desde posición 0 hasta posicionCentral...
    for (var i = 0; i <=posicionCentral; i++){
        if(texto.charAt(i) !== (texto.charAt(texto.length-(i+1)))){
            esUnPalindromo = false;
        }
    }
    if (esUnPalindromo === true){
        $("#salida").html("Es un palíndromo.");
    } else {
        $("#salida").html("No es un palíndromo.");

    }
}
$("#verificar").click(verificar);