import express from "express";

import character from "./character/index";
import pizza from "./pizza/index"
import vehicle from "./vehicle/index"
import tech from "./tech/index"

const port = process.env.PORT || 1337;
const app = express();

// const router = express.Router();

app.use("/character", character);

app.use("/pizza", pizza);

app.use("/vehicle", vehicle);

app.use("/tech", tech);

app.listen(port);