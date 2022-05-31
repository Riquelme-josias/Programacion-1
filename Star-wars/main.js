import Informacion_starwars from "./starwars.js";

const obtener_datos= () =>{

    const instancia = new Informacion_starwars()

    instancia.mostrar()

    



}

document.getElementById("btn_obtener").addEventListener("click", obtener_datos)
