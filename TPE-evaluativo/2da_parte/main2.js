

function mostrar(){
        
    let listado_producto = JSON.parse(localStorage.getItem("listado_producto"))

    const lista = []
    listado_producto.forEach(element => {
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
                <div>
                    <button onclick="agregar('${element.descripcion}','${element.precio}')" id="btn_mostrar" class="btn btn-danger">Agregar</button> 
                </div>
            </div>
        </div> 
    
        `
            lista.push(columnas)
        });
        
        document.getElementById ("catalogo").innerHTML = lista.join('')
    }
   

mostrar()

function agregar(d,p){


    let nuevo_pedido = {
        descripcion: d,
        precio:p,
        cantidad:1
    }

    if("listado_pedido" in localStorage){
            
        let lista_pe = JSON.parse(localStorage.getItem("listado_pedido"))
        lista_pe.push(nuevo_pedido)
        localStorage.setItem("listado_pedido",JSON.stringify(lista_pe))

    }else{
        
        let lista_pe = []
        lista_pe.push(nuevo_pedido)


        //crear el sector de almacenamiento
        localStorage.setItem("listado_pedido",JSON.stringify(lista_pe))

    }

    //invocamos al metodo obtener producto
    this.crear_tablita()

}
document.getElementById("btn_mostrar").addEventListener("click",agregar)

function crear_tablita(){

    let lista_pedido = JSON.parse(localStorage.getItem("listado_pedido"))

    let filas = []

    lista_pedido.forEach(element => {

        let fila = `
            <tr>
                <td>
                    <img style="width:4rem" src="${element.imagen}" class="img-fluid"></img>
                </td>
                <td>${element.descripcion}</td>
                <td>${element.precio}</td>
                <td>${element.cantidad}</td>
            </tr>
        `
        filas.push(fila)
        
    });
    document.getElementById("tbody2").innerHTML = filas.join('')
}
document.getElementById("btn_mostrar").addEventListener("click",crear_tablita)


