import { create, remove, sensors, update } from "@services/sensor.service";
import { successResponse } from "dtos/success.response";
import { Request, Response } from "express";

export const getSensors = async (req: Request, res: Response) => {
	const data = await sensors();

	res.json(data);
};

export const createSensor = async (req: Request, res: Response) => {
	try {
		const input = req.body;
		const sensor = await create(input);
		res.json(sensor);
	} catch (error) {
		res.json(error);
	}
};

export const updateSensor = async (req: Request, res: Response) => {
	try {
		const input = req.body;
		const { id } = req.params;
		const sensor = await update(id, input);
		res.json(sensor);
	} catch (error) {
		res.json(error);
	}
};

export const deleteSensor = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const sensor = await remove(id);
		res.json(sensor);
	} catch (error) {
		res.json(error);
	}
};
