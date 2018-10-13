import { Response } from "express";
import { default as Vehicle, VehicleModel } from "./model";

export let findAll = (res: Response) => {
  Vehicle.find({}, (err, vehicles: VehicleModel[]) => {
    if (err) {
      res.status(500).send("");
    }
    res.status(200).send(vehicles);
  })
}