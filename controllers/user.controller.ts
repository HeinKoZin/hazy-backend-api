import { users } from "@services/user.service";
import { successResponse } from "dtos/success.response";
import { Request, Response } from "express";

const getUsers = async (req: Request, res: Response) => {
	const data = await users();

	res.json(successResponse(data, "All User list "));
};

export { getUsers };
