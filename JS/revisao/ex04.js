// * 4 - Escreva uma função chamada DOBRO que recebe um número e devolve o seu dobro.
const readline = require("readline-sync");
function Dobro(numero)
{
    return numero * 2;
}

const num = readline.questionInt("Informe um numero: ");
console.log(`o dobro de ${num} é: ${Dobro(num)}`);