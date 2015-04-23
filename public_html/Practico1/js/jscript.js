//Ejercicio 1
//
//var nombre1;
//var apellido1;
//var nombreCompleto;
//
//function juntarNombre()
//{
//    nombre1 = $("#nombre1").val();
//    apellido1 = $("#apellido1").val();
//    nombreCompleto = apellido1 + ", " + nombre1;
//
//    $("#nombreCompleto").html("Nombre completo: " + nombreCompleto);
//}
//$("#mostrarNombre").click(juntarNombre);

//Ejercicio 2
//
//var valor1;
//var valor2;
//var sumaValores;
//
//function sumarValores()
//{
//    valor1 = parseFloat($("#valor1").val());
//    valor2 = parseFloat($("#valor2").val());
//    sumaValores = valor1 + valor2;
//
//    $("#sumaValores").html("Resultado: " + sumaValores);
//}
//$("#mostrarValor").click(sumarValores);

//Ejercicio 3
//
//var valor1;
//var valor2;
//var valor3;
//var sumaValores;
//
//function sumarValores()
//{
//    valor1 = parseFloat($("#valor1").val());
//    valor2 = parseFloat($("#valor2").val());
//    valor3 = parseFloat($("#valor3").val());
//    sumaValores = valor1 + valor2 + valor3;
//
//    $("#sumaValores").html("Resultado: " + sumaValores);
//}
//$("#mostrarValor").click(sumarValores);

//Ejercicio 4
//
//var valor1;
//var valor2;
//var sumaValores;
//var multiplicacionValores;
//
//function sumaMultiValores()
//{
//    valor1 = parseFloat($("#valor1").val());
//    valor2 = parseFloat($("#valor2").val());
//    sumaValores = valor1 + valor2;
//    multiplicacionValores = valor1 * valor2;
//
//    $("#sumaValores").html("Resultado de la suma: " + sumaValores);
//    $("#multiplicacionValores").html("Resultado de la multiplicacion: " + multiplicacionValores);
//}
//$("#mostrarValor").click(sumaMultiValores);

//Ejercicio 5
//
//var lado;
//var area;
//
//function calcularArea()
//{
//    lado = parseFloat($("#lado").val());
//    area = lado * lado;
//
//    $("#area").html("Área del cuadrado: " + area);
//}
//$("#calcularArea").click(calcularArea);

//Ejercicio 6
//
//var pesosUruguayos;
//var cambio;
//var dolares;
//
//function cambioPesosDolares()
//{
//    pesosUruguayos = parseFloat($("#pesosUruguayos").val());
//    cambio = parseFloat($("#cambio").val());
//    dolares = pesosUruguayos * cambio;
//
//    $("#cambioDolares").html("Dólares: " + dolares);
//}
//$("#calcularDolares").click(cambioPesosDolares);

//Ejercicio 7
//
//var numero=0;
//var acumulado=0;
//
//function acumular()
//{
//    numero = parseFloat($("#numero").val());
//    acumulado = acumulado + numero;
//
//    $("#numero").val(" "); //borro el número ingresado
//}
//function mostrarResultado(){
//    $("#mostrarSuma").html("La suma total es: " + acumulado);
//}
//$("#sumarNumero").click(acumular);
//$("#sumaTotal").click(mostrarResultado);

//Ejercicio 8
//
//var valor1;
//var valor2;
//var resto;
//
//function calcularResto()
//{
//    valor1 = parseFloat($("#valor1").val());
//    valor2 = parseFloat($("#valor2").val());
//    resto = valor1 % valor2;
//
//    $("#resto").html("El resto de la división es: " + resto);
//}
//$("#calcularResto").click(calcularResto);

//Ejercicio 9
//
//var valor1;
//var valor2;
//var valor3;
//var resultado;
//
//function hacerCuentas()
//{
//    valor1 = parseFloat($("#valor1").val());
//    valor2 = parseFloat($("#valor2").val());
//    valor3 = parseFloat($("#valor3").val());
//    resultado = (valor1 + valor2) - valor3;
//
//    $("#resultado").html("Resultado: " + resultado);
//}
//$("#hacerCuentas").click(hacerCuentas);

//Ejercicio 10
//
//var numero1;
//var numero2;
//var numero3;
//var resultado;
//
//function calculos()
//{
//    numero1 = parseFloat($("#numero1").val());
//    numero2 = parseFloat($("#numero2").val());
//    numero3 = parseFloat($("#numero3").val());
//
//    resultado = (numero1 * numero1) - (numero2 + numero3);
//
//    $("#resultado").html("Resultado: " + resultado);
//}
//$("#calcular").click(calculos);

//Ejercicio 11
//
//var importe;
//var porcentaje;
//var importeFinal;
//
//function calcularImporte()
//{
//    importe = parseFloat($("#importe").val());
//    porcentaje = parseFloat($("#porcentaje").val());
//    importeFinal = ((importe / 100) * porcentaje) + importe;
//
//    $("#resultado").html("Importe final: " + importeFinal);
//}
//$("#calcular").click(calcularImporte);

//Ejercicio 12
//
//var importe;
//var iva = 22;
//var importeFinal;
//
//function calcularImporte()
//{
//    importe = parseFloat($("#importe").val());
//    importeFinal = ((importe / 100) * iva) + importe;
//
//    $("#resultado").html("Importe final: " + importeFinal);
//}
//$("#calcular").click(calcularImporte);

//Ejercicio 13
//
//var peso;
//var altura;
//var imc;
//
//function indiceMasaCorporal()
//{
//    peso = parseFloat($("#peso").val());
//    altura = parseFloat($("#altura").val());
//    imc = peso / (altura * altura);
//    
//    $("#indice").html("El IMC es: " + imc);
//}
//$("#calcular").click(indiceMasaCorporal);

//Ejercicio 14
//
var chirridos;
var tempFar;
var tempCel;

function temperatura()
{
    chirridos = parseFloat($("#chirridos").val());
    tempFar = ((chirridos - 40) / 4) + 50;
    tempCel = ((tempFar - 32) / 1.8);
    
    $("#temperatura").html("Temperatura en °C: "+ tempCel);
}
$("#calcular").click(temperatura);
