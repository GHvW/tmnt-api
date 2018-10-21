import { Request, Response } from "express";

export const getAllHandler = <T>(dbFn: () => Promise<T[]>) => {
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

export const getByIdHandler = <T>(dbFn: (id: string) => Promise<T | null>) => {
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