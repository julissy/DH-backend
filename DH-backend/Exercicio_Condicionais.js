let readLine = require("readline-sync")

let profissao = readLine.question("Qual sua profissao: ");
let salario = 5000;
let novoSalario;

while(profissao != 'sair') {
switch (profissao.toLowerCase()) {
  case "desenvolvedor jr":
    novoSalario = salario * 1.10;
   
    console.log(`Você é um ${profissao}`);
    console.log(`Com base no salário de R$${salario},00`);
    console.log(`Seu novo salário é R$${novoSalario},00`);
    console.log(`E você teve um aumento de R$${novoSalario - salario},00 Reais`);
    break
  case "desenvolvedor pleno":
    novoSalario = salario * 2.15; 

    console.log(`Você é um ${profissao}`)
    console.log(`Com base no salário de R$${salario},00`);
    console.log(`Seu novo salário é R$${novoSalario},00`);
    console.log(`E você teve um aumento de R$${novoSalario - salario},00 Reais`);
    break;
  default:
    novoSalario = salario * 1.05;

    console.log(`Você é um ${profissao}`);
    console.log(`Com base no salário de R$${salario},00`);
    console.log(`Seu novo salário é R$${novoSalario},00`);
    console.log(`E você teve um aumento de R$${novoSalario - salario},00 Reais`);
}
profissao = readLine.question("Qual sua profissao ou escreva sair para encerrar: ")
}
