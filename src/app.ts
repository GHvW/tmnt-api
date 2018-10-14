import express from "express";
import character from "./character/index";
import pizza from "./pizza/index"
import vehicle from "./vehicle/index"
import tech from "./tech/index"
import mongoose from "mongoose";

const app = express();
const router = express.Router();
//process.env.MONGODB;
const db = "mongodb://localhost:27017/tmnt-api";
mongoose.connect(db, { useNewUrlParser: true });

mongoose.connection.on("error", (err) => {
  console.log(`Error connecting to Mongo DB: ${err}`);
});

router.use("/character", character);

router.use("/pizza", pizza);

router.use("/vehicle", vehicle);

router.use("/tech", tech);

app.use("/api", router);

export default app;
