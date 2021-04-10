// Função de conversão de temperatura
function convert() {

// Declaração das variáveis 
var val, result;

// Atribuição de valores às variáveis
val = document.getElementById("temperatura").value;

// Conversão de CELSIUS para FAHRENHEIT
    result = parseFloat(val * 9/5) + 32;

// Ajuste para duas casas decimais após a virgula
    result = (result.toFixed(1))

// Atribuição do resultado ao elemento HTML
    document.getElementById("result").value = result + "°F";

}