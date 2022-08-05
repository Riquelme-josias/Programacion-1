const framwework = {

    nombre:'javaScript',
    librerias:{

        libreria_1:'Jquery',

        libreria_2:'React',

        libreria_3:'Vuejs'

    }

    
}
const mostrar = () => {

    const {nombre} = framwework

    const {libreria_1,libreria_2,libreria_3} = framwework.librerias
    console.log(`
    nombre: ${nombre}.
    libreria_1: ${libreria_1}.
    libreria_2: ${libreria_2}.
    libreria_3: ${libreria_3}.
    `)
}
document.getElementById("btn_ejecutar").addEventListener("click",mostrar)