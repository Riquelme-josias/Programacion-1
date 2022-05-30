import Triangulo from "./Triangulo.js";

const mostrar1 = () =>{

    const b = document.getElementById("inp_a").value
    const al = document.getElementById("inp_c").value

    const triangulo = new Triangulo()
    triangulo.al = al
    triangulo.b = b

    const area_triangulo = triangulo.calcular_area()
    document.getElementById("h_titulo1").textContent = area_triangulo


}
const boton = document.getElementById("btn_mostrar").addEventListener("click",mostrar1)


import Rectangulo from "./rectangulo.js";

const mostrar = () => {

    const b = document.getElementById("inp_1").value
    const a = document.getElementById("inp_2").value
    
    const rectangulo = new Rectangulo()
    
    rectangulo.b = b
    rectangulo.a = a

    const area_rectangulo = rectangulo.calcular()
    document.getElementById("h_titulo").textContent = area_rectangulo 

}
document.getElementById("btn_mostrar2").addEventListener("click",mostrar)

import Trapecio from "./trapecio.js";

const mostrar2 = () =>{

    const bs = document.getElementById("inp_a_tr").value
    const bi = document.getElementById("inp_b_tr").value
    const altura1 = document.getElementById("inp_c_tr").value

    const trapecio = new Trapecio()

    trapecio.base_superior = bs
    trapecio.base_inferior = bi
    trapecio.altura = altura1 

    const area_trapecio = trapecio.calcular_areatrap()
    document.getElementById("h_titulo2").textContent = area_trapecio
}
document.getElementById("btn_mostrar5").addEventListener("click",mostrar2)