const getTypesDb = require("../controllers/getTypesDb")

const getTypesHandler = async (req, res) => {
    try {
        const types = await getTypesDb();
        return res.status(200).json(types)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
};
  

module.exports = getTypesHandler;