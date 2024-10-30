// * 9 - Escreva um programa que tenha uma função chamada ehPrimo. Receba um número informado pelo usuário, passe ele para a função. Se o número for primo, deverá retornar true, senão false.
const readline = require("readline-sync");
function ehPrimo(num)
{
    if()
    {
        return "é primo";
    }
    else
    {
        return "não é primo";
    }

}
let numero = readline.questionInt("Informe um numero: ");
console.log(`o numero ${numero} ${ehPrimo(numero)}`);