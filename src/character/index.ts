import express from "express";

import * as controller from "./controller";

let router = express.Router();

router.get("/", controller.findAll);

export default router;