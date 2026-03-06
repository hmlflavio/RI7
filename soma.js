import Calculo from './calculo.js';

export default class Soma extends Calculo {
    calcular(numero1, numero2) {
        return numero1 + numero2;
    }
}