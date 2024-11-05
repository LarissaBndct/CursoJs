//objeto é a instância de uma classe, onde existe mais de um dado. Em um objeto pode ter atributos e metodos:

const pessoa = {
    "nome": "Larissa",
    "idade": 23,
    "cargo": "estagiária",
    "salario": 700
};
//dentro de um objeto pode ter vários sub-objetos:

const informacoes = {
    altura: 1.64,
    endereco: {
        rua: "Rua treze",
        numero: 23,
        bairro: "residencial",
        cidade: "Araraquara",
        estado: "SP",
        pais: "Brasil"
    }
};
//OBSERVAÇÃO: no javascript as propriedades podem ser escritas com aspas ou sem aspas, mas é importante manter um padrão: se comecar um objeto com as aspas, mantenha com aspas. e vice e versa

//para ACESSAR as propriedades e valores de um objeto é necessario dividir o caminho por ponto(.):
console.log(`primeiro informo o objeto, em seguida informo a propriedade: pessoa.nome: ${pessoa.nome}, informacoes.endereco.rua: ${informacoes.endereco.rua}`);

//para DELETAR uma propriedade, utilizamos a palavra delete e em seguida o caminho da propriedade:
console.log(informacoes.endereco);
delete informacoes.endereco.numero;
console.log(informacoes.endereco);

//para INSERIR uma nova propriedade, é necessário informar onde a nova propriedade será inserida, o nome da propriedade e atribuir um valor a ela:
console.log(informacoes);
informacoes.peso = 50;
console.log(informacoes);