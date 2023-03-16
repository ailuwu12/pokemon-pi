const { Pokemon } = require("../db");
const getApiData = require("./getApiData");
const { Type } = require("../db")

const getAllPokemons = async () => {
  //API:
  const apiPokemons = await getApiData();
  
    //Data Base:
    let dbPokemons = await Pokemon.findAll({include: {
        attributes: ["name"],
        model: Type,
        through: {
        attributes: [],
        },
      },});

      if(dbPokemons){
        dbPokemons = dbPokemons.map((pokemon) => {
          pokemon = JSON.parse(JSON.stringify(pokemon));
          pokemon.types = pokemon.types.map(t => t.name);
          return pokemon;
        })
      }

    return [...dbPokemons, ...apiPokemons];
}

module.exports = getAllPokemons;

