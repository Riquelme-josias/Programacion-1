//crear un arreglo de objetos

let vehiculos = [
    {
        marca: 'ford',
        modelo: 'focus',
        anio: 2014,
        origen: 'mercosur'

    },
    {
        marca: 'volkswagen',
        modelo: 'golf 1.4 TSI',
        anio: 2014,
        origen: 'mexico'

    }
]

//recorrer un array de objetos
vehiculos.forEach( (element,index) => {
    console.log(index+'-'+element.modelo)
});

//funciones asincronas - concepto de Async y Await
const recorrer = () => {

    
}