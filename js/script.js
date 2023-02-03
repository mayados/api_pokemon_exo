const result = document.querySelector(".result");
// console.log(result) 


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

// Un tableau assoicatif javaScript est obligatoirement un tableau json
// création d'un tableau associatif pour changer la couleur de fond en fonction de l'espèce
const colors = {
    grass: ["#89E482", {iconType: '<i class="fa-solid fa-seedling"></i>', iconColor: 'green'}],
    water: ["#72DDF0", {iconType: '<i class="fa-solid fa-water"></i>', iconColor: 'blue'}],
    normal: ["#DDE3E5", {iconType: '<i class="fa-regular fa-circle"></i>', iconColor: 'white'}],
    fire: ["#E98928", {iconType: '<i class="fa-solid fa-fire"></i>', iconColor: 'orange'}],
    poison: ["#E37057", {iconType: '<i class="fa-solid fa-skull-crossbones"></i>', iconColor: 'red'}],
    bug: ["#D085E7", {iconType: '<i class="fa-solid fa-bug"></i>', iconColor: 'brown'}],
    ground: ["#8F5C2D", {iconType: '<i class="fa-solid fa-grip-lines"></i>', iconColor: '#B68A64'}],
    electric: ["#1F65D6", {iconType: '<i class="fa-solid fa-bolt"></i>', iconColor: '#2700F9'}],
    rock: ["#867F78", {iconType: '<i class="fa-solid fa-hill-rockslide"></i>', iconColor: 'gray'}],
    psychic: ["#EFDF22", {iconType: '<i class="fa-solid fa-brain"></i>', iconColor: '#2D003D'}],
    fighting: ["#8A17C4", {iconType: '<i class="fa-solid fa-user-ninja"></i>', iconColor: '#F8E699'}],
    fairy: ["#CF2C79", {iconType: '<i class="fa-regular fa-star"></i>', iconColor: 'pink'}],
    ice: ["#ABFFF4", {iconType: '<i class="fa-solid fa-igloo"></i>', iconColor: '#2F9A87'}],
    dragon: ["#813E42", {iconType: '<i class="fa-solid fa-seedling"></i>', iconColor: '#CB6708'}],
    steel: ["#7E7E7E", {iconType: '<i class="fa-solid fa-seedling"></i>', iconColor: '#403932'}],
    ghost: ["#EAE8E8", {iconType: '<i class="fa-solid fa-seedling"></i>', iconColor: '#CAB29A'}],
    unknown: ["#733E00", {iconType: '<i class="fa-solid fa-seedling"></i>', iconColor: '#561D1B'}],
    dark: ["#565C4B", {iconType: '<i class="fa-solid fa-seedling"></i>', iconColor: 'white'}],
    shadow: ["#727E68", {iconType: '<i class="fa-solid fa-seedling"></i>', iconColor: 'black'}],
    flying: ["#C00009", {iconType: '<i class="fa-solid fa-seedling"></i>', iconColor: '253914'}],
}

// Je définis le nombre de pokémon que je souhaite afficher
const nbPokemon = 200;

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
        let span = document.createElement("span")
        span.classList.add("pokemonIcon")
        div.appendChild(p3)        
        div.appendChild(p)
        div.appendChild(p2)
        div.appendChild(span)

        // Mettre la première lettre du nom du pokemon en majuscules
        let pokemonName = pokemon.name
        let capitalPokemonName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)

        document.body.appendChild(div)
       
        p.innerHTML = capitalPokemonName
        // Afficher le type principal = 1er élément du tableau
        p2.innerHTML = pokemon.types[0].type.name
        // On cherche le code couleur associé au type
        div.style.background = colors[pokemon.types[0].type.name][0];
        span.innerHTML = colors[pokemon.types[0].type.name][1].iconType;
        span.style.color = colors[pokemon.types[0].type.name][1].iconColor;
        // console.log(colors[pokemon.types[0].type.name])



        //  méthode avec slice pour afficher 3 digits
        p3.innerHTML = ("00" + pokemon.id).slice(-3)

    // Méthode avec if pour afficher 3 digits = plus lourd
        // if(pokemon.id < 10){
        //      p3.innerHTML = "00" + pokemon.id            
        // }else if(pokemon.id >= 10 && pokemon.id < 100){
        //     p3.innerHTML = "0" + pokemon.id     
        // }else{
        //     p3.innerHTML = pokemon.id
        // }
   


        // console.log(pokemon)
        // result.innerHTML += pokemon.name 
        // Pour éviter la concaténation, on utilise le guillement du 7 pour entourer le code, et on utilise ${variable} pour mettre la variable que l'on souhaite
        div.innerHTML += `<img class='pokeImg' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png'>` + "<br>"
        // Ajouter à la fin , car on va du plus petit au plus grand
        result.appendChild(div)
    })
}