import {
	createSensor,
	deleteSensor,
	getSensors,
	updateSensor,
} from "@controllers/sensor.controller";
import { Router } from "express";

const sensorRouter = Router();

sensorRouter.get("/", getSensors);
sensorRouter.post("/create", createSensor);
sensorRouter.patch("/update/:id", updateSensor);
sensorRouter.delete("/delete/:id", deleteSensor);

export default sensorRouter;
