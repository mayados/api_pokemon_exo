const result = document.querySelector(".result");
console.log(result) 

// Je définis le nombre de pokémon que je souhaite afficher


// // J'appelle l'api pour afficher les pokemon, je limite l'affichage à nbPokemon définit plus haut
// fetch("https://pokeapi.co/api/v2/pokemon?limit="+ nbPokemon +"")
// // Je convertis la réponse de l'api en JSON
// .then( (response) =>response.json())
// // Je nomme la réponse "data", et comme j'attends plusieurs éléments, je mets les accolades
// .then( (data)=> {
//     // On vérifie qu'on a bien récupéré les données grâce à console.log()
//     console.log(data)
//     // Pour chaque résultat, que je nomme pokemon, faire...
//    data.results.forEach( pokemon => {
//     // += car on fait ça pour chaque élémnent
//     result.innerHTML += pokemon.name + " <br>"
//     fetch("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i+".png")
//     .then( (response) => response.json())
//     .then( (pokeImage)=> {
//         pokeImage.forEach( image => {
//             result.innerHTML += 
//         })
//     })
//    })
// })

const nbPokemon = 10;

for (let i = 1; i <= nbPokemon; i++){

    fetch("https://pokeapi.co/api/v2/pokemon/"+i+"")
    .then( (response) =>response.json())
    .then( (pokemon) => {
        let div = document.createElement("div")
        div.classList.add("pokemon")
        let p = document.createElement("p")
        p.classList.add("pokeName")
        div.appendChild(p)
        document.body.appendChild(div)
        console.log(p)
        p.innerHTML = pokemon.name
        // console.log(data)
        // result.innerHTML += pokemon.name 
        // Pour éviter la concaténation, on utilise le guillement du 7 pour entourer le code, et on utilise ${variable} pour mettre la variable que l'on souhaite
        div.innerHTML += `<img class='pokeImg' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png'>` + "<br>"

    })
}