// * 6 - Escreva um programa que irá receber 2 valores e deverá informar qual é o maior e qual é o menor.
const readline = require("readline-sync");

let valor1 = readline.questionFloat("Informe o primeiro valor: ");
let valor2 = readline.questionFloat("Informe o segundo valor: ");
if(valor1 > valor2)
{
    console.log(`${valor1} é maior que ${valor2}`);
}
else if(valor1 == valor2)
{
    console.log(`${valor1} e ${valor2} são iguais `);
}
else
{
    console.log(`${valor2} é maior que ${valor1}`);
}
