const { Router } = require("express");
const getPokemonHandler = require("../handlers/getPokemonHandler");
const getPokemonByIdHandler = require("../handlers/getPokemonByIdHandler");
const postPokemonHandler = require("../handlers/postPokemonHandler");
const validate = require("../middlewares/validate")

const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemonHandler);

pokemonsRouter.get("/:id", getPokemonByIdHandler);

pokemonsRouter.post("/", validate, postPokemonHandler);

module.exports = pokemonsRouter;