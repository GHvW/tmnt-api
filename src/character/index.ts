import express from "express";
import Character from "./model";
import { findAll, findById } from "../base/dao";
import { getAllHandler, getByIdHandler } from "../base/controller";

// import { CharacterController } from "./controller";

let router = express.Router();
// const baseDao = new MongoBaseDao<CharacterModel>(Character);
// console.log(baseDao);
// const controller = new CharacterController(baseDao);
// router.get("/", controller.getAllCharacters.bind(controller));
// router.get("/:id", controller.getCharacterById.bind(controller));

const findAllCharacters = findAll(Character);
const findCharacterById = findById(Character);

router.get("/", getAllHandler(findAllCharacters));

router.get("/:id", getByIdHandler(findCharacterById));

export default router;
