const axios = require("axios");
const getPokemonById = require("../controllers/getPokemonById");

const getApiData = async () =>
{
    let arrayPokemonsApi = [];

      // carga de pokeAPI -----------------------------------------
    await axios.get("https://pokeapi.co/api/v2/pokemon?limit=200")
      .then(async (response) => {
          let arrayResultApi = response.data.results;
          let arrayPromises = [];
          arrayResultApi.map((p) => arrayPromises.push(axios.get(p.url))); 
          // se obtiene uno por uno los datos de cada pokemon
        
          await Promise.all(arrayPromises)
          .then((pokemons) => {
              arrayPokemonsApi = pokemons.map((p) => {
                  return {
                    id: p.data.id,
                    name: p.data.name,
                    image: p.data.sprites.front_default,
                    alterImage: p.data.sprites.other.dream_world.front_default,
                    hp: p.data.stats[0].base_stat,
                    attack: p.data.stats[1].base_stat,
                    defense: p.data.stats[2].base_stat,
                    speed: p.data.stats[5].base_stat,
                    height: p.data.height,
                    weight: p.data.weight,
                    types: p.data.types.map((t) => t.type.name),
                  };  // return 
              }); // map
          }) 
          .catch((error) => {
              return error;
          });

      })
      .catch((error) => {
          return error;
      });
    return arrayPokemonsApi;
};

module.exports = getApiData;

