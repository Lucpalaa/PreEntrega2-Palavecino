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
  let numeros = document.getElementById("numeros").value.split(",").map(Number);

  // Verificar si las entradas son validas
  if (numeros.some(isNaN)) {
    document.getElementById("resultado").innerHTML =
      "Por favor, ingrese números válidos.";
    return;
  }

  // Realizar la operacion seleccionada
  let resultado;
  switch (operacion) {
    case "suma":
      resultado = numeros.reduce((acc, num) => sumar(acc, num), 0);
      break;
    case "resta":
      resultado = numeros.reduce((acc, num) => restar(acc, num));
      break;
    case "multiplicacion":
      resultado = numeros.reduce((acc, num) => multiplicar(acc, num), 1);
      break;
    case "division":
      resultado = numeros.reduce((acc, num) => dividir(acc, num));
      break;
    default:
      resultado = "Operación no válida";
  }

  // Mostrar el resultado
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
