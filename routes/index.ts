import { Router } from "express";
import sensorRouter from "./sensor";

const router = Router();

router.use("/sensors", sensorRouter);
// router.use("/sensors", sensorRouter);

export { router };
