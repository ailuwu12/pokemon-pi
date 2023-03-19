const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

const validate = (req, res, next) => {
    const pokemon = req.body;
    if(!pokemon.name) return res.status(400).json({error: "Missing name"});
    if(!pokemon.hp) return res.status(400).json({error: "Missing hp"});
    if(!pokemon.attack) return res.status(400).json({error: "Missing attack"});
    if(!pokemon.defense) return res.status(400).json({error: "Missing defense"});
    if(!regexImage.test(pokemon.image)) return res.status(400).json({error: "Invalid image"}); 
    if(Number(pokemon.hp > 300)) return res.status(400).json({error: "HP is too high"});
    if(Number(pokemon.attack > 200)) return res.status(400).json({error: "Attack is too high"});
    if(Number(pokemon.defense > 200)) return res.status(400).json({error: "Defense is too high"});
    if(pokemon.types.length === 0) return res.status(400).json({error: "Missing types"});
    if(pokemon.types.length > 3) return res.status(400).json({error: "Too many types"});
    if(pokemon.types.includes("19") && pokemon.types.length > 1) return res.status(400).json({error: "Unknown type pokemons can only have that type"});

    next();
}

module.exports = validate