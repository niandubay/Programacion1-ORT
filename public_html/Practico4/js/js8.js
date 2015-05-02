// Ejercicio 8
//
var temperatura = 0;
var unidad = "";

function convertir(){
    var _fahrenheit = 0;
    temperatura = parseFloat($("#temperatura").val());
    unidad = $("#unidad").val();
    _fahrenheit = aFahrenheit(temperatura,unidad);
    $("#salida").html("Fahrenheit: " + _fahrenheit);
}
//de esta forma con el .change llamamos a la funcion convertir
//directamente cuando cambiemos el valor del select...
$("#unidad").change(convertir);
// pero si la primera vez eliges la opción que aparece por defecto
// la función no se ejecuta porque no detecta cambio...
$("#convertir").click(convertir);

function aFahrenheit(_temp,_unidad){
    var _tempFinal = 0;
    switch(_unidad){
        case "c":
            _tempFinal = (_temp * 1.8)+32;
            break;
        case "k":
            _tempFinal = ((9 / 5) * _temp )- 459.67;
            break;
        case "ra":
            _tempFinal = _temp - 459.67;
            break;
        case "re":
            _tempFinal = (_temp * 2.25)+32;
            break;
    }
    return _tempFinal;
}