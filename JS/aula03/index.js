// let numero = 8;
// console.log(`0 x 8 = ${0*numero}`);
// console.log(`1 x 8 = ${1*numero}`);
// console.log(`2 x 8 = ${2*numero}`);
// console.log(`3 x 8 = ${3*numero}`);
// console.log(`4 x 8 = ${4*numero}`);
// console.log(`5 x 8 = ${5*numero}`);
// console.log(`6 x 8 = ${6*numero}`);
// console.log(`7 x 8 = ${7*numero}`);
// console.log(`8 x 8 = ${9*numero}`);
// console.log(`9 x 8 = ${9*numero}`);
// console.log(`10 x 8 = ${10*numero}`);

 const readline = require('readline-sync');

// const nome = readline.question("Qual o seu nome? ");
// console.log(`O nome informado foi ${nome}`);
// const idade = parseInt(readline.question("Qual sua idade?"));
// console.log(`a idade informada foi ${idade}`);



// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

//  rl.question('qual o seu nome?', (resposta) => {
//      console.log(`o nome informado foi ${resposta}`);
//     rl.close();
// });

// var numero = readline.questionFloat("Informe o numero para construir a tabuada: ");

// var multiplicador = 0;
// console.log(` ${numero} x ${multiplicador} = ${numero * multiplicador++ } `);
// console.log(` ${numero} x ${multiplicador} = ${numero * multiplicador++ } `);
// console.log(` ${numero} x ${multiplicador} = ${numero * multiplicador++ } `);
// console.log(` ${numero} x ${multiplicador} = ${numero * multiplicador++ } `);
// console.log(` ${numero} x ${multiplicador} = ${numero * multiplicador++ } `);
// console.log(` ${numero} x ${multiplicador} = ${numero * multiplicador++ } `);
// console.log(` ${numero} x ${multiplicador} = ${numero * multiplicador++ } `);
// console.log(` ${numero} x ${multiplicador} = ${numero * multiplicador++ } `);
// console.log(` ${numero} x ${multiplicador} = ${numero * multiplicador++ } `);
// console.log(` ${numero} x ${multiplicador} = ${numero * multiplicador++ } `);
// console.log(` ${numero} x ${multiplicador} = ${numero * multiplicador++ } `);

// //receber 4 notas e calcular a media

// var nota1 = readline.questionFloat("Informe a primeira nota: ");
// var nota2 = readline.questionFloat("Informe a segunda nota: ");
// var nota3 = readline.questionFloat("Informe a terceira nota: ");
// var nota4 = readline.questionFloat("Informe a quarta nota: ");

// var media = (nota1 + nota2 + nota3 + nota4) / 4;

// console.log(`A media das notas informadas é de: ${media}`);

// //objeto
// const nome = "Thiago";
// const pessoa = {
//     "nome": "Tafarel Chicotti",
//     "idade": 32,
//     "cidade": "Araraquara",
//     "profissao": "Professor",
//     "endereco" : {
//         "logradouro": "Rua A",
//         "complemento": "Frente",
//         "numero": 548,
//         "bairro": "Jardim Jardinada",
//         "cidade": "Araraquara",
//         "uf": "São Paulo"
//     }
// };

// console.log(pessoa.endereco.logradouro);
// pessoa.endereco.logradouro = "Rua Joao Batista";
// console.log(pessoa.endereco.logradouro);
// delete pessoa.cidade;
// pessoa.genero = "Bonito";
// console.log(pessoa);
// console.log(nome);

// //lista

// const lista = [] // Array ("Lista")

// console.log(lista.pop());

// console.log("Seja bem-vindo ao exército!");
// idade = readline.question("informe sua idade: ");

// //se idade >=18, entao escrever bem-vindo

//     if(idade >= 18)
// {
//     console.log("Bem-vindo");

// }
// else
// {
//     console.log("idade insuficiente");
// }

//solicite um numero inteiro no terminal e exiba se é par ou impar

// numero = readline.question("Informe um numero: ");

// if(numero%2 == 0 )
// {
//     console.log(`O numero ${numero} é par!`);
// }
// else
// {
//     console.log(`O numero ${numero} é impar!`);
// }

// // media se media for >=6 aprovado

// nota1 = readline.questionFloat("Informe a primeira nota: ");
// nota2 = readline.questionFloat("Informe a segunda nota: ");
// nota3 = readline.questionFloat("Informe a terceira nota: ");
// nota4 = readline.questionFloat("Informe a quarta nota: ");

// media = (nota1 + nota2 + nota3 + nota4)/ 4;

// //if ternario
// media >= 6 ? console.log(`media ${media} status: Aprovado`) : console.log(`média ${media} status Reprovado`);


//todo: melhorar mensagem quando totalvenda < 5000
// var valorDesconto = 0;
// var taxaDesconto = "";

// totalVenda = readline.questionFloat("Insira o total vendido: ");

// if(totalVenda < 5000)
// {
//     valorDesconto = totalVenda;
//     taxaDesconto = "não houve desconto para o valor informado.";
// }
// else if(totalVenda < 10000){
//     // valorDesconto = totalVenda - (totalVenda * 0.03);
//     taxaDesconto = "3%";
// }
// else if(totalVenda < 15000){
//     // valorDesconto = totalVenda - (totalVenda * 0.06);
//     taxaDesconto = "6%";
// }
// else{
//     // valorDesconto = totalVenda - (totalVenda * 0.09);
//     taxaDesconto = "9%";
// }
// valorDesconto = totalVenda - (totalVenda *(parseFloat(taxaDesconto)/100))
// console.log(`Valor original: ${totalVenda} \nvalor com desconto: ${valorDesconto} \ntaxa de desconto: ${toString(taxaDesconto)}`);


// var idade = readline.questionInt("Informe a idade: ");
// var mensagem = "";
// if(idade >= 18)
// {
//     var sexo = readline.question("Informe o sexo (f - feminio ou m - Masculino): ").toLowerCase();
//     if(sexo == "m")
//     {
//         mensagem = 'bem-vindo recruta';
//     }
//     else if(sexo == "f")
//     {
//         var alistar = readline.question("Deseja se alistar? (s - sim ou n - não)").toLowerCase();
//         if(alistar == "s")
//         {
//             mensagem = "bem-vindo guerreira.";
//         }
//         else
//         {
//             mensagem = "Obrigado";
//         }
//     }
// }
// else
// {
//     mensagem = "É preciso ter mais de 18 anos para se alistar";
// }
// console.log(mensagem);

// numero = readline.questionInt("Informe o numero para calcular a tabuada: ");

// for(var contador = 0; contador <=10; contador++ )
// {
//     console.log(`${numero} x ${contador} = ${numero * contador}`);
// }

// for(var tabuada = 1; tabuada <=10; tabuada ++)
// {
//     console.log("\n");
//     for(multiplicador = 0; multiplicador <= 10; multiplicador++)
//     {
//         console.log(`${tabuada} x ${multiplicador} = ${tabuada * multiplicador}`);
//     }
// }

// for(var contador = 0; contador < 5; contador++)
// {
//     numero = readline.questionFloat("Informe um numero: ");
//     if(numero % 2 == 0)
//     {
//         console.log("Esse numero é par");
//     }
//     else
//     {
//         console.log("Esse numero é ímpar");
//     }
// }

// var contador = 0;

// while(contador < 5)
// {
//     console.log(contador);
//     contador++;
// }
// console.log("Agora com o while: ")

// do{
//     console.log(contador)
//     contador--;
// }while(contador > 0)

// var soma = 0;
// do
// {
//     var numero = readline.questionInt("Insira um numero: ");
//     soma += numero;
// }while(soma < 100);
// console.log(soma);

// console.log("Com o while");

// somaWhile = 0;
// while(somaWhile < 100)
// {
//     var numeroWhile = readline.questionInt("Insira um numero: ");
//     somaWhile += numeroWhile;
// }
// console.log(somaWhile);
// var contador = 0;
// do
// {
//     senha = readline.question("Insira a senha ");

//     if(senha != "senh@123")
//     {
//         console.log(`Senha incorreta!`);
//     }
//     contador++;
//     if(contador > 5)
//     {
//         console.log("Tentativas esgotaram, encerrando programa...");
//         break;
//     }
// }while(senha != "senh@123");

// //objeto 
// const objeto = {
//     "nome_banco_dados": "BDSenai",
//     "usuario": "usuarioPai",
//     "senha": "mechamadelorde"
// }


// if ("usuario" in objeto) {
//     console.log(`Campo: usuario | Valor: ${objeto["usuario"]}`);
// }

//funcao 

// function DizOlaMundo(){
//     console.log("Olá mundo!");
// }

// DizOlaMundo();

// function dizOla(nome, sobrenome){
//     console.log(`Olá ${nome} ${sobrenome}`);
// }
// function definirNomeCompleto(nome, sobrenome)
// {
//     return `${nome} ${sobrenome}`;
// }
// const nome = definirNomeCompleto("maria", "das dores");
// console.log(nome);
// dizOla("juvenal", "silva");


//funcao padrao ou nominal
// function soma(num1, num2)
// {
//     return num1 + num2;
// }
// function subtracao(num1, num2)
// {
//     return num1 - num2;
// }
// function multiplicacao(num1, num2)
// {
//     return num1 * num2;
// }
// function divisao(num1, num2)
// {
//     return num1 / num2;
// }

// let operacao = "";

// do{
//     operacao = readline.question("\nSelecione a operacao: \n+ : soma \n- : subtracao \n* : multiplicacao \n/ : divisao \nou digite 's' para sair\n");

//     let ehOperacao = operacao == "+" || operacao == "-" || operacao == "*" || operacao == "/";
    
//     if(ehOperacao)
//     {
//         let num1 = readline.questionFloat("Digite o primeiro numero da operacao ");
//         let num2 = readline.questionFloat("Digite o segundo numeor da operacao ");
//         if(operacao == "+")
//         {
//             console.log(`resultado: ${soma(num1, num2)}`);
//         }
//         else if(operacao == "-")
//         {
//             console.log(`resultado: ${subtracao(num1, num2)}`);
//         }
//         else if(operacao == "*")
//         {
//             console.log(`resultado: ${multiplicacao(num1, num2)}`);
//         }
//         else if(operacao == "/")
//         {
//             console.log(`resultado: ${divisao(num1, num2)}`);
//         }
//         else
//         {
//             console.log("Opção invalida \n")
//         }
//     }
//     else if(operacao == 's')
//     {
//         break;
//     }
//     else
//     {
//         console.log("Opção invalida \n")
//     }
    
// }while(operacao != "s");


// //funcao atribuida\anonima não tem nome expecifico - normalmente é utilizada em callback (funcao chamada no fim de outra funcao)

// const somatorio = function(num1, num2)
// {
//     return num1 + num2;
// }
// console.log(somatorio(3,5));

// //funcao flecha/ arrow function permite suprimir informacoes para tornar o codigo mais limpo

// const quadratica = numero => numero * numero; //numero virou um parametro
// /* é uma versao enxuta da seguinte funcao :
// function(numero) {
// return numero * numero;
// }
// */

// //variaçoes arrow function
// console.log(quadratica(5));
// const somaria = (numero1, numero2) => numero1 + numero2; //só funciona quando a função tiver só uma linha
// const somaVariasLinhas = (numero1, numero2) => {
//     console.log("O primeiro número informado foi:", numero1);
//     console.log("O segundo número informado foi:", numero2);
//     return numero1 + numero2;
// }
// console.log(somaVariasLinhas(8,10));

// //callback é quando passa uma funcao como parametro
// function ExibirProximoNumero(numero, proximoFn)
// {
//     console.log("O numero atual é: ",numero);
//     const proximoNumeroRecebido = proximoFn(numero);
//     console.log(`o proximo numero é ${proximoNumeroRecebido}`);
// }

// const proximo = function (numero) { 
//     return numero + 1;
// }

// exibirProximoNumero(33, function (numero) { 
//     return numero + 1;
// });

// const soma = (n1, n2) => n1 + n2;
// const subtracao = (n1, n2) => n1 - n2;
// const multiplicacao = (n1, n2) => n1 * n2;
// const divisao = (n1, n2) => n1 / n2; 

// const numAquinta = readline.question("Insira um numero para elevar a quinta potencia: ");
// const num1 = readline.question("Insira o segundo numero: ");
// const num2 = readline.question("insira o terceiro numero: ");

// const elevadoAquinta = function(numero)
// {
//     const resultado = numero**5;
//     return console.log(`resultado ${resultado}`);
// }
// elevadoAquinta(numAquinta);

// const EhMaior = function(num1, num2)
// {
//     if(num1 > num2)
//     {
//         console.log(`${num1} é maior`);
//     }
//     else if(num2 > num1)
//     {
//         console.log(`${num2} é maior`);
//     }
//     else if(num1 == num2)
//     {
//         console.log(`${num1} e ${num2} sao iguais`);
//     }
// }

// EhMaior(num1,num2);

//arrays
// const frutas = ["maçã", "banana", "laranja"];
// console.log(frutas);
// console.log(frutas[1]);
// frutas[1] = "uva";
// console.log(frutas);
// console.log(frutas.length);
// // prop length = Tamanho / Quantidade de Itens

// frutas.push(1510, 15, 949);
// // fn push = Inserir elementos na última posição do array

// frutas.unshift("melancia");
// // fn unshif = Inserir elementos na primeira posição do array

// console.log(frutas);

// console.log(frutas.slice(2,4));
// // fn slice = Recorta a lista

const feriados = [];

feriados.push("carnaval");
feriados.push("pascoa");
feriados.push("Dia do trabalhador");
feriados.push("Tiradentes");

console.log(feriados);

feriados.shift("pascoa");
console.log(feriados);
feriados.shift("Dia do trabalhador");
//principais funcoes do array q nao deppendem de um callback
const nome = "Juvenal Juvelino Juvenio de Souza";
nome.toUpperCase(); // Transformar em Letras Maiúsculas
nome.toLowerCase(); // Transformar em Letras Mínúsculas
nome.length // Tamanho do texto.
//nome.split(); // Dividir o texto em um Array.
console.log(nome.startsWith("Ju")); // Começando com (Retorna true/false)
console.log(nome.endsWith("za")); // Terminando com (Retorna true/false)
console.log(nome.includes("Geronimo")); // Procura o texto no meio da frase

//cmo trabalhar arrays e callbacks 

const filtro = fruta => fruta.startsWith("ma");
console.log(frutas);
console.log(frutas.filter(filtro));
console.log(frutas.filter(fruta => fruta.includes("ç")));
// fn filter - Filtrar uma cópia do array baseado em condições estabelecidas no seu callback.

console.log(frutas.find(fruta => fruta.startsWith("m")));
// fn find - Retorna o primeiro elemento que satisfaz a condição ou undefined

console.log(frutas.findIndex(fruta => fruta.startsWith("banana")));
// fn findIndex - Retorna a posição do primeiro elemento que satisfaz a condição ou -1

console.log(frutas.join(", "))
// fn join - Juntar todas as partes do array através de uma cola.

const numeros = [1,2,3,4];
console.log(numeros.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0))
console.log(numeros.reduce(function (valorAnterior, valorAtual) { 
    return valorAnterior + valorAtual;
}, 0))
const reduzirValores = function (valorAnterior, valorAtual) { 
    return valorAnterior + valorAtual;
}
console.log(numeros.reduce(reduzirValores, 0))
// fn reduce - Reduzir a um único valor o nosso array.

