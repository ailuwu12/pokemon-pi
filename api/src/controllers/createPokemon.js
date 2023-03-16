const { Pokemon } = require("../db");

const image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png";

const createPokemon = async (pokemon) => {
    const repeated1 = await Pokemon.findAll({where: { name: pokemon.name }})
    if(repeated1.length) throw new Error("that pokemon was already created")

    if(pokemon.image === "" || pokemon.image === null || pokemon.image === undefined) pokemon.image = image;
    if(Number(pokemon.speed) <= 0) pokemon.speed = null;
    if(Number(pokemon.height) <= 0) pokemon.height = null;
    if(Number(pokemon.weight) <= 0) pokemon.weight = null;
    if(Number(pokemon.hp > 300)) throw new Error("too many hp")
    if(Number(pokemon.attack > 200)) throw new Error("too many attack")
    if(Number(pokemon.defense > 200)) throw new Error("too many defense")
        if(!pokemon.types.length) throw new Error("types cannot be null");
        if(pokemon.types.length > 3) throw new Error("too many types");

        const newPokemon = await Pokemon.create(pokemon);
        await newPokemon.addType(pokemon.types)
        return newPokemon;
}

module.exports = createPokemon;

