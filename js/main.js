let operando1 = null;
let operando2 = null;
let operador = null;
let operacion = 0;
let resultado;

function actualizarPantalla() {
  document.getElementById("valores").value = operacion;
}

function resetearPantalla() {
  operando1 = null;
  operando2 = null;
  operacion = 0;
  operador = null;
  actualizarPantalla();
}

function introducirNumero(numero) {
  if (operador != null) {
    if (operando2 == null) {
      operando2 = numero;
      operacion += numero;
    } else {
      operando2 += numero;
      operacion += numero;
    }
  } else {
    if (operando1 == null) {
      operando1 = numero;
      operacion = numero;
    } else {
      operando1 += numero;
      operacion += numero;
    }
  }
  actualizarPantalla();
}

function introducirComa() {
  if (operador != null) {
    if (parseFloat(operando2) % 1 === 0) {
      if (operando2 != parseFloat(operando2) + ".") {
        operando2 += ".";
        operacion += ".";
      }
    }
  } else {
    if (parseFloat(operando1) % 1 === 0) {
      if (operando1 != parseFloat(operando1) + ".") {
        operando1 += ".";
        operacion += ".";
      }
    }
  }
  actualizarPantalla();
}

function realizarOperacion(valor) {
  if (operando1 == null) {
    operando1 = 0;
  }
  operador = valor;
  operacion += operador;
  actualizarPantalla();
}

function resolverOperacion() {
  operando1 = parseFloat(operando1);
  operando2 = parseFloat(operando2);
  switch (operador) {
    case "+":
      resultado = operando1 + operando2;
      break;
    case "-":
      resultado = operando1 - operando2;
      break;
    case "x":
      resultado = operando1 * operando2;
      break;
    case "/":
      resultado = operando1 / operando2;
      break;
    case "^":
      resultado = Math.pow(operando1, operando2);
      break;
    default:
      resultado = operando1;
      break;
  }
  operacion = resultado;
  actualizarPantalla();
  operador = null;
  operando2 = 0;
  operando1 = parseFloat(resultado);
}
