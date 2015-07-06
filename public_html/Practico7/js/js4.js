// Ejercicio4
//
// Arrays
var ventas = new Array();
// Funciones
function ingresarVenta(_marca, _modelo, _precio, _cantidad) {
    if (isNaN(_precio)
            || isNaN(_cantidad)
            || _cantidad <= 0
            || _precio <= 0
            || _modelo === "") {
        alert("Error en los campos de la venta!");
    } else {
        var _nuevaVenta = {
            marca: _marca,
            modelo: _modelo,
            precio: _precio,
            cantidad: _cantidad
        };
        ventas.push(_nuevaVenta);
    }
}
function ventasMayoresDosMilPesos() {
    var _ventasMayoresDosMilPesos = new Array();
    for (var n in ventas) {
        var _precio = ventas[n].precio;
        var _cantidad = ventas[n].cantidad;
        var _total = _precio * _cantidad;
        if (_total > 2000) {
            _ventasMayoresDosMilPesos.push(ventas[n]);
        }
    }
    return _ventasMayoresDosMilPesos;
}
function dibujarTabla(_tabla, _array) {
    var _thead = "";
    for (var n in _array[0]) {
        _thead += "<th>" + n + "</th>";
    }
    $("#" + _tabla + ">thead").html(_thead);
    $("#" + _tabla + ">tbody").html("");
    var _linea = "";
    for (var i = 0; i < _array.length; i++) {
        _linea += "<tr>";
        for (var p in _array[i]) {
            //_linea += "<td>"+_array[i][p]+"</td>";
            _linea += "<td>" + _array[i][p] + "</td>";
        }
        _linea += "</tr>";
        $("#" + _tabla + ">tbody").append(_linea);
        _linea = "";
    }
}
function totalUnidadesVendidasPorModelo(_modelo) {
    var _totalUnidadesVendidasPorModelo = 0;
    for (var i = 0; i < ventas.length; i++) {
        if (ventas[i].modelo === _modelo) {
            _totalUnidadesVendidasPorModelo += ventas[i].cantidad;
        }
    }
    return _totalUnidadesVendidasPorModelo;
}
// Botones
$("#ingresarVenta").click(function () {
    var _marca = $("#marca").val();
    var _modelo = $("#modelo").val();
    var _precio = parseInt($("#precio").val());
    var _cantidad = parseInt($("#cantidad").val());
    ingresarVenta(_marca, _modelo, _precio, _cantidad);
});
$("#ventasMayoresDosMilPesos").click(function () {
    var _ventasMayoresDosMilPesos = ventasMayoresDosMilPesos();
    dibujarTabla("tabla1", _ventasMayoresDosMilPesos);
});
$("#ventasPorModelo").click(function () {
    var _modelo = $("#totalUnidadesVendidasPorModelo").val();
    var _total = totalUnidadesVendidasPorModelo(_modelo);
    $("#salida").html("El total de unidades vendidas de ese modelo es "+_total+".");
});