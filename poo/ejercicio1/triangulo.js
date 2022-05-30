export default class Triangulo {

    b;
    al;

    constructor(){}

    calcular_area(){
        const area = ( Number(this.b) + Number(this.al) )/2
        return area
    }
    
}