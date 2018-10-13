import mongoose from "mongoose";

export type TechModel = mongoose.Document & {
  name: string,
  description: string
}

const techSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Tech = mongoose.model("Tech", techSchema);
export default Tech;