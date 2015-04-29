// Ejercicio 6
//
// declaro variables globales...
var horaElectricista = 200;
var horaAsistente = 150;
var dias = 0;
var horas = 0;
var usaAsistente = "";
var materiales = 0;
var sueldoElectricista = 0;
var sueldoAsistente = 0;
var sueldoTotal = 0;
var costoMateriales = 0;
var presupuesto = 0;

// esta funcion se usa para controlar el ingreso de horas y días...
function ingresoValorNumerico(_valorNumerico) {
    if (_valorNumerico < 0) {
        alert("Ingrese un valor positivo!");
    } else {
        return _valorNumerico;
    }
}
// esta función se usa para devolver el costo total del usuario
// ya sea electricista o asistente...
function costoTotalSalario(_tipoUsuario, _cantidadDeHoras, _cantidadDeDias) {
    var _costoTotalSalario = 0;
    switch (_tipoUsuario) {
        case "electricista":
            _costoTotalSalario = horaElectricista * _cantidadDeHoras * _cantidadDeDias;
            return _costoTotalSalario;
            break;
        case "asistente":
            _costoTotalSalario = horaAsistente * _cantidadDeHoras * _cantidadDeDias;
            return _costoTotalSalario;
            break;
    }
}
// esta función devuelve el costo de los materiales más el 10%...
function costoFinalMateriales(_costoMateriales) {
    var _costoFinalMateriales = 0;
    _costoFinalMateriales = _costoMateriales + ((_costoMateriales / 100) * 10);
    return _costoFinalMateriales;
}
// esta función es para captar los datos y llama a las otras..
function calcularPresupuesto() {
    // reinicio la variable sueldoAsistente para que no joda
    // al calcular un nuevo presupuesto sin asistente...
    sueldoAsistente = 0;
    // ingreso los días trabajados..
    dias = parseInt($("#dias").val());
    dias = ingresoValorNumerico(dias);
    // ingreso las horas trabajadas..
    horas = parseInt($("#horas").val());
    horas = ingresoValorNumerico(horas);
    // ingreso si usa asistente y calculo los sueldos de cada uno...
    usaAsistente = $("#usaAsistente").val();
    if (usaAsistente === "si") {
        tipoUsuario = "asistente";
        sueldoAsistente = costoTotalSalario(tipoUsuario, horas, dias);
    }
    tipoUsuario = "electricista";
    sueldoElectricista = costoTotalSalario(tipoUsuario, horas, dias);
    // calculo el sueldo total..
    sueldoTotal = sueldoElectricista + sueldoAsistente;
    // ingreso el costo de materiales y calculo el costo final de ellos..
    materiales = parseFloat($("#materiales").val());
    costoMateriales = costoFinalMateriales(materiales);
    
    // calculo el presupuesto
    presupuesto = sueldoTotal + costoMateriales;
    $("#salida").html("El presupuesto es de "+presupuesto);
}
$("#calcularPresupuesto").click(calcularPresupuesto);