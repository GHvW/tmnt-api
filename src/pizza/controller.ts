import { Request, Response } from "express";
import { PizzaModel } from "./model";
import { IBaseDao } from "../dao";

// export const findAll = (res: Response) => {
//   Pizza.find({}, (err, pizzas: PizzaModel[]) => {
//     if (err) {
//       res.status(500).send(`Error retrieving pizzas: ${err}`);
//     }
//     res.status(200).send(pizzas);
//   });
// }

export class PizzaController {
  baseDao: IBaseDao<PizzaModel>;

  constructor(baseDao: IBaseDao<PizzaModel>) {
    this.baseDao = baseDao;
  }

  getAllPizzas(res: Response): void {
    this.baseDao.findAll()
      .then(pizzas => {
        res.status(200).send(pizzas);
      })
      .catch(err => {
        res.status(500).send(`Error retrieving Pizzas: ${err}`);
      });
  }

  getPizzaById(req: Request, res: Response): void {
    this.baseDao.findById(req.params.id)
      .then(pizza => {
        res.status(200).send(pizza);
      })
      .catch(err => {
        res.status(500).send(`Error retrieving pizza with id ${req.params.id}: ${err}`);
      });
  }
}
