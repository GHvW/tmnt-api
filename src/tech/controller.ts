import { Response } from "express";
import { default as Tech, TechModel } from "./model";

export let findAll = (res: Response) => {
  Tech.find({}, (err, techs: TechModel[]) => {
    if (err) {
      res.status(500).send(`Error retreiving techs. Error: ${err}`);
    }
    res.status(200).send(techs);
  })
}