import mongoose from "mongoose";

export interface CharacterModel extends mongoose.Document {
  name: string,
  biology: string,
  weapon: string,
  description: string
}

const characterSchema = new mongoose.Schema({
  name: String,
  biology: String,
  weapon: String,
  description: String
});

const Character = mongoose.model("Character", characterSchema);
export default Character;
