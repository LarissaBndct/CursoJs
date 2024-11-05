// * 3 - Escreva um programa que receba 4 notas de um aluno e imprima a sua média final.
const readline = require("readline-sync");

const nota1 = readline.questionFloat("Informe a primeira nota: ");
const nota2 = readline.questionFloat("Informe a segunda nota: ");
const nota3 = readline.questionFloat("Informe a terceira nota: ");
const nota4 = readline.questionFloat("Informe a quarta nota: ");

const media = (nota1 + nota2 + nota3 + nota4)/ 4;

console.log(`a media das notas informadas é de: ${media}`);