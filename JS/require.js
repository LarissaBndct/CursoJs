/*para que o programa consiga fazer uma requisição ao usuário e o usuário informar em seguida, são necessárias algumas operações: 
1°: no terminal, colar o seguinte comando: npm install readline-sync
essa ação será feita só uma vez
2°: no codigo, utilizar criar uma instancia para que possamos utilizar o readline-sync:*/
const readline = require('readline-sync');

var inserir = readline.question("Agora podemos pedir informacoes ao usuario, entendeu? ");
console.log(inserir);
