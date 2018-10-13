import { Response } from "express";
import { default as Pizza, PizzaModel } from "./model";

export const findAll = (res: Response) => {
  Pizza.find({}, (err, pizzas: PizzaModel[]) => {
    if (err) {
      res.status(500).send(`Error retrieving pizzas: ${err}`);
    }
    res.status(200).send(pizzas);
  });
}