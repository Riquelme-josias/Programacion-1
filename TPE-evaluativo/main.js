import Heladeras from "./heladerias.js";

function guardar(){

    let imagen = document.getElementById("inp_url").value
    let descripcion = document.getElementById("inp_descripcion").value
    let precio = document.getElementById("inp_precio").value

    let hela = new Heladeras(imagen,descripcion,precio)
    hela.guardar_producto()

}
document.getElementById("btn_mostrar").addEventListener("click", guardar)

function listar(){
    let hela = new Heladeras()
    hela.obtener_producto()
}

listar()

function eliminar(){
    let indice = localStorage.getItem("indice")
    let helade = new Heladeras()
    helade.eliminar_producto(indice)

}

document.getElementById("btn_eliminar").addEventListener("click", eliminar)

function actualizar(){

    let index = localStorage.getItem("indice_update")
    let hela = new hela()
    hela.actualizar_producto(index)

}
