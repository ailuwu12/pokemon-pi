const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getPokemonById = async (id, source) => {
    let pokemonApi = {}
    if(source === "api"){
        data = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
        pokemonApi = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            alterImage: data.sprites.other.dream_world.front_default,
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            height: data.height,
            weight: data.weight,
            types: data.types.map((t) => t.type.name),
        }
        return pokemonApi;
    }else{
        const dbPokemonsRaw = await Pokemon.findAll({
            where: { id: id },
            include: {
                model: Type,
                through: { attributes: [] },
                attributes: ["name"],
            }
        });
        const dbPokemon = dbPokemonsRaw[0].dataValues; 
        const types = dbPokemon.types.map(type => type.name);
        dbPokemon.types = types;
        return dbPokemon
    }

}

module.exports = getPokemonById;