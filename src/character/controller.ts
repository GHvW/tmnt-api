import { default as Character, CharacterModel } from "./model";
import { Response } from "express";

export let findAll = (res: Response) => {
  Character.find({}, (err, characters: CharacterModel[]) => {
    if (err) {
      res.status(500).send(`There was a problem retreiving characters: ${err}`);
    }
    res.status(200).send(characters);
  });
}