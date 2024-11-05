//requerir 4 notas e calcular a media

const readline = require("readline-sync");

var nota1 = readline.questionFloat("Insira a primeira nota: ");
var nota2 = readline.questionFloat("Insira a segunda nota: ");
var nota3 = readline.questionFloat("Insira a terceira nota: ");
var nota4 = readline.questionFloat("Insira a quarta nota: ");

var media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`media das notas informadas: ${media}`);
