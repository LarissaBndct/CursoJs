let numero = 8;
console.log(`0 x 8 = ${0*numero}`);
console.log(`1 x 8 = ${1*numero}`);
console.log(`2 x 8 = ${2*numero}`);
console.log(`3 x 8 = ${3*numero}`);
console.log(`4 x 8 = ${4*numero}`);
console.log(`5 x 8 = ${5*numero}`);
console.log(`6 x 8 = ${6*numero}`);
console.log(`7 x 8 = ${7*numero}`);
console.log(`8 x 8 = ${9*numero}`);
console.log(`9 x 8 = ${9*numero}`);
console.log(`10 x 8 = ${10*numero}`);

for(var i = 0; i <=10; i++)
{
    console.log(` ${i} x 8 = ${i*8}`);
}
const readline = require('readline-sync');

const nome = readline.question("Qual o seu nome? ");
console.log(`O nome informado foi ${nome}`);

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

//  rl.question('qual o seu nome?', (resposta) => {
//      console.log(`o nome informado foi ${resposta}`);
//     rl.close();
// });

