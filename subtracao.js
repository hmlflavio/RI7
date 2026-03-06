import Calculo from './calculo.js';

export default class Subtracao extends Calculo {
    calcular(numero1, numero2) {
        return numero1 - numero2;
    }
}