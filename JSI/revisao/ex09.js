// * 9 - Escreva um programa que tenha uma função chamada ehPrimo. Receba um número informado pelo usuário, passe ele para a função. Se o número for primo, deverá retornar true, senão false.
const readline = require("readline-sync");
function ehPrimo(numero) {
    if (numero <= 1) return "Não é primo";

    for (let contador = 2; contador <= Math.sqrt(numero); contador++) {
        if (numero % contador == 0) {
            return "não é primo";
        }
    }
    return "é primo";
}

let numero = readline.question("Informe um numero:");
let resultado = ehPrimo(numero);

console.log(`o número ${numero} ${resultado}`);
