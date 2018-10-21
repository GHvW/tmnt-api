import express from "express";
import Tech from "./model"
import { Mongo } from "../base/dao";
import { getAllHandler, getByIdHandler } from "../base/controller";
// import { TechController } from "./controller";

let router = express.Router();

// const baseDao = new MongoBaseDao<TechModel>(Tech);
// const controller = new TechController(baseDao);

// router.get("/", controller.getAllTechs);

// router.get("/:id", controller.getTechById);
const findAllTech = Mongo.findAll(Tech);
const findTechById = Mongo.findById(Tech);

router.get("/", getAllHandler(findAllTech));

router.get("/:id", getByIdHandler(findTechById));

export default router;