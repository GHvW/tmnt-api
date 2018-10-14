import express from "express";

import { default as Tech, TechModel } from "./model"
import { MongoBaseDao } from "../dao";
import { TechController } from "./controller";

let router = express.Router();

const baseDao = new MongoBaseDao<TechModel>(Tech);
const controller = new TechController(baseDao);

router.get("/", controller.getAllTechs);

router.get("/:id", controller.getTechById);

export default router;