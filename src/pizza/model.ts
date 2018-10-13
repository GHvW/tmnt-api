import mongoose from "mongoose";

export type PizzaModel = mongoose.Document & {
  toppings: string[],
  episode: string
}

const pizzaSchema = new mongoose.Schema({
  toppings: Array,
  episode: String
});

const Pizza = mongoose.model("Pizza", pizzaSchema);
export default Pizza;
