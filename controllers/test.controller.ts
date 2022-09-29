import { successResponse } from "dtos/success.response";
import { Request, Response } from "express";
import { getMessage } from "../services/test.service";

const getTest = (req: Request, res: Response) => {
	const message = getMessage();

	res.json(successResponse(message, "All User list a"));
};

export { getTest };
