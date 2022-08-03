function almacenar_indice(index){
    localStorage.setItem("indice",index)
}

function editar(index){
   let listado_producto = JSON.parse(localStorage.getItem("listado_producto",index))

   document.getElementById("inp_url").value = listado_producto[index].imagen
   document.getElementById("inp_descripcion").value = listado_producto[index].descripcion
   document.getElementById("inp_precio").value = listado_producto[index].precio

   localStorage.setItem("indice_update",index)

   document.getElementById("btn_mostrar").style.display = "none"
   document.getElementById("btn_actualizar").style.display = "block"
}

function mostrar(){
    
    let listado_producto = JSON.parse(localStorage.getItem("listado_producto"))

    const lista = []
    lista.forEach(element => {
        const columnas = `
        <div class= "col-4">

        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${element.imagen}" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${element.descripcion}</h5>
                <p class="card-text">${element.precio}</p>
                <p class="card-text"><small class="text-muted"></small></p>
            </div>
            </div>
        </div>
        </div>


        </div> 
    
        `
        listado_producto.push(columnas)
    });
    
    document.getElementById ("catalogo").innerHTML = listado_producto.join('')
}

