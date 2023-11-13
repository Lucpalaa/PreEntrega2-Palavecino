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

// Funcion para buscar un numero en un array
function buscarNumero(array, numero) {
  return array.includes(numero);
}

// Funcion para filtrar numeros en un array segun una condicion
function filtrarNumeros(array, condicion) {
  return array.filter(condicion);
}

// Funcion principal para realizar operaciones y mostrar resultados
function calcular(operacion) {
  // Obtener la lista de numeros desde el input y convertirla a un array de numeros
  const numeros = document
    .getElementById("numeros")
    .value.split(",")
    .map(Number);
  let resultado;

  // Realizar la operacion seleccionada
  switch (operacion) {
    case "suma":
      resultado = numeros.reduce((acc, num) => acc + num, 0);
      break;
    case "resta":
      resultado = numeros.reduce((acc, num) => acc - num);
      break;
    case "multiplicacion":
      resultado = numeros.reduce((acc, num) => acc * num, 1);
      break;
    case "division":
      resultado = numeros.reduce(
        (acc, num) => (num !== 0 ? acc / num : "Error: División por cero"),
        numeros[0]
      );
      break;
    case "buscar":
      // Solicitar al usuario un numero para buscar en la lista
      const numeroBuscar = parseFloat(prompt("Ingrese el número a buscar:"));
      resultado = buscarNumero(numeros, numeroBuscar)
        ? `El número ${numeroBuscar} está presente en la lista.`
        : `El número ${numeroBuscar} no está presente en la lista.`;
      break;
    case "filtrar":
      // Solicitar al usuario una condicion para filtrar la lista
      const condicionFiltrar = parseFloat(
        prompt("Ingrese la condición para filtrar:")
      );
      resultado = filtrarNumeros(numeros, (num) => num > condicionFiltrar);
      break;
    default:
      resultado = "Operación no válida";
  }

  // Mostrar el resultado en el elemento con el ID "resultado"
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
