const axios = require("axios")

const getTypesApi = async () => {
    const types = (await axios("https://pokeapi.co/api/v2/type")).data.results;
    return types;
}

module.exports = getTypesApi