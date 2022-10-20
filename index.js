const container = document.getElementById("container")

fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5")
.then(res => res.json())
.then(data => {
    data.forEach(producto => {
        const div = document.createElement("div")
        div.innerHTML = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${producto.image}">
        <div class="card-body">
        <h5 class="card-title">"Nombre: ${producto.name}" </h5>
        <p class="card-text">"Genero: ${producto.gender}"</p>
        </div>
        </div>
        `
        container.appendChild(div);
    });
})



// const personajes = async () => {
//     try{
//     const resp = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5')
//     const data = await resp.json()

//     data.forEach((personaje) => {
//         const carta = document.createElement("div")
//         div.innerHTML = `
//         <img src="https://rickandmortyapi.com/api/character/1,2,3,4,5">
//         <h4>"${personaje.name}"</h4>
//         <p>"${personaje.gender}"</p>
//         `

//     container.append(div)
//     })}
//     catch{
        
//     }
    
// }

// personajes ()