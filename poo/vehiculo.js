export default class Vehiculo {

    marca;
    km;
    constructor(m,k){
        this.marca = m
        this.km = k

    }

    mostrar_datos_vehiculo(){
        console.log(`
            marca; ${this.marca}
            kilometraje: ${this.km}
        `)
    }
}