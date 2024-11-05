// 1 - Faça um programa que leia um número e identifique se ele é PAR ou Ímpar.
const readline = require("readline-sync");

do{
    let numero = readline.question(" Informe um numero para descobrir se e par ou impar ou tecle 's' para sair ");
    if(parseInt(numero) % 2 == 0)
    {
        console.log(`o numero ${numero} é par`)
    }
    else if(numero.toLowerCase() == 's')
    {
        break;
    }
    else
    {
        console.log(`o numero ${numero} é impar`);
    }

}while(numero !='s');