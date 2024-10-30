/*estruturas de decisão são utilizadas quando é necessária uma mudança no fluxo do código
de acordo com uma determinada condição */
//para criar uma estrutura de decisão utiliza-se o if seguido da condição necessária para que ela seja executada.
//Pode ser acompanhada por um else if ou um else, que não são obrigatórios: 

const readline = require("readline-sync");

var idade = 23;
console.log(`idade: ${idade}`);
if(idade < 18)
{
    console.log("Menor de idade");
}
else if(idade ==18)
{
    console.log("Você tem 18 anos");
}
else
{
    console.log("Maior de idade");
}

//if ternário é um if de uma linha só. Sua sintaxe é: <condição ? resposta se condição == true : resposta se condição == false;> :
let idade = 18;
let mensagem = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
console.log(mensagem); // Imprime: Você é maior de idade.
