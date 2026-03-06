export default class Mensagens {
    mostrarBoasVindas() {
        console.log("=== Calculadora CLI (Com Interfaces) ===");
        console.log("Exemplo de uso: 10 5 Somar");
    }

    obterPergunta() {
        return "\nQuais são os teus números e a operação desejada?\n> ";
    }

    mostrarResultado(resultado) {
        console.log(`O resultado da operação é: ${resultado}\n`);
    }

    mostrarErro() {
        console.log("Operação não reconhecida. Tenta Somar, Subtrair ou Multiplicar.");
    }
}