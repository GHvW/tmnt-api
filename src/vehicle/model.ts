import mongoose from "mongoose";

export type VehicleModel = mongoose.Document & {
  name: string,
  description: string
}

const vehicleSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);;
export default Vehicle;