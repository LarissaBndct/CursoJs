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

numero = readline.question("Informe um numero: ");

if(numero%2 == 0 )
{
    console.log(`O numero ${numero} é par!`);
}
else
{
    console.log(`O numero ${numero} é impar!`);
}

// media se media for >=6 aprovado

nota1 = readline.questionFloat("Informe a primeira nota: ");
nota2 = readline.questionFloat("Informe a segunda nota: ");
nota3 = readline.questionFloat("Informe a terceira nota: ");
nota4 = readline.questionFloat("Informe a quarta nota: ");

media = (nota1 + nota2 + nota3 + nota4)/ 4;

//if ternario
media >= 6 ? console.log(`media ${media} status: Aprovado`) : console.log(`média ${media} status Reprovado`);
