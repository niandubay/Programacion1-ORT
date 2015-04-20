// Ejercicio 1
//
//var numero;
//
//function comprobar(){
//    numero = parseFloat($("#numero").val());
//    if (numero<0){
//        $("#salida").html("El número " + numero + " es negativo.");
//    } else {
//        $("#salida").html("El número " + numero + " es positivo.");
//    }
//}
//
//$("#comprobar").click(comprobar);


// Ejercicio 2
//
//var numero;
//
//function comprobar() {
//    numero = parseFloat($("#numero").val());
//    if (numero > 10) {
//        alert("El número " + numero + " es mayor que 10");
//    }
//}
//
//$("#comprobar").click(comprobar);


//Ejercicio 3
//
//var numero;
//
//function comprobar(){
//    numero = parseFloat($("#numero").val());
//    if (numero > 20){
//        $("#salida").html("El número " + numero + " es mayor que 20.");
//    } else {
//        $("#salida").html("El número " + numero + " es menor o igual a 20.");
//    }
//}
//
//$("#comprobar").click(comprobar);

//Ejercicio 4
//
//var numero;
//var nuevoNumero;
//
//function comprobar(){
//    numero = parseFloat($("#numero").val());
//    if (numero < 0){
//        nuevoNumero = numero * -1;
//        $("#salida").html(nuevoNumero);
//    } else {
//        $("#salida").html(numero);
//    }
//}
//
//$("#comprobar").click(comprobar);

//Ejercicio 5
//
//var numero = 0;
//var veces = 6;
//var contador = 1;
//var suma = 0;
//
//function sumar() {
//    numero = parseFloat($("#numero").val());
//    $("#numero").val(""); //borro input de texto
//
//    if (numero < 0) {
//        numero = numero * -1;
//    }
//    
//    suma = suma + numero;
//    
//    if (contador < veces) {
//        contador++;
//        $("#ingresar").html("Ingresar número " + contador + " de 6: "); //modifico label
//    } else {
//        $("#sumar").attr("disabled", "disabled"); //desactivo el botón sumar
//        $("#salida").html("La suma de los valores absolutos de los " + veces + " números es : " + suma); 
//    }    
//}
//
//$("#sumar").click(sumar);

// Ejercicio 6
//
//var numero = 0;
//
//function comprobar() {
//    numero = parseFloat($("#numero").val());
//    if (numero > 10 && numero < 20) {
//        $("#salida").html("El número " + numero + " es mayor que 10 y menor que 20.");
//    } else {
//        $("#salida").html("El número " + numero + " no es mayor que 10 y menor que 20.");
//    }
//    $("#numero").val("");
//}
//
//$("#comprobar").click(comprobar);

// Ejercicio 7
//
//var numero = 0;
//
//function comprobar() {
//    numero = parseFloat($("#numero").val());
//    if ((numero % 7) === 0 && (numero % 3) === 0) {
//        $("#salida").html("El número " + numero + " es múltiplo de 7 y de 3.");
//    } else {
//        $("#salida").html("El número " + numero + " no es múltiplo de 7 y 3 simultáneamente.");
//    }
//    $("#numero").val("");
//}
//
//$("#comprobar").click(comprobar);

// Ejercicio 8
//
//var numero = 0;
//
//function comprobar() {
//    numero = parseFloat($("#numero").val());
//    if (numero < -20) {
//        alert("CUMPLE < -20");
//    } else if (numero > 20) {
//        alert("CUMPLE > 20");
//    } else {
//        alert("NO CUMPLE");
//    }
//    $("#numero").val("");
//}
//
//$("#comprobar").click(comprobar);

// Ejercicio 9
//
//var numero = 0;
//var veces = 5;
//var contador = 1;
//var multiplosDe5 = 0;
//var mayoresQue20 = 0;
//var ambasCondiciones = 0;
//
//function comprobar() {
//    numero = parseFloat($("#numero").val());
//    $("#numero").val("");
//
//    if ((numero % 5) === 0) {
//        multiplosDe5++;
//    }
//    if (numero > 20) {
//        mayoresQue20++;
//    }
//    if ((numero % 5) === 0 && numero > 20) {
//        ambasCondiciones++;
//    }
//
//    if (contador < veces) {
//        contador++;
//        $("#etiqueta").html("Ingresar número " + contador + " de " + veces + ": ");
//    } else {
//        $("#ingresar").attr("disabled", "disabled");
//        $("#salida").html("Hubieron:<br>Múltiplos de 5: " + multiplosDe5 + ".<br>Números mayores que 20: " + mayoresQue20 + ".<br>Números que cumplían ambas condiciones: " + ambasCondiciones + ".");
//    }
//}
//
//$("#ingresar").click(comprobar);


// Ejercicio 10
//

// Ejercicio 11
//
//var azucar = 0;
//var harina = 0;
//var aceite = 0;
//var agua = 0;
//var vecesHarina = 0;
//var galletas = 0;
//
//function calcular() {
//    azucar = parseInt($("#azucar").val());
//    harina = parseInt($("#harina").val());
//    aceite = parseInt($("#aceite").val());
//    agua = parseInt($("#agua").val());
//    
//    vecesHarina = harina / 100;
//for (var i = vecesHarina; i >= 1; i-- ){
//    if (azucar !== 0 && vecesHarina >= 1 && aceite !== 0 && agua !== 0) {
//        galletas++;
//        azucar--;
//        vecesHarina--;
//        aceite--;
//        agua--;
//    } 
//    $("#calcular").attr("disabled", "disabled");
//}
//    $("#salida").html("Con esas cantidades de ingredientes se pueden preparar " + galletas + " galletas.");
//}
//
//function reiniciar(){
//    //vacío los campos
//    $("#azucar").val("");
//    $("#harina").val("");
//    $("#aceite").val("");
//    $("#agua").val("");
//    //elimino un atributo
//    $("#calcular").removeAttr("disabled");
//}
//
//$("#calcular").click(calcular);
//$("#reiniciar").click(reiniciar);

// Ejercicio 12
//
//var ingresos = 0;
//var primerPago = 0;
//
//function calcular() {
//    ingresos = parseFloat($("#ingresos").val());
//    
//    if (ingresos < 20000) {
//        primerPago = (ingresos / 100) * 15;
//        pagosRestantes = (ingresos - primerPago) / 2;
//    } else {
//        primerPago = (ingresos / 100) * 30;
//        pagosRestantes = (ingresos - primerPago) / (7 * 12);
//    }
//    
//    $("#salida").html("DeberÃ¡ hacer una entrega inicial de $" + primerPago + " y pagos mensuales de $" + pagosRestantes + ".");
//    $("#calcular").attr("disabled", "disabled");
//}
//
//function reiniciar(){
//    //vacÃ­o los campos
//    $("#ingresos").val("");
//    //elimino un atributo
//    $("#calcular").removeAttr("disabled");
//    //elimino el contenido de la salida
//    $("#salida").html("");
//}
//
//$("#calcular").click(calcular);
//$("#reiniciar").click(reiniciar);

// Ejercicio 13
//
//var ingreso = 0;
//var tajeta;
//var montoControl = 10000;
//var total = 0;
//
//function calcular(){
//    ingreso = parseFloat($("#ingreso").val());
//    tarjeta = $("#tarjeta").val();
//    
//    if (tarjeta==="si" && ingreso < montoControl){
//        total = ingreso -((ingreso/100)*4);
//        tarjeta = "con";
//    } else {
//        total = ingreso;
//        tarjeta = "sin";
//    }
//    $("#salida").html("Pago de $" + ingreso + " " + tarjeta + " tarjeta, costo final -> $" + total);
//}
//
//$("#calcular").click(calcular);

// Ejercicio 14
//
//var temperatura = 0;
//var dia;
//var trabajar;
//var ropa;
//
//function consejo() {
//    temperatura = parseFloat($("#temperatura").val());
//    dia = $("#dia").val();
//    
//    if (dia==="domingo" || dia==="Domingo"){
//        trabajar = "Quedarse en casa, hoy no trabaja.";
//    } else {
//        trabajar = "Ir al trabajo.";
//    }
//    
//    if (temperatura<10){
//        ropa = "Abrigarse mucho.";
//    } else if (temperatura>20){
//        ropa = "Ponerse ropa cÃ³moda.";
//    } else {
//        ropa = "Abrigo moderado.";
//    }
//    
//    $("#salida").html("Levantarse.<br>" + ropa + "<br>" + trabajar);
//}
//
//$("#consejo").click(consejo);

// Ejhercicio 15
//
//var nota;
//var contPerdieron = 0;
//var contAprobados = 0;
//var contExcelente = 0;
//var sumaNotas = 0;
//var contNotas = 0;
//var promNotas = 0;
//var notaMaxima = Number.NEGATIVE_INFINITY;
//var notaMinima = Number.POSITIVE_INFINITY;
//
//function agregar() {
//    nota = parseFloat($("#nota").val());
//    sumaNotas = sumaNotas + nota;
//    contNotas++;
//    if (nota < 70) {
//        contPerdieron++;
//    } else if (nota > 90) {
//        contAprobados++;
//        contExcelente++;
//    } else {
//        contAprobados++;
//    }
//    if (nota > notaMaxima) {
//        notaMaxima = nota;
//    }
//    if (nota < notaMinima) {
//        notaMinima = nota;
//    }
//    promNotas = sumaNotas / contNotas;
//}
//function informe() {
//    $("#salida").html("Informe: <br>\n\
//Alumnos reprobados: " + contPerdieron + ".<br>Alumnos aprobados: " + contAprobados + ".<br>Alumnos excelentes: " + contExcelente + ".\n\
//<br>Promedio de notas: " + promNotas + ".<br>Nota máxima: " + notaMaxima + ".<br>Nota mínima: " + notaMinima + ".");
//}
//
//$("#agregar").click(agregar);
//$("#informe").click(informe);

// Ejercicio 16
//
//var sueldo = 0;
//var totalSueldos = 0;
//var cantEmpleados = 0;
//var minSueldo = Number.POSITIVE_INFINITY;
//
//function agregarSueldo(){
//    sueldo = parseFloat($("#sueldo").val());
//    $("#sueldo").val("");
//    totalSueldos = totalSueldos + sueldo;
//    cantEmpleados++;
//    if (sueldo < minSueldo){
//        minSueldo = sueldo;
//    }
//}
//function informe(){
//    $("#agregarSueldo").attr("disabled", "disabled");
//    $("#salida").html("Informe: <br>Total de sueldos a pagar: " + totalSueldos + ".<br>\n\
//Empleados que cobran este mes: " + cantEmpleados + ".<br>Sueldo más bajo: " + minSueldo + ".");
//}
//$("#agregarSueldo").click(agregarSueldo);
//$("#informe").click(informe);

// Ejercicio 17
//
//var stock = 0;
//var nombre;
//var unidades = 0;
//var pedidoMayor = Number.NEGATIVE_INFINITY;
//var clienteMasCamarasPorPedido;
//var cantidadPedidos = 0;
//
//function hacerPedido() {
//    //leo los datos
//    stock = parseInt($("#stock").val());
//    nombre = $("#nombre").val();
//    unidades = parseInt($("#unidades").val());
//
//    // con esto desactivo que se pueda modificar el stock ingresado
//    // la primera vez
//    $("#stock").attr("disabled", "disabled");
//
//    //con esto cambio el texto de la etiqueta de stock
//    //luego de que ingresamos el stock
//    if (stock > 0) {
//        $("#etiqueta").html("Stock disponible: ");
//    }
//
//    //controlo que haya stock
//    if (unidades > stock) {
//        alert("No hay suficiente stock!");
//    } else {
//        stock = stock - unidades;
//        // escribo en el imput el valor del stock disponible
//        $("#stock").val(stock);
//        //cuento el pedido
//        cantidadPedidos++;
//
//        //si me quedo sin stock desactivo el botón de hacer pedido
//        if (stock === 0) {
//            $("#pedido").attr("disabled", "disabled");
//        }
//
//        // con esto controlo el pedido máximo
//        if (unidades > pedidoMayor) {
//            pedidoMayor = unidades;
//            clienteMasCamarasPorPedido = nombre;
//        }
//    }
//    $("#salida").html("Mayor pedido: " + pedidoMayor + " unidades.<br> Cliente con mayor pedido: " + clienteMasCamarasPorPedido + ".<br>Cantidad de pedidos totales: " + cantidadPedidos + ".");
//}
//$("#pedido").click(hacerPedido);

// Ejercicio 18
//
//var numero1 = 0;
//var numero2 = 0;
//var totalResta = 0;
//
//function resta() {
//    numero1 = parseFloat($("#numero1").val());
//    numero2 = parseFloat($("#numero2").val());
//
//    if (numero1 > numero2) {
//        totalResta = numero1 - numero2;
//        $("#salida").html("La resta del primer número menos el segundo es: " + totalResta);
//    } else {
//        totalResta = numero2 - numero1;
//        $("#salida").html("La resta del segundo número menos el primero es: " + totalResta);
//    }
//}
//$("#procesar").click(resta);

// Ejercicio 19
//
//var numero1 = 0;
//var numero2 = 0;
//var operacion = "";
//var palabra;
//var resultado = 0;
//
//function operar() {
//    numero1 = parseFloat($("#numero1").val());
//    numero2 = parseFloat($("#numero2").val());
//    operacion = $("#operacion").val();
//    //ahora controlo que sea siempre en mayúsculas
//    operacion = operacion.toUpperCase();
//
//    switch (operacion) {
//        case "S":
//            resultado = numero1 + numero2;
//            palabra = "suma";
//            break;
//        case "R":
//            resultado = numero1 - numero2;
//            palabra = "resta";
//            break;
//        case "M":
//            resultado = numero1 * numero2;
//            palabra = "multiplicación";
//            break;
//        case "D":
//            resultado = numero1 / numero2;
//            palabra = "división";
//            break;
//        default:
//            resultado = "incorrecto, no se contempla esa opción";
//            palabra = "operación";
//    }
//    $("#salida").html("El resultado de la " + palabra + " es: " + resultado + ".");
//}
//$("#operar").click(operar);

// Ejercicio 20
//
//var variable1 = 0;
//var variable2 = 0;
//var variableDeIntercambio = 0;
//
//function invertir(){
//    variable1 = $("#variable1").val();
//    variable2 = $("#variable2").val();
//    
//    $("#salida1").html("La Variable 1 tiene el valor: \"" + variable1 + "\", y la Variable 2 el valor: \"" + variable2 + "\".");
//    variableDeIntercambio = variable1;
//    variable1 = variable2;
//    variable2 = variableDeIntercambio;
//    $("#salida2").html("Ahora a Variable 1 tiene el valor: \"" + variable1 + "\", y la Variable 2 el valor: \"" + variable2 + "\".");
//}
//$("#invertir").click(invertir);

// Ejercicio 21
//
//var caracter = 0;
//
//function verificar(){
//    caracter = $("#caracter").val();
//    caracterUp = caracter.toUpperCase();
//    $("#caracter").val("");
//    if (caracterUp==="A" || caracterUp==="E" || caracterUp==="I" || caracterUp==="O" || caracterUp==="U"){
//        $("#salida").html("El caracter ingresado " + caracter + ", SI es una vocal.");
//    } else {
//        $("#salida").html("El caracter ingresado " + caracter + ", NO es una vocal.");
//    }
//}
//$("#verificar").click(verificar);

// Ejercicio 22
//
//var numero1 = 0;
//var numero2 = 0;
//
//function verificar(){
//    numero1 = parseFloat($("#numero1").val());
//    numero2 = parseFloat($("#numero2").val());
//    // el operador % devuelve el resto de operar numero1 entre numero2
//    if((numero1 % numero2) === 0){
//        $("#salida").html("El Número 1 (" + numero1 + "), SI es múltiplo del Numero 2 (" + numero2 + ").");
//    } else {
//                $("#salida").html("El Número 1 (" + numero1 + "), NO es múltiplo del Numero 2 (" + numero2 + ").");
//    }
//}
//$("#verificar").click(verificar);

// Ejercicio 23
//
//var numeroNoches = 0;
//var formaPago = 0;
//var nochesExtra = 0;
//var nochesTotales = 0;
//var precioNoche = 40;
//var precioTotal = 0;
//var palabra = "";
//
//function promocion() {
//    // al comienzo de la función reinicio las noches extras para
//    // que no se vaya acumulando el valor con cada ejecución...
//    nochesExtra = 0;
//
//    //utilizo parseInt porque no puede ser 1,3 noches...
//    numeroNoches = parseInt($("#numeroNoches").val());
//    formaPago = $("#formaPago").val();
//    // hago que el caracter sea siempre mayúscula para el SWITCH
//    formaPago = formaPago.toUpperCase();
//    precioTotal = numeroNoches * precioNoche;
//    
//    // esto es sólo para contemplar mayúsculas/minúsculas
//    switch (formaPago){
//        case "T":
//            palabra = "tarjeta";
//            break
//        case "E":
//            palabra = "efectivo";
//            break
//        // el default es por si ingresa una letra distinta a T o E
//        default:            
//            palabra = "método desconocido";
//    }
//    // aquí controlo la lógica
//    if (numeroNoches >= 7) {
//        nochesExtra = nochesExtra + 2;
//        // si es con tarjeta, una noche extra más
//        if (formaPago === "T"){
//            nochesExtra++;
//        }
//    } else if (numeroNoches >= 3 && numeroNoches < 7) {
//        nochesExtra ++;
//    }
//    
//    nochesTotales = numeroNoches + nochesExtra;
//    
//    $("#salida").html(numeroNoches + " noches pagadas con " + palabra + " -> hay " + nochesExtra + " noches de regalo, el usuario se hopeda " + nochesTotales + " noches, el costo total son $" + precioTotal + ".");
//}
//$("#promocion").click(promocion);

// Ejercicio 24
//
//var millasAcumuladas = 0;
//var miembroPlus = "";
//var millasTotales = 0;
//var destino = "";
//var palabra = "";
//
//function calcular() {
//    // convierto en número con comas las millas,
//    // si ingreso 100grt... lo pasa a 100.
//    millasAcumuladas = parseInt($("#millasAcumuladas").val());
//    miembroPlus = $("#miembroPlus").val();
//    miembroPlus = miembroPlus.toUpperCase();
//
//    // controlo que las millas sean un número para seguir...
//    if (isNaN(millasAcumuladas)) {
//        // si no es un número le digo que ingrese bien...
//        $("#salida").html("Ingrese correctamente el número de millas.");
//    // si es un número sigo con lo que dice el else...    
//    } else {
//        // controlo que sea S o N para seguir...
//        if (miembroPlus === "S" || miembroPlus === "N") {
//            // como son sólo dos opciones lo siguiente se puede hacer
//            // igual de sencillo con un if pero ta, usé un switch.
//            switch (miembroPlus) {
//                case "S":
//                    // duplico las millas acumuladas
//                    millasTotales = millasAcumuladas * 2;
//                    palabra = "soy parte";
//                    break
//                case "N":
//                    // que se joda
//                    millasTotales = millasAcumuladas;
//                    palabra = "no soy parte";
//            }
//            // controlo el destino
//            if (millasTotales >= 60000) {
//                destino = " puedo viajar a Europa como destino más lejano.";
//            } else if (millasTotales >= 30000) {
//                destino = " puedo viajar a América del Norte como destino más lejano.";
//            } else if (millasTotales >= 15000) {
//                destino = " puedo viajar a América del Sur como destino más lejano.";
//            } else {
//                destino = " no me da ni para salir de mi casa.";
//            }
//            // imprimo  mensaje final
//            $("#salida").html("Tengo " + millasAcumuladas + " millas acumuladas y " + palabra + " del plan Plus -> " + destino);
//        } else {
//            // le digo que ponga bien la letrita "S" o "N"
//            $("#salida").html("Ingrese correctamente si es parte del plan Plus.");
//        }
//    }
//}
//$("#calcular").click(calcular);

// Ejercicio 25
//
//var codigo = "";
//var departamento = "";
//
//function buscar(){
//    codigo = $("#codigo").val();
//    codigo = codigo.toUpperCase();
//    switch(codigo){
//        case "A":
//            departamento = "Canelones";
//            // sin el break hace esto y pasa a hacer el case "B"...
//            break
//        case "B":
//            departamento = "Maldonado";
//            break
//        case "C":
//            departamento = "Rocha";
//            break
//        case "D":
//            departamento = "Treinta y Tres";
//            break
//        case "E":
//            departamento = "Cerro Largo";
//            break
//        case "F":
//            departamento = "Rivera";
//            break
//        case "G":
//            departamento = "Artigas";
//            break
//        case "H":
//            departamento = "Salto";
//            break
//        case "I":
//            departamento = "Paisandú";
//            break
//        case "J":
//            departamento = "Río Negro";
//            break
//        case "K":
//            departamento = "Soriano";
//            break
//        case "L":
//            departamento = "Colonia";
//            break
//        case "M":
//            departamento = "San José";
//            break
//        case "N":
//            departamento = "Flores";
//            break
//        case "O":
//            departamento = "Florida";
//            break
//        case "P":
//            departamento = "Lavalleja";
//            break
//        case "Q":
//            departamento = "Durazno";
//            break
//        case "R":
//            departamento = "Tacuarembó";
//            break
//        case "S":
//            departamento = "Montevideo";
//            break
//        default:
//            departamento = "Código de departamento desconocido.";
//    }
//    $("#salida").html(departamento);
//}
//$("#buscar").click(buscar);

// Ejercicio 26
//
//var numero = 0;
//var prueba = 0;
//var contador = 0;
//var control = 0;
//// textitos en variables :)
//var mensaje1 = "Estás lejos.";
//var mensaje2 = "Te estás acercando...";
//var mensaje3 = "Cada vez más cerca...";
//var mensaje4 = "Muy pero muy cerca!!!";
//
//function recordar() {
//    numero = parseInt($("#numero").val());
//    if (numero > 0 && numero < 101) {
//        $("#ingreso").css("display", "none");
//        $("#adivinar").css("display", "block");
//    } else {
//        $("#salida1").html("El número debe ser de 1 a 100...");
//    }
//}
//$("#recordar").click(recordar);
//
//function probar() {
//    prueba = parseInt($("#prueba").val());
//    contador++;
//    // controlo que el número prueba sea entre 1 y 100...
//    if (prueba > 0 && prueba < 101) {
//        control = prueba - numero;
//        // si acierta...
//        if (control === 0) {
//            $("#salida3").html("Has acertado!!! el número era el " + numero + ".<br>Has tardado " + contador + " intentos.");
//            $("#adivinar").css("display", "none");
//            $("#mensaje").css("display", "block");
//        }
//        // si no acierta me aseguro que el número control sea positivo...
//        if (control < 0){
//            control = control * -1;
//        }
//        // controlo la distancia al número a adivinar...
//        if (control >= 1 && control <= 4){
//            $("#salida2").html(mensaje4);
//        } else if (control >= 5 && control <= 9) {
//            $("#salida2").html(mensaje3);
//        } else if (control >= 10 && control <= 15) {
//            $("#salida2").html(mensaje2);
//        } else if (control > 15) {
//            $("#salida2").html(mensaje1);
//        }
//    // esto es por si el número prueba no está entre 1 y 100...
//    } else {
//        $("#salida2").html("El número debe ser de 1 a 100... <cite>...este intento igual se cuenta!</cite>");
//    }
//}
//$("#probar").click(probar);

// Ejercicio 27
//
//var manoEquipo1 = 0;
//var manoEquipo2 = 0;
//var puntuacionTotalEquipo1 = 0;
//var puntuacionTotalEquipo2 = 0;
//
//function agregar(){
//    manoEquipo1 = parseInt($("#manoEquipo1").val());
//    manoEquipo2 = parseInt($("#manoEquipo2").val());
//    puntuacionTotalEquipo1 = puntuacionTotalEquipo1 + manoEquipo1;
//    puntuacionTotalEquipo2 = puntuacionTotalEquipo2 + manoEquipo2;
//    if(puntuacionTotalEquipo1 >= 30 || puntuacionTotalEquipo2 >= 30){
//        $("#salida1").css("display","none");
//        $("#agregar").attr("disabled", "disabled");
//        $("#salida2").html("Juego terminado! Los totales finales son:<br>\n\
//El equipo 1: " + puntuacionTotalEquipo1 + " puntos.<br>El equipo 2: " + puntuacionTotalEquipo2 + " puntos.");
//        if (puntuacionTotalEquipo1 === puntuacionTotalEquipo2){
//            $("#salida3").html("Yo diría que han empatado...");
//        } else if (puntuacionTotalEquipo1 > puntuacionTotalEquipo2){
//            $("#salida3").html("Ha ganado el Equipo 1!");
//        } else {
//            $("#salida3").html("Ha ganado el Equipo 2!");
//        }
//    } else {
//        $("#salida1").html("Equipo 1: " + puntuacionTotalEquipo1 + " puntos.<br>Equipo 2: " + puntuacionTotalEquipo2 + " puntos."); 
//   }
//}
//$("#agregar").click(agregar);

// Ejercicio 28
//
//var contador = 0;
//var val1 = "X";
//var val2 = "O";
//var casilla1 = "";
//var casilla2 = "";
//var casilla3 = "";
//var casilla4 = "";
//var casilla5 = "";
//var casilla6 = "";
//var casilla7 = "";
//var casilla8 = "";
//var casilla9 = "";
//
//// funciones para cada botón....grrrrr
//function button1() {
//    $("#button1").css("display", "none");
//    $("#casilla1").css("display", "block");
//    $("#casilla1").attr("disabled", "disabled");
//    if ((contador % 2) === 0) {
//        // si es par es jugador 1
//        $("#casilla1").val(val1);
//    } else {
//        // si no, es jugador 2
//        $("#casilla1").val(val2);
//    }
//    contador++;
//    comprobar();
//}
//$("#button1").click(button1);
//
//function button2() {
//    $("#button2").css("display", "none");
//    $("#casilla2").css("display", "block");
//    $("#casilla2").attr("disabled", "disabled");
//    if ((contador % 2) === 0) {
//        // si es par es jugador 1
//        $("#casilla2").val(val1);
//    } else {
//        // si no, es jugador 2
//        $("#casilla2").val(val2);
//    }
//    contador++;
//    comprobar();
//}
//$("#button2").click(button2);
//
//function button3() {
//    $("#button3").css("display", "none");
//    $("#casilla3").css("display", "block");
//    $("#casilla3").attr("disabled", "disabled");
//    if ((contador % 2) === 0) {
//        // si es par es jugador 1
//        $("#casilla3").val(val1);
//    } else {
//        // si no, es jugador 2
//        $("#casilla3").val(val2);
//    }
//    contador++;
//    comprobar();
//}
//$("#button3").click(button3);
//
//function button4() {
//    $("#button4").css("display", "none");
//    $("#casilla4").css("display", "block");
//    $("#casilla4").attr("disabled", "disabled");
//    if ((contador % 2) === 0) {
//        // si es par es jugador 1
//        $("#casilla4").val(val1);
//    } else {
//        // si no, es jugador 2
//        $("#casilla4").val(val2);
//    }
//    contador++;
//    comprobar();
//}
//$("#button4").click(button4);
//
//function button5() {
//    $("#button5").css("display", "none");
//    $("#casilla5").css("display", "block");
//    $("#casilla5").attr("disabled", "disabled");
//    if ((contador % 2) === 0) {
//        // si es par es jugador 1
//        $("#casilla5").val(val1);
//    } else {
//        // si no, es jugador 2
//        $("#casilla5").val(val2);
//    }
//    contador++;
//    comprobar();
//}
//$("#button5").click(button5);
//
//function button6() {
//    $("#button6").css("display", "none");
//    $("#casilla6").css("display", "block");
//    $("#casilla6").attr("disabled", "disabled");
//    if ((contador % 2) === 0) {
//        // si es par es jugador 1
//        $("#casilla6").val(val1);
//    } else {
//        // si no, es jugador 2
//        $("#casilla6").val(val2);
//    }
//    contador++;
//    comprobar();
//}
//$("#button6").click(button6);
//
//function button7() {
//    $("#button7").css("display", "none");
//    $("#casilla7").css("display", "block");
//    $("#casilla7").attr("disabled", "disabled");
//    if ((contador % 2) === 0) {
//        // si es par es jugador 1
//        $("#casilla7").val(val1);
//    } else {
//        // si no, es jugador 2
//        $("#casilla7").val(val2);
//    }
//    contador++;
//    comprobar();
//}
//$("#button7").click(button7);
//
//function button8() {
//    $("#button8").css("display", "none");
//    $("#casilla8").css("display", "block");
//    $("#casilla8").attr("disabled", "disabled");
//    if ((contador % 2) === 0) {
//        // si es par es jugador 1
//        $("#casilla8").val(val1);
//    } else {
//        // si no, es jugador 2
//        $("#casilla8").val(val2);
//    }
//    contador++;
//    comprobar();
//}
//$("#button8").click(button8);
//
//function button9() {
//    $("#button9").css("display", "none");
//    $("#casilla9").css("display", "block");
//    $("#casilla9").attr("disabled", "disabled");
//    if ((contador % 2) === 0) {
//        // si es par es jugador 1
//        $("#casilla9").val(val1);
//    } else {
//        // si no, es jugador 2
//        $("#casilla9").val(val2);
//    }
//    contador++;
//    comprobar();
//}
//$("#button9").click(button9);
//
//// funcion para comprobar si alguien gana..
//// el llamado a esta función se hace desde cada función de botón...
//function comprobar() {
//    // recojo los valores de las casillas...
//    casilla1 = $("#casilla1").val();
//    casilla2 = $("#casilla2").val();
//    casilla3 = $("#casilla3").val();
//    casilla4 = $("#casilla4").val();
//    casilla5 = $("#casilla5").val();
//    casilla6 = $("#casilla6").val();
//    casilla7 = $("#casilla7").val();
//    casilla8 = $("#casilla8").val();
//    casilla9 = $("#casilla9").val();
//    //me encajo terrible if...
//    // si alguien gana pasa esto...
//    if ((casilla1 === casilla2 && casilla2 === casilla3 && casilla1 !== "") ||
//            (casilla4 === casilla5 && casilla5 === casilla6 && casilla4 !== "") ||
//            (casilla7 === casilla8 && casilla8 === casilla9 && casilla7 !== "") ||
//            (casilla1 === casilla4 && casilla4 === casilla7 && casilla1 !== "") ||
//            (casilla2 === casilla5 && casilla5 === casilla8 && casilla2 !== "") ||
//            (casilla3 === casilla6 && casilla6 === casilla9 && casilla3 !== "") ||
//            (casilla1 === casilla5 && casilla5 === casilla9 && casilla1 !== "") ||
//            (casilla3 === casilla5 && casilla5 === casilla7 && casilla3 !== "")) {
//        // controlo con el contador cual jugador ganó...
//        if (((contador - 1) % 2) === 0) {
//            $("#salida2").html("Gana el Jugador 1 !!! => " + val1);
//        } else {
//            $("#salida2").html("Gana el Jugador 2 !!! => " + val2);
//        }
//        // cambio el cartel de turno por finalizado el juego...
//        $("#salida1").html("El juego ha acabado!");
//    } else {
//        //si nadie gana cambio el cartel del turno...
//    if ((contador % 2) === 0) {
//        $("#salida1").html("Turno del Jugador 1");
//    } else {
//        $("#salida1").html("Turno del Jugador 2");
//    }
//    }
//}

// Ejercicio 29
//