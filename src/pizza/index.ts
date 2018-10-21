import express from "express";
import Pizza from "./model";
import { Mongo } from "../base/dao";
import { getAllHandler, getByIdHandler } from "../base/controller";
// import { PizzaController } from "./controller";

const router = express.Router();

// const baseDao = new MongoBaseDao<PizzaModel>(Pizza);
// const controller = new PizzaController(baseDao);

// router.get("/", controller.getAllPizzas);

// router.get("/:id", controller.getPizzaById);

const findAllPizzas = Mongo.findAll(Pizza);
const findPizzaById = Mongo.findById(Pizza);

router.get("/", getAllHandler(findAllPizzas));

router.get("/:id", getByIdHandler(findPizzaById));

export default router;