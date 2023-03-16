const { Pokemon, Type } = require("../db");
const axios = require("axios")
const { Sequelize } = require('sequelize');

const URL = "https://pokeapi.co/api/v2/pokemon";

const getPokemonByName = async (name) => {
    const pokemon = []
    const dbPokemonsRaw = await Pokemon.findAll({
        where: { name: { [Sequelize.Op.iLike]: name } },
        include: {
            model: Type,
            through: { attributes: [] },
            attributes: ["name"],
        }
    });
    
    if(dbPokemonsRaw.length){
        const dbPokemon = dbPokemonsRaw[0].dataValues;
        const types = dbPokemon.types.map(type => type.name);
        dbPokemon.types = types;
        pokemon.push(dbPokemon);
        return pokemon
    }

    const newName = name.toLowerCase()

    const data = (await axios(`${URL}/${newName}`)).data;
    const apiPokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,            
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        height: data.height,
        weight: data.weight,
        types: data.types.map((t) => t.type.name),
    }

    pokemon.push(apiPokemon);
    return pokemon;
;
}

module.exports = getPokemonByName;


