// import { Request, Response } from "express";
// import { TechModel } from "./model";
// import { IBaseDao } from "../dao";

// export let findAll = (res: Response) => {
//   Tech.find({}, (err, techs: TechModel[]) => {
//     if (err) {
//       res.status(500).send(`Error retreiving techs. Error: ${err}`);
//     }
//     res.status(200).send(techs);
//   })
// }

// export class TechController {
//   baseDao: IBaseDao<TechModel>;

//   constructor(baseDao: IBaseDao<TechModel>) {
//     this.baseDao = baseDao;
//   }

//   getAllTechs(res: Response): void {
//     this.baseDao.findAll()
//       .then(techs => {
//         res.status(200).send(techs);
//       })
//       .catch(err => {
//         res.status(500).send(`Error retrieving techs: ${err}`);
//       });
//   }

//   getTechById(req: Request, res: Response): void {
//     this.baseDao.findById(req.params.id)
//       .then(techs => {
//         res.status(200).send(techs);
//       })
//       .catch(err => {
//         res.status(500).send(`Error retrieving tech with id ${req.params.id}: ${err}`);
//       });
//   }
// }
