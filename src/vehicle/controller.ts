import { Request, Response } from "express";
import { VehicleModel } from "./model";
import { IBaseDao } from "../dao";

// export let findAll = (res: Response) => {
//   Vehicle.find({}, (err, vehicles: VehicleModel[]) => {
//     if (err) {
//       res.status(500).send("");
//     }
//     res.status(200).send(vehicles);
//   })
// }

export class VehicleController {
  baseDao: IBaseDao<VehicleModel>;

  constructor(baseDao: IBaseDao<VehicleModel>) {
    this.baseDao = baseDao;
  }

  getAllVehicles(res: Response): void {
    this.baseDao.findAll()
      .then(vehicles => {
        res.status(200).send(vehicles);
      })
      .catch(err => {
        res.status(500).send(`Error retrieving vehicles: ${err}`);
      });
  }

  getVehicleById(req: Request, res: Response): void {
    this.baseDao.findById(req.params.id)
      .then(vehicle => {
        res.status(200).send(vehicle);
      })
      .catch(err => {
        res.status(500).send(`Error retrieving vehicle with id ${req.params.id}: ${err}`);
      });
  }
}
