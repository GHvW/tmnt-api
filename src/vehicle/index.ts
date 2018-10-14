import express from "express";
import { default as Vehicle, VehicleModel } from "./model";
import { MongoBaseDao } from "../dao";
import { VehicleController } from "./controller";

let router = express.Router();

const baseDao = new MongoBaseDao<VehicleModel>(Vehicle);
const controller = new VehicleController(baseDao);

router.get("/", controller.getAllVehicles);

router.get("/:id", controller.getVehicleById);

export default router;