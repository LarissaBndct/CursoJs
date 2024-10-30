// * 10 - Escreva um programa que receba vários números pelo usuário, números positivos e negativos. Quando o usuário digitar 0 (zero), deverá parar de pedir números para o usuário e deverá retornar QUANTOS NUMEROS POSITIVOS FORAM INFORMADOS, QUANTOS NUMEROS NEGATIVOS FORAM INFORMADOS e QUANTOS NUMEROS FORAM INFORMADOS AO TODO.
const readline = require("readline-sync");
let positivos = [];
let negativos = [];
do{
    let numero = readline.questionFloat("Informe um numero: ");
    if(numero > 0)
    {
        positivos.push(numero);
    }
    else if(numero < 0)
    {
        negativos.push(numero)
    }
    else if(numero == 0)
    {
        break
    }


}while(numero != 0);

let qtdPositivos = positivos.length;
let qtdNegativos = negativos.length;

let total = qtdNegativos + qtdPositivos;

console.log(`quantidade de positivos: ${qtdPositivos}`);
console.log(`quantidade de negativos: ${qtdNegativos}`);
console.log(`quantidade total: ${total}`);
