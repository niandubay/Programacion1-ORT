// Ejercicio 11
//
function informar() {
    var matricula = $("#matricula").val();
    var departamento = "";
    var tieneOchoCaracteres = true;
    var sonLetras = true;
    var esUnSeparador = true;
    var sonNumeros = true;
    
    // acá controlo que tenga 8 caracteres...
    if (matricula.length !== 8) {
        tieneOchoCaracteres = false;
    }
    
    // acá controlo que los primeros 3 sean letras..
    for (var a = 0; a <= 2; a++) {
        if (matricula.charAt(a) < "A" || matricula.charAt(a) > "Z") {
            sonLetras = false;
        }
    }
    
    // acá controlo que el 4to sea un separador...
    if (matricula.charAt(3) !== "-" || matricula.charAt(3) !== "-") {
        esUnSeparador = false;
    }
    
    // acá controlo que los últimos 4 sean números...
    for (var i = 4; i <= 7; i++) {
        // paso el caracter de cada posición a número y
        // verifico que sea un número, si no es un número aplico el false...
        if (isNaN(parseInt(matricula.charAt(i)))) {
            sonNumeros = false;
        }
    }
    
    // si tiene 8 caracteres, los 3 primeros son letras, el 4 es - y los
    // ultimos 4 son números... cargo el departamento.
    if (sonNumeros === true && tieneOchoCaracteres === true && esUnSeparador === true && sonLetras === true) {
        var primerLetra = matricula.charAt(0);
        switch (primerLetra) {
            case "A":
                departamento = "Canelones";
                break
            case "B":
                departamento = "Maldonado";
                break
            case "C":
                departamento = "Rocha";
                break
            case "D":
                departamento = "Treinta y Tres";
                break
            case "E":
                departamento = "Cerro Largo";
                break
            case "F":
                departamento = "Rivera";
                break
            case "G":
                departamento = "Artigas";
                break
            case "H":
                departamento = "Salto";
                break
            case "I":
                departamento = "Paysandú";
                break
            case "J":
                departamento = "Río Negro";
                break
            case "K":
                departamento = "Soriano";
                break
            case "L":
                departamento = "Colonia";
                break
            case "M":
                departamento = "San José";
                break
            case "N":
                departamento = "Flores";
                break
            case "O":
                departamento = "Florida";
                break
            case "P":
                departamento = "Lavalleja";
                break
            case "Q":
                departamento = "Durazno";
                break
            case "R":
                departamento = "Tacuarembó";
                break
            case "S":
                departamento = "Montevideo";
                break
        }
        $("#salida").html("La matrícula es del departamento de " + departamento + ".");
    } else {
        $("#salida").html("La matrícula no ha sido ingresada con el formato correcto AAA-1111.");
    }
}
$("#informar").click(informar);