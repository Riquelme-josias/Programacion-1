const nose = async() => {
    const rta = await fetch ('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    const dolar = await rta.json()
   

    let filas = []

    dolar.forEach( element => {
        
        let tr = `
            <tr>
                <td>${element.casa.nombre}</td>
                <td>${element.casa.compra}</td>
                <td>${element.casa.venta}</td>
            </tr>
        `

        filas.push(tr)

    });
    

    document.getElementById("cuerpo_tabla").innerHTML = filas.join('')

}
const boton = document.getElementById("btn_ejecutar").addEventListener("click",nose)