export default class Heladeras{

    constructor(ima,desc,pre){
        this.imagen = ima
        this.descripcion = desc
        this.precio = pre
    }

    guardar_producto(){

        let nuevo_producto= {
            imagen: this.imagen,
            descripcion: this.descripcion,
            precio: this.precio
        }

        if("listado_producto" in localStorage){
            
            let lista_pro = JSON.parse(localStorage.getItem("listado_producto"))
            lista_pro.push(nuevo_producto)
            localStorage.setItem("listado_producto",JSON.stringify(lista_pro))

        }else{
            
            let lista_pro = []
            lista_pro.push(nuevo_producto)


            //crear el sector de almacenamiento
            localStorage.setItem("listado_producto",JSON.stringify(lista_pro))

        }

        //invocamos al metodo obtener producto
        this.obtener_producto()

    }

    obtener_producto(){

        let listado_producto = JSON.parse(localStorage.getItem("listado_producto"))

        let filas = []

        listado_producto.forEach( (element,index) => {
            let fila = `
                <tr>
                    <td>${element.imagen}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.precio}</td>
                    <td>
                        <button onclick ="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-outline-danger"><i class="fa fa-trash"></i></button>
                        <button onclick ="editar(${index})"class="btn btn-outline-danger"><i class="fa fa-edit"></i></button>       
                    </td>
                </tr>
            `
            filas.push(fila)
        
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }

    eliminar_producto(index){

        let lista_pro = JSON.parse(localStorage.getItem("listado_producto"))

        lista_pro.splice(index,1)

        localStorage.setItem("listado_producto",JSON.stringify(lista_pro))

        this.obtener_producto()
    }

    actualizar_producto(){
        //fui a buscar el listado de clientes al storage
       let listado_producto = JSON.parse(localStorage.getItem("listado_producto"))

        listado_producto[index].imagen = dcument.getElementById("inp_url").value
        listado_producto[index].descripcion = dcument.getElementById("inp_descripcion").value
        listado_producto[index].precio = dcument.getElementById("inp_precio").value

        localStorage.setItem("listado_producto", JSON.stringify(listado_producto))
        //volvemos a reconstruir la tabla
        this.obtener_producto()

    }
}
