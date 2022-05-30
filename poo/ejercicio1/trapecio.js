export default class Trapecio{

    base_superior;
    base_inferior;
    altura;

    constructor(){}

    calcular_areatrap(){
        const trapecio = ( ((this.base_superior) + Number(this.base_inferior)) / 2)* this.altura
        return trapecio
    }
}