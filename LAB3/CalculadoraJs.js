//Declaración de variables
let continuar = true;

alert("Bienvenido a la Calculadora de Operaciones Básicas");

// Bucle para realizar múltiples operaciones
while (continuar) {
    // Solicitar números al usuario
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    // entrada
    if (isNaN(num1) || isNaN(num2)) {
        alert("Error: Uno o ambos valores no son números válidos.");
        continue;
    }

    // Solicitar operación
    let operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o escriba 'salir' para terminar:");

    if (operacion === "salir") {
        alert("Gracias por usar la calculadora. ¡Hasta pronto!");
        break;
    }

    // Función para realizar operaciones
    function realizarOperacion(num1, num2, operacion) {
        if (operacion === "suma") {
            return num1 + num2;
        } else if (operacion === "resta") {
            return num1 - num2;
        } else if (operacion === "multiplicacion") {
            return num1 * num2;
        } else if (operacion === "division") {
            if (num2 === 0) {
                return "Error: No se puede dividir por cero.";
            }
            return num1 / num2;
        } else {
            return "Error: Operación no válida.";
        }
    }

    // Validación de la operación
    let resultado = realizarOperacion(num1, num2, operacion);
    alert("Resultado: " + resultado);
}
