// Funcion para calcular y mostrar el resultado
function calcular(operacion) {
  // Obtener la lista de numeros
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
    default:
      resultado = "Operación no válida";
  }

  // Mostrar el resultado
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
