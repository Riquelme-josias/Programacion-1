let moneda_v = ['Bitcoin','Ethereum','Tether','BNB','Cardano','Dai','Helium','Shiba Inu','Tron','Cronos','Solana']

moneda_v.unshift("Stellar")
console.log(moneda_v)

let indice = moneda_v.indexOf("Shiba Inu")
moneda_v.splice(indice,2)
console.log(moneda_v)

moneda_v.push("Gate")
console.log(moneda_v)

function mostrar(){

    const longitud = moneda_v.length
    document.getElementById("h_titulo1").textContent = longitud

    const ultimo_elemento = moneda_v[moneda_v.length-1]
    document.getElementById("h_titulo2").textContent = ultimo_elemento

    const indice = moneda_v.indexOf("Helium")
    document.getElementById("h_titulo3").textContent = moneda_v[indice]


}

boton = document.getElementById("btn_a").addEventListener("click",mostrar)