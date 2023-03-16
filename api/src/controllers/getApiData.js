const axios = require("axios");
const getPokemonById = require("../controllers/getPokemonById");

const getApiData = async (pokemons = []) =>{
    const pokemonPromises = Array.from({length: 200}, (_, i) => getPokemonById(i + 1, "api"));
    const resolvedPromises = await Promise.all(pokemonPromises);
    pokemons.push(...resolvedPromises);
    return pokemons;
}

module.exports = getApiData;
