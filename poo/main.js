import Vehiculo from "./vehiculo.js";

const mostrar = () => {
    const marca = document.getElementById("inp_1").value
    const km = document.getElementById("inp_2").value
    
    const auto = new Vehiculo(marca,km)
    auto.mostrar_datos_vehiculo()

}
const boton = document.getElementById("btn_mostrar").addEventListener("click",mostrar)