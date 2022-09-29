import Sensor from "@models/sensor.model";
import { errorResponse } from "dtos/error.response";
import { CreateSensorInputInterface } from "dtos/sensor/create_sensor.input";
import { UpdateSensorInputInterface } from "dtos/sensor/update_sensor.input";
import { successResponse } from "dtos/success.response";

export const sensors = async () => {
	return successResponse(await Sensor.findAll(), "All sensors list");
};

export const create = async (input: CreateSensorInputInterface) => {
	try {
		const sensor = await Sensor.create({
			device_id: input.device_id,
			lat: input.lat,
			lng: input.lng,
			pmValue: input.pmValue,
		});

		if (sensor) {
			return successResponse(sensor, "Sensor created successfully.");
		}
	} catch (error: any) {
		return errorResponse(error.errors);
	}
};

export const update = async (id: string, input: UpdateSensorInputInterface) => {
	try {
		const sensor = await Sensor.update(
			{
				device_id: input.device_id,
				lat: input.lat,
				lng: input.lng,
				pmValue: input.pmValue,
			},
			{
				where: {
					id: id,
				},
			}
		);
		if (sensor) {
			return successResponse(sensor, "Sensor updated successfully.");
		}
	} catch (error: any) {
		return errorResponse(error.errors);
	}
};

export const remove = async (id: string) => {
	try {
		const sensor = await Sensor.destroy({
			where: {
				id: id,
			},
		});
		if (sensor) {
			return successResponse(sensor, "Sensor deleted successfully.");
		}
	} catch (error: any) {
		return errorResponse(error.errors);
	}
};
