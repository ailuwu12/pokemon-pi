const createPokemon = require("../controllers/createPokemon");

const postPokemonHandler = async (req, res) => {
    const pokemon = req.body;
    try {
        const newPokemon = await createPokemon(pokemon);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};
  

module.exports = postPokemonHandler;