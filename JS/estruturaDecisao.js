//estruturas de decisão são blocos de código que são utilizados para a quebra de fluxo de um algoritmo.
//essas estruturas são executadas a partir de uma condição
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