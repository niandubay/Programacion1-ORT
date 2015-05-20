// Ejercicio 7
//

// inicializo el Array...
var nombres = new Array("Ana", "Lucía", "María");

// función para agregar Juan al Array...
function agregarNombre() {
    var nombre = "Juan";
    nombres.push(nombre);
}
$("#agregarNombre").click(agregarNombre);

// función para mostrar el largo del Array...
function mostrarLargo() {
    var largo = nombres.length;
    $("#salida").html("nombres.length ahora es " + largo);
}
$("#mostrarLargo").click(mostrarLargo);

// función para mostrar la posición 1 del array...
function mostrarPosicion1() {
    posicion1 = nombres[1];
    $("#salida").html("El elemento en la posición 1 es " + posicion1);
}
$("#mostrarPosicion1").click(mostrarPosicion1);

// función para mostrar el elemento en la posición length-1...
function mostrarLengthMenos1() {
    lengthMenos1 = nombres[nombres.length - 1];
    $("#salida").html("El elemento en la posición length-1 es " + lengthMenos1);
}
$("#mostrarLengthMenos1").click(mostrarLengthMenos1);

// función para mostrar los elementos del Array...
function mostrarElementos() {
    // limpio la salida porque voy a usar un append par
    // ir mostrando los elementos...
    $("#salida").html("");
    for (var i = 0; i < nombres.length; i++) {
        $("#salida").append(nombres[i] + "<br>");
    }
}
$("#mostrarElementos").click(mostrarElementos);

// funcion para consultar si está ese nombre en el Array...
function existe() {
    var consulta = $("#nombre1").val();
    // por defecto el nombre no está...
    var esta = false;
    // si está entonces cambio la variable a true...
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i] === consulta) {
            esta = true;
        }
    }
    // controlo si la variable es true o false y muestro
    // el mensaje que corresponda...
    if (esta) {
        $("#salida").html("El elemento existe en el Array.");
    } else {
        $("#salida").html("El elemento NO existe en el Array.");
    }
}
$("#existe").click(existe);

// función para indicar la posición en la que se encuentra
// un elemento existente en el array...
function posicion() {
    var consulta = $("#nombre2").val();
    // por defecto el nombre no está...
    var esta = false;
    var posicion = -1;
    // si está, entonces cambio la variable a true...
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i] === consulta) {
            esta = true;
            posicion = i;
        }
    }
    // controlo si la variable es true o false y hago
    // lo que corresponda...
    if (esta) {
        $("#salida").html("El elemento existe y se encuentra en la posición " + posicion + ".");
    } else {
        $("#salida").html("El elemento NO existe en el Array y devuelve la posición " + posicion + ".");
    }
}
$("#posicion").click(posicion);

// funciones para modificar un nombre que exista en el Array...
// esta primera consulta si existe el nombre y si existe muestra el div...
function consultar() {
    var consulta = $("#nombre3").val();
    // por defecto el nombre no está...
    var esta = false;
    var posicion = -1;
    // si está, entonces cambio la variable a true...
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i] === consulta) {
            esta = true;
            posicion = i;
        }
    }
    // controlo si la variable es true o false y hago
    // lo que corresponda...
    if (esta) {
        // muestro el div oculto...
        $("#formularioModificacion").show();
        // limpio la salida...
        $("#salida").html("");
    } else {
        $("#salida").html("El elemento NO existe en el Array.");
    }
}
$("#consultar").click(consultar);

// esta funcion es la que modifica el elemento del Array...
function modificar(){
    var ingreso = $("#nombre4").val();
    var consulta = $("#nombre3").val();
    // busco en que posición está ese nombre y lo
    // modifico por el nombre ingresado...
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i] === consulta) {
            nombres[i] = ingreso;
        }
    }
}
$("#modificar").click(modificar);