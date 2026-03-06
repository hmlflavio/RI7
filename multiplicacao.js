import Calculo from './calculo.js';

export default class Multiplicacao extends Calculo {
    calcular(numero1, numero2) {
        return numero1 * numero2;
    }
}