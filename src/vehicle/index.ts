import express from "express";
import Vehicle from "./model";
import { Mongo } from "../base/dao";
import { getAllHandler, getByIdHandler } from "../base/controller";
// import { MongoBaseDao } from "../base/dao";
// import { VehicleController } from "./controller";

let router = express.Router();

// const baseDao = new MongoBaseDao<VehicleModel>(Vehicle);
// const controller = new VehicleController(baseDao);

// router.get("/", controller.getAllVehicles);

// router.get("/:id", controller.getVehicleById);
const findAllVehicles = Mongo.findAll(Vehicle);
const findVehicleById = Mongo.findById(Vehicle);

router.get("/", getAllHandler(findAllVehicles));

router.get("/:id", getByIdHandler(findVehicleById));

export default router;