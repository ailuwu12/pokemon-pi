const { Router } = require("express");
const getTypesHandler = require("../handlers/getTypesHandler")

const typesRouter = Router();

typesRouter.get("/", getTypesHandler);

module.exports = typesRouter;

