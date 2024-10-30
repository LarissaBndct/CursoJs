// * 7 - Escreva um programa que irá receber 4 números e deverá informar a soma de todos os números, o menor número e o maior número, além da média dos valores.
const readline = require('readline-sync');

function soma(num1, num2, num3, num4)
{
    return num1 + num2 + num3 + num4;
}
function maior(num1, num2, num3, num4)
{
    let resposta = "";
    if(num1 > num2 && num1 > num3 && num1 > num4)
    {
        resposta = `${num1} é maior que todos`;
    }
    else if(num2 > num1 && num2 > num3 && num2 > num4)
    {
        resposta = `${num2} é maior que todos`;
    }
    else if(num3 > num1 && num3 > num2 && num3 > num4)
    {
        resposta = `${num3} é maior que todos`;
    }
    else if(num4 > num1 && num4 > num2 && num4 > num4)
    {
        resposta = `${num4} é maior que todos`;
    }

    return resposta;
}
function menor(num1, num2, num3, num4)
{
    let resposta = "";
    if(num1 < num2 && num1 < num3 && num1 < num4)
    {
        resposta = `${num1} é menor que todos`;
    }
    else if(num2 < num1 && num2 < num3 && num2 < num4)
    {
        resposta = `${num2} é menor que todos`;
    }
    else if(num3 < num1 && num3 < num2 && num3 < num4)
    {
        resposta = `${num3} é menor que todos`;
    }
    else if(num4 < num1 && num4 < num2 && num4 < num4)
    {
        resposta = `${num4} é menor que todos`;
    }

    return resposta;
}
function media(num1, num2, num3, num4)
{
    return (num1 + num2 + num3 + num4)/4;
}
let numero1 = readline.questionFloat("Informe o primeiro numero: ");
let numero2 = readline.questionFloat("Informe o segundo numero: ");
let numero3 = readline.questionFloat("Informe o terceiro numero: ");
let numero4 = readline.questionFloat("Informe o quarto numero: ");

console.log(`a soma de todos os numeros é: ${soma(numero1, numero2, numero3, numero4)}`);
console.log(maior(numero1, numero2, numero3, numero4));
console.log(menor(numero1, numero2, numero3, numero4));
console.log(`a média entre os numeros informados é de: ${media(numero1, numero2, numero3, numero4)}`);