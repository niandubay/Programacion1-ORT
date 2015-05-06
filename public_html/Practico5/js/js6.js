// Ejercicio 6
//

function cambiarTexto() {
    var texto = "";
    var posiciones = 0;
    var primerLetra = "";
    var textoSiguiente = "";
    var letraSiguiente = "";
    var textoFinal = "";
    
    texto = $("#texto").val();
    posiciones = texto.length - 1;
    // aislo la primer letra y la paso a mayúsculas
    primerLetra = texto.charAt(0);
    primerLetra = primerLetra.toUpperCase();
    // para las siguientes letras las voy pasando a minúsculas y 
    // las voy agrupando en textoSiguiente...
    for (var i = 1; i <= posiciones; i++) {
        letraSiguiente = texto.charAt(i);
        letraSiguiente = letraSiguiente.toLowerCase();
        textoSiguiente = textoSiguiente + letraSiguiente;
    }
    // concateno la primerLetra y el textoSiguiente...
    textoFinal = primerLetra + textoSiguiente;
    $("#salida").html(textoFinal);
}
$("#cambiar").click(cambiarTexto);

