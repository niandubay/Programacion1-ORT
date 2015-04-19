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