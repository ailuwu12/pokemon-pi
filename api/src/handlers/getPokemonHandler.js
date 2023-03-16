const getAllPokemons = require("../controllers/getAllPokemons");
const getPokemonByName = require("../controllers/getPokemonByName");

const getPokemonHandler = async (req, res) => {
    const { name } = req.query;
    try {
        let pokemons = [];
        if(!name) pokemons = await getAllPokemons();
        else pokemons = await getPokemonByName(name);
        if(!pokemons) return res.status(404).json({error: `Couldn't find a pokemon named ${name}`})
        return res.status(200).json(pokemons);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
};
  

module.exports = getPokemonHandler;
  