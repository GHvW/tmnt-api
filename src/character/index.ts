import express from "express";
import { default as Character, CharacterModel } from "./model";
import { MongoBaseDao } from "../dao";

import { CharacterController } from "./controller";

let router = express.Router();
const baseDao = new MongoBaseDao<CharacterModel>(Character);
// console.log(baseDao);
const controller = new CharacterController(baseDao);
// console.log(controller.baseDao.findAll());
controller.baseDao.findAll().then(data => console.log(data));

router.get("/", controller.getAllCharacters);

router.get("/:id", controller.getCharacterById);

export default router;
