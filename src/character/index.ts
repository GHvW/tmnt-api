import express from "express";
import { default as Character, CharacterModel } from "./model";
import { MongoBaseDao } from "../dao";

import { CharacterController } from "./controller";

let router = express.Router();
const baseDao = new MongoBaseDao<CharacterModel>(Character);
const controller = new CharacterController(baseDao);

router.get("/", controller.getAllCharacters);

router.get("/:id", controller.getCharacterById);

export default router;