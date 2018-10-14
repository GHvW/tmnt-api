import express from "express";
import { default as Pizza, PizzaModel } from "./model";
import { MongoBaseDao } from "../dao";
import { PizzaController } from "./controller";

const router = express.Router();

const baseDao = new MongoBaseDao<PizzaModel>(Pizza);
const controller = new PizzaController(baseDao);

router.get("/", controller.getAllPizzas);

router.get("/:id", controller.getPizzaById);

export default router;