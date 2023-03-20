const { Pokemon } = require("../db");

const image = "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/6a/latest/20230115164405/Pok%C3%A9_Ball_EP.png/130px-Pok%C3%A9_Ball_EP.png"
const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

const createPokemon = async (pokemon) => {
    const repeated1 = await Pokemon.findAll({where: { name: pokemon.name }})
    if(repeated1.length) throw new Error("that pokemon was already created")
    if(pokemon.image !== "" && !regexImage.test(pokemon.image)) throw new Error("invalid image")
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

