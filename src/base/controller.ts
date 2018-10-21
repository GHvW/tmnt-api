import { Request, Response } from "express";
import { findAll, findById } from "./dao";

export const getAllHandler = <T>(dbFn: findAll<T>) => {
  return (res: Response) => {
    dbFn()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send(`Error retrieving data: ${err}`);
      });
  }
}

export const getByIdHandler = <T>(dbFn: findById<T>) => {
  return (req: Request, res: Response) => {
    dbFn(req.params.id)
      .then(item => {
        res.status(200).send(item);
      })
      .catch(err => {
        res.status(500).send(`Error retrieiving item with id ${req.params.id}: ${err}`);
      });
  }
}