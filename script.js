// Funciones de calculo
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return b !== 0 ? a / b : "Error: División por cero";
}

// Funcion principal para calcular y mostrar el resultado
function calcular(operacion) {
  // Obtener los valores de entrada
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);

  // Verificar si las entradas son validas
  if (isNaN(numero1) || isNaN(numero2)) {
    document.getElementById("resultado").innerHTML =
      "Por favor, ingrese números válidos.";
    return;
  }

  // Realizar la operacion seleccionada
  let resultado;
  switch (operacion) {
    case "suma":
      resultado = sumar(numero1, numero2);
      break;
    case "resta":
      resultado = restar(numero1, numero2);
      break;
    case "multiplicacion":
      resultado = multiplicar(numero1, numero2);
      break;
    case "division":
      resultado = dividir(numero1, numero2);
      break;
    default:
      resultado = "Operación no válida";
  }

  // Mostrar el resultado
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
