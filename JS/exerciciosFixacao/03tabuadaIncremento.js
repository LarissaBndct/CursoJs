//crie uma tabuada utilizando o inncremento para o multiplicador e utilize require para pedir o numero a ser calculado

const readline = require("readline-sync");

var numero = readline.questionInt("Insira o numero a ser calculado: ");
var multiplicador = 1;

console.log(`${numero} x ${multiplicador} = ${numero * multiplicador++}`);
console.log(`${numero} x ${multiplicador} = ${numero * multiplicador++}`);
console.log(`${numero} x ${multiplicador} = ${numero * multiplicador++}`);
console.log(`${numero} x ${multiplicador} = ${numero * multiplicador++}`);
console.log(`${numero} x ${multiplicador} = ${numero * multiplicador++}`);
console.log(`${numero} x ${multiplicador} = ${numero * multiplicador++}`);
console.log(`${numero} x ${multiplicador} = ${numero * multiplicador++}`);
console.log(`${numero} x ${multiplicador} = ${numero * multiplicador++}`);
console.log(`${numero} x ${multiplicador} = ${numero * multiplicador++}`);
console.log(`${numero} x ${multiplicador} = ${numero * multiplicador++}`);
