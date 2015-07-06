// Ejercicio 3
//
// Arrays
var guitarras = new Array(
        {tipo: 1, nombre: "clásica", precio: 2000},
{tipo: 2, nombre: "eléctrica", precio: 2500},
{tipo: 3, nombre: "electroacústica", precio: 2300});
var ventas = new Array();

// Funciones
function ingresarVenta(_tipo, _cantidad) {
    // verifico que sean números, que cantidad sea > 0 y que tipo sea 1, 2 o 3
    if (isNaN(_tipo) || isNaN(_cantidad) || _cantidad <= 0 || _tipo < 1 || _tipo > 3) {
        alert("Error en los datos de la venta!");
    } else {
        // si son datos válidos...
        var _nuevaVenta = {
            tipo: _tipo,
            cantidad: _cantidad
        };
        // inserto la venta
        ventas.push(_nuevaVenta);
        // dibujo la tabla
        dibujarTablaTotales();
    }
}
function totalPesosGenerados(_tipo) {
    var _ventasTotalesPorTipo = 0;
    // recorro el array ventas y sumo las cantidades por el tipo dado
    for (var i = 0; i < ventas.length; i++) {
        if (ventas[i].tipo === _tipo) {
            _ventasTotalesPorTipo += ventas[i].cantidad;
        }
    }
    var _precioPorTipo = 0;
    // recorro el array guitarras y busco el precio de ese tipo dado
    for (var j = 0; j < guitarras.length; j++) {
        if (guitarras[j].tipo === _tipo) {
            _precioPorTipo = guitarras[j].precio;
            break;
        }
    }
    // calculo el total
    var _totalGeneradoPorTipo = _ventasTotalesPorTipo * _precioPorTipo;
    return _totalGeneradoPorTipo;
}
function dibujarTablaTotales() {
    // dibujo la cabecera
    var _cabecera = "<th>Tipo</th><th>Total Generado</th>";
    $("#tabla>thead").html(_cabecera);
    // limpio el body
    $("#tabla>tbody").html("");
    // dibujo la linea para cada objeto del array guitarras
    for (var n = 0; n < guitarras.length; n++) {
        var _tipo = guitarras[n].tipo;
        var _nombre = guitarras[n].nombre;
        var _totalGenerado = totalPesosGenerados(_tipo);
        var _linea = "<tr><td>" + _nombre + "</td><td>" + _totalGenerado + "</td></tr>";
        $("#tabla>tbody").append(_linea);
    }
}

// Botón
$("#ingresarVenta").click(function () {
    var tipo = parseInt($("#tipo").val());
    var cantidad = parseInt($("#cantidad").val());
    ingresarVenta(tipo, cantidad);
});