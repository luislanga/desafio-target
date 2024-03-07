const readline = require('readline');
const sum = require('./questions/question1');
const fibonacci = require('./questions/question2');
const answer3 = require('./questions/question3');
const answer4 = require('./questions/question4');
const invertString = require('./questions/question5');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nOlá!\n\nEsse é o desafio Target 2024 por Luis Langa.")

function displayMenu() {
    rl.question("\n\nPara continuar, informe o número da questão que deseja acessar: \n\n\
    1 - Soma \n\
    2 - Fibonacci \n\
    3 - Complete a lógica \n\
    4 - Interruptores duvidosos \n\
    5 - Inversor de string \n\
    6 - Sair \n\n", (questionNumber) => {
        switch (questionNumber) {
            case '1':
                console.log("\n\n" + sum());
                break;
            case '2':
                rl.question("Insira um número para verificar se pertence à sequência Fibonacci \n\n", (num) => {
                    console.log("\n\n" + fibonacci(parseInt(num)));
                    displayMenu()
                });
                break;
            case '3':
                answer3();
                break;
            case '4':
                answer4();
                break;
            case '5':
                rl.question("Insira uma string para ser invertida \n\n", (str) => {
                    console.log("\n\n" + invertString(str));
                    displayMenu()
                });
                break;
            case '6':
              console.log("\n\nObrigado pela atenção!")
              rl.close()
              return
            default:
                console.log("Opção inválida. Por favor, selecione um número válido.");
                break;
        }

        displayMenu();
    });
}

displayMenu();