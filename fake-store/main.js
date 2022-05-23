async function obtener_datos() {
    const datos = await fetch ('https://fakestoreapi.com/products/category/electronics')

    const datos1 = await datos.json()
   

    let totales_columnas =[]
    datos1.forEach(element => {
        let columnas =`
        
        <div class= "col-4">

        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${element.image}" class="img-fluid">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.price}</p>
                <p class="card-text"><small class="text-muted">Episodio:${element.descripcion}</small></p>
            </div>
            </div>
        </div>
        </div>


        </div> 
    

        

    `;
    totales_columnas.push(columnas)
     
 });

 document.getElementById ("catalogo").innerHTML = totales_columnas.join('')


        
    
}

const boton= document.getElementById("btn_obtener")
boton.addEventListener("click",obtener_datos)