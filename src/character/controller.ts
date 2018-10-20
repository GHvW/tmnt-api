import { CharacterModel } from "./model";
import { Request, Response } from "express";
import { IBaseDao } from "../dao";

// export let findAll = (res: Response) => {
//   Character.find({}, (err, characters: CharacterModel[]) => {
//     if (err) {
//       res.status(500).send(`There was a problem retreiving characters: ${err}`);
//     }
//     res.status(200).send(characters);
//   });
// }

// const baseDao = new MongoBaseDao<CharacterModel>(Character); //abstract

export class CharacterController {
  baseDao: IBaseDao<CharacterModel>;

  constructor(baseDao: IBaseDao<CharacterModel>) {
    this.baseDao = baseDao;
  }

  getAllCharacters(res: Response): void {
    this.baseDao.findAll()
      .then(characters => {
        res.status(200).send(characters);
      })
      .catch(err => {
        res.status(500).send(`Error retrieving characters: ${err}`)
      });
  }

  getCharacterById(req: Request, res: Response): void {
    this.baseDao.findById(req.params.id)
      .then(character => {
        res.status(200).send(character);
      })
      .catch(err => {
        res.status(500).send(`Error retrieving character with id ${req.params.id}: ${err}`);
      });
  }
}

