/*no javascrip, uma lista é a mesma coisa que um array: armazena várias variáveis.
Para criar uma lista atribui-se os colchetes [] a variavel: */

const listaFrutas = [];

//para ADICIONAR um item a lista utilizamos o método push() e passar como parâmetro o valor a ser adicionado:

listaFrutas.push("Mamão");
console.log(listaFrutas);
listaFrutas.push("Limão");
console.log(listaFrutas);
listaFrutas.push("Banana");
console.log(listaFrutas);
listaFrutas.push("TOMATE");
console.log(listaFrutas);
listaFrutas.push("Morango");
console.log(listaFrutas);
listaFrutas.push("Maçã");
console.log(listaFrutas);

//para REMOVER um item da lista, utilizamos o método pop() passando como parâmetro o valor a ser removido:
listaFrutas.pop("TOMATE");
console.log(listaFrutas);

//para ACESSAR um item da lista, podemos utilizar seu indice:
console.log(listaFrutas[3]);
//OBSERVAÇÃO: todos os indices se iniciam no 0.

//para DELETAR um item de uma lista , utiliza-se a palavra delete
console.log(listaFrutas);
delete listaFrutas[1];
console.log(listaFrutas); 
/* OBSERVAÇÃO: a diferença entre o pop e o delete, é que o pop remove e atualiza o tamanho da lista já
o delete remove, mantem o tamanho e define o item como undefined ou empty item*/


