const result = document.querySelector(".result");
console.log(result) 


/* Méthode correcte mais demande plus de performances */

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


/* Méthode la mieux adaptée niveau performance 
Est asynchrone = les pokemons ne seront pas forcément dans l'ordre, ca va dépendre du chargement de l'image, des cractéristiques de l'objet etc.. Provient
de l'api */

// Je définis le nombre de pokémon que je souhaite afficher
const nbPokemon = 110;

for (let i = 1; i <= nbPokemon; i++){

    fetch("https://pokeapi.co/api/v2/pokemon/"+i+"")
    .then( (response) =>response.json())
    .then( (pokemon) => {
        let div = document.createElement("div")
        div.classList.add("pokemon")
        let p = document.createElement("p")
        p.classList.add("pokeName")
        let p2 = document.createElement("p")
        p.classList.add("pokeType")
        let p3 = document.createElement("p")
        p3.classList.add("pokeNumber")
        div.appendChild(p3)        
        div.appendChild(p)
        div.appendChild(p2)

        // Mettre la première lettre du nom du pokemon en majuscules
        let pokemonName = pokemon.name
        let capitalPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)

        document.body.appendChild(div)
        console.log(p)
        p.innerHTML = capitalPokemonName
        // Afficher le type principal = 1er élément du tableau
        p2.innerHTML = pokemon.types[0].type.name
        if(pokemon.id < 10){
             p3.innerHTML = "00" + pokemon.id            
        }else if(pokemon.id >= 10 && pokemon.id < 100){
            p3.innerHTML = "0" + pokemon.id     
        }else{
            p3.innerHTML = pokemon.id
        }
   
        console.log(pokemon)
        // result.innerHTML += pokemon.name 
        // Pour éviter la concaténation, on utilise le guillement du 7 pour entourer le code, et on utilise ${variable} pour mettre la variable que l'on souhaite
        div.innerHTML += `<img class='pokeImg' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png'>` + "<br>"
        // Ajouter à la fin , car on va du plus petit au plus grand
        result.appendChild(div)
    })
}