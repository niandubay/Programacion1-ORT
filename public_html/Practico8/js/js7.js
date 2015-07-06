// Ejercicio 7
//
// Arrays
var clientes = new Array(
        {
            ci: 123456789,
            nombre: "juan",
            apellido: "rodríguez",
            dirección: "vaz ferreira 3582",
            telefono: 667856897
        },
{
    ci: 234567890,
    nombre: "pedro",
    apellido: "sánchez",
    dirección: "caramuru 2385",
    telefono: 554785698
},
{
    ci: 345678901,
    nombre: "laura",
    apellido: "perez",
    dirección: "arapey 9584",
    telefono: 521485637
}
);
var viajes = new Array(
        {
            ci: 123456789,
            movil: 25,
            horaDePartida: 21,
            horaDeLlegada: 22,
            monto: 120
        },
{
    ci: 123456789,
    movil: 17,
    horaDePartida: 18,
    horaDeLlegada: 19,
    monto: 100
},
{
    ci: 123456789,
    movil: 32,
    horaDePartida: 19,
    horaDeLlegada: 20,
    monto: 130
},
{
    ci: 123456789,
    movil: 45,
    horaDePartida: 11,
    horaDeLlegada: 13,
    monto: 220
},
{
    ci: 234567890,
    movil: 15,
    horaDePartida: 19,
    horaDeLlegada: 20,
    monto: 120
},
{
    ci: 234567890,
    movil: 9,
    horaDePartida: 14,
    horaDeLlegada: 15,
    monto: 105
},
{
    ci: 234567890,
    movil: 49,
    horaDePartida: 21,
    horaDeLlegada: 22,
    monto: 125
},
{
    ci: 234567890,
    movil: 45,
    horaDePartida: 19,
    horaDeLlegada: 20,
    monto: 100
},
{
    ci: 345678901,
    movil: 21,
    horaDePartida: 22,
    horaDeLlegada: 23,
    monto: 190
},
{
    ci: 345678901,
    movil: 17,
    horaDePartida: 16,
    horaDeLlegada: 18,
    monto: 200
},
{
    ci: 345678901,
    movil: 3,
    horaDePartida: 19,
    horaDeLlegada: 20,
    monto: 105
});
// Funciones
function validarCamposVacíos(_ci, _movil, _horaDePartida, _horaDeLlegada, _monto) {
    var _camposVacios = true;
    if (_ci === "" || _movil === "" || _horaDePartida === "" || _horaDeLlegada === "" || _monto === "") {
        _camposVacios = false;
    }
    return _camposVacios;
}
function validarCamposNumericos(_ci, _movil, _horaDePartida, _horaDeLlegada, _monto) {
    var _camposNumericos = true;
    if (isNaN(_ci) || isNaN(_movil) || isNaN(_horaDePartida) || isNaN(_horaDeLlegada) || isNaN(_monto)) {
        _camposNumericos = false;
    }
    return _camposNumericos;
}
function validarUsuarioExistente(_ci) {
    var _usuarioExistente = false;
    for (var i = 0; i < clientes.length; i++) {
        if (clientes[i].ci === _ci) {
            _usuarioExistente = true;
            break;
        }
    }
    return _usuarioExistente;
}
function ingresarViaje(_ci, _movil, _horaDePartida, _horaDeLlegada, _monto) {
    var _nuevoViaje = {
        ci: _ci,
        movil: _movil,
        horaDePartida: _horaDePartida,
        horaDeLlegada: _horaDeLlegada,
        monto: _monto
    };
    viajes.push(_nuevoViaje);
}
function reportePorMovil(_movil) {
    var _montoTotal = 0;
    var _numeroDeViajes = 0;
    for (var i = 0; i < viajes.length; i++) {
        if (viajes[i].movil === _movil) {
            _montoTotal += viajes[i].monto;
            _numeroDeViajes++;
        }
    }
    var _promedioRecaudacion = _montoTotal / _numeroDeViajes;
    $("#mensajesReportePorHoras").hide();
    $("#mensajesReportePorMovil").show();
    if (_numeroDeViajes === 0) {
        $("#mensajesReportePorMovil").html("Ese móvil no realizó viajes.");
    } else {
        $("#mensajesReportePorMovil").html("El móvil realizó " + _numeroDeViajes +
                " viajes,<br>recaudando un monto total de " + _montoTotal +
                " pesos y<br>el promedio de recaudación fué de " + _promedioRecaudacion + ".");
    }
}
function reportePorHoras() {
    $("#mensajesReportePorMovil").hide();
    $("#mensajesReportePorHoras").show();
    var _thead = "<th>Hora</th><th>Cantidad Viajes</th>";
    $("#mensajesReportePorHoras>table>thead").html(_thead);
    $("#mensajesReportePorHoras>table>tbody").html("");
    for (var i = 0; i < 24; i++) {
        var _trow = "<tr><td>" + i + "</td>";
        var _contadorPorHora = 0;
        for (var j = 0; j < viajes.length; j++) {
            if (i >= viajes[j].horaDePartida && i < viajes[j].horaDeLlegada) {
                _contadorPorHora++;
            }
        }
        _trow += "<td>" + _contadorPorHora + "</td></tr>";
        $("#mensajesReportePorHoras>table>tbody").append(_trow);
    }
}
// Botones
$("#ingresarViaje").click(function () {
    var _ci = parseInt($("#ci").val());
    var _movil = parseInt($("#movil").val());
    var _horaDePartida = parseInt($("#horaDePartida").val());
    var _horaDeLlegada = parseInt($("#horaDeLlegada").val());
    var _monto = parseInt($("#monto").val());
    // verificaciones
    var _camposVacios = validarCamposVacíos(_ci, _movil, _horaDePartida, _horaDeLlegada, _monto);
    var _camposNumericos = validarCamposNumericos(_ci, _movil, _horaDePartida, _horaDeLlegada, _monto);
    var _usuarioExistente = validarUsuarioExistente(_ci);
    // ingreso o mensaje de error
    if (_camposVacios && _camposNumericos && _usuarioExistente) {
        ingresarViaje(_ci, _movil, _horaDePartida, _horaDeLlegada, _monto);
        alert("Viaje ingresado correctamente!");
        // vacío los campos
        $("#ci").val("");
        $("#movil").val("");
        $("#horaDePartida").val("");
        $("#horaDeLlegada").val("");
        $("#monto").val("");
    } else {
        alert("No es posible ingresar el viaje!");
    }
});
$("#generarReportePorMovil").click(function () {
    var _movil = parseInt($("#reportePorMovil").val());
    reportePorMovil(_movil);
});
$("#generarReportePorHoras").click(function () {
    var _movil = parseInt($("#reportePorHoras").val());
    reportePorHoras();
});