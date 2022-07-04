function almacenar_indice(index){
    localStorage.setItem("indice",index)
}

function editar(index){
   let listado_producto = JSON.parse(localStorage.getItem("listado_producto",index))

   document.getElementById("inp_url").value = listado_producto[index].imagen
   document.getElementById("inp_descripcion").value = listado_producto[index].descripcion
   document.getElementById("inp_precio").value = listado_producto[index].precio

   localStorage.setItem("indice_update",index)
}