export default class Informacion_starwars{
    constructor(){

    }

    async mostrar(){
        const api = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=star%20wars')
        const json_datos = await api.json()
        const lista = json_datos.Search

        const tar = []
        lista.forEach(element => {
            const columnas = `
            <div class= "col-4">

            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${element.Poster}" class="img-fluid rounded-start" alt="">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${element.Title}</h5>
                    <p class="card-text">${element.Year}</p>
                    <p class="card-text"><small class="text-muted"></small></p>
                </div>
                </div>
            </div>
            </div>
    
    
            </div> 
        
            `
            tar.push(columnas)
        });
        
        document.getElementById ("catalogo").innerHTML = tar.join('')
    }

}
