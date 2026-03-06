// EasterEgg: "Dance_Or_Die"

import * as readline from 'readline';
import Mensagens from './mensagens.js';
import Soma from './soma.js';
import Subtracao from './subtracao.js';
import Multiplicacao from './multiplicacao.js';

const mensagens = new Mensagens();
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mensagens.mostrarBoasVindas();

leitor.question(mensagens.obterPergunta(), (valor) => {
    let instrucoes = valor.trim().split(' ');
    let operacao = instrucoes[instrucoes.length - 1];
    
    let numero1 = Number(instrucoes[0]);
    let numero2 = Number(instrucoes[1]);
    let calculo;

    switch (operacao) {
        case 'Somar':
            calculo = new Soma();
            mensagens.mostrarResultado(calculo.calcular(numero1, numero2));
            break;
        case 'Subtrair':
            calculo = new Subtracao();
            mensagens.mostrarResultado(calculo.calcular(numero1, numero2));
            break;
        case 'Multiplicar':
            calculo = new Multiplicacao();
            mensagens.mostrarResultado(calculo.calcular(numero1, numero2));
            break;
        default:
            mensagens.mostrarErro();
    }
    
    leitor.close();
});