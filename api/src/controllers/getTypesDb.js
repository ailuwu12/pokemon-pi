const { Type, Pokemon } = require("../db");
const getTypesApi = require("./getTypesApi")

const getTypesDb = async () =>{
    const dbTypes = await Type.findAll();

    if (!dbTypes.length){
        try {
            const typesAPI = await getTypesApi();
            const types = typesAPI.map((t) => ({name: t.name}));
            await Type.bulkCreate(types);
            return types
        } catch (error) {
            throw new Error(error.message);
        }

    }
    return dbTypes;
}

module.exports = getTypesDb;