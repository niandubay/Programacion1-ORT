// Ejercicio 15
//
function dibujarCalendario() {
    // declaro variables
    var mes = "";
    var diaDeInicio = 0;
    var celdasVacias = 0;
    var diasDelMes = 0;
    var semanasDelMes = 0;
    var numDia = 1;
    var contadorDeDias = 1;
    
    // limpio la tabla
    $("#calendario").html("");
    // el val de cada select me lo da el option que se haya elegido..
    mes = $("#mes").val();
    diaDeInicio = parseInt($("#dia").val());

    // hago un switch para apuntar los días que tiene cada mes
    switch (mes) {
        case "enero":
            diasDelMes = 31;
            break;
        case "febrero":
            diasDelMes = 28;
            break;
        case "marzo":
            diasDelMes = 31;
            break;
        case "abril":
            diasDelMes = 30;
            break;
        case "mayo":
            diasDelMes = 31;
            break;
        case "junio":
            diasDelMes = 30;
            break;
        case "julio":
            diasDelMes = 31;
            break;
        case "agosto":
            diasDelMes = 31;
            break;
        case "setiembre":
            diasDelMes = 30;
            break;
        case "octubre":
            diasDelMes = 31;
            break;
        case "noviembre":
            diasDelMes = 30;
            break;
        case "diciembre":
            diasDelMes = 31;
            break;
    }

    // Calculo cuantas celdas totales necesito y 
    // cuantas semanas van a ocupar...
    celdasTotales = diaDeInicio + diasDelMes - 1;
    // Math.ceil redondea al entero superior
    // para tener semanas enteras.. no 4,8...5
    semanasDelMes = Math.ceil(celdasTotales / 7);
    // calculo cuantas celdas vacías hay en la 1er semana...
    celdasVacias = diaDeInicio - 1;

    // el primer for se encarga de recorrer las semanas necesarias...
    for (semana = 1; semana <= semanasDelMes; semana++) {
        $("#calendario").append("<tr>");
        // aislo el caso de la primer semana
        if (semana === 1) {
            // las casillas vacías están bien..
            for (contadorVacias = celdasVacias; contadorVacias >= 1; contadorVacias--) {
                $("#calendario").append("<td></td>");
                contadorDeDias++;
            }
            // uso el contadorDeDías para saber la celda en que estoy y cuántas
            // me quedan por dibujar, dibujo hasta que diasPrimeraSemana sea > 7, 
            // ahí paso a las siguientes semanas...
            for (diasPrimerSemana = contadorDeDias; diasPrimerSemana <= 7; diasPrimerSemana++) {
                $("#calendario").append("<td>" + numDia + "</td>");
                numDia++;
            }
        }
        // con esto controlo las semanas intermedias...
        if ((semana !== 1) && (semana < semanasDelMes)) {
            // un for de 7 días...
            for (diasSemanasIntermedias = 1; diasSemanasIntermedias <= 7; diasSemanasIntermedias++) {
                $("#calendario").append("<td>" + numDia + "</td>");
                // hago crecer la fecha..
                numDia++;
            }
        }
        // la última semana la hago aparte porque tengo que controlar el final...
        if (semana === semanasDelMes) {
            // voy a dibujar td's sólo hasta que numDia sea igual a diasDelMes...
            for (diasSemanaFinal = numDia; diasSemanaFinal <= diasDelMes; diasSemanaFinal++) {
                $("#calendario").append("<td>" + numDia + "</td>");
                // hago crecer la fecha..
                numDia++;
            }
        }
        $("#calendario").append("</tr>");
    }
//    logs:
//    console.log(celdasTotales);
//    console.log(semanasDelMes);
//    console.log(celdasVacias);
//    console.log(diaDeInicio);
//    console.log(contadorDeDias);
//    console.log(numDia);
}

$("#dibujarCalendario").click(dibujarCalendario);