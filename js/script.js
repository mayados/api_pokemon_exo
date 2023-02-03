const result = document.querySelector(".result");
console.log(result) 

// Je définis le nombre de pokémon que je souhaite afficher
const nbPokemon = 10;

// J'appelle l'api pour afficher les pokemon, je limite l'affichage à nbPokemon définit plus haut
fetch("https://pokeapi.co/api/v2/pokemon?limit="+ nbPokemon +"")
// Je convertis la réponse de l'api en JSON
.then( (response) =>response.json())
// Je nomme la réponse "data", et comme j'attends plusieurs éléments, je mets les accolades
.then( (data)=> {
    // On vérifie qu'on a bien récupéré les données grâce à console.log()
    console.log(data)
    // Pour chaque résultat, que je nomme pokemon, faire...
   data.results.forEach( pokemon => {
    // += car on fait ça pour chaque élémnent
    result.innerHTML += pokemon.name + " <br>"
   })
})