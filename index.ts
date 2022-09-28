import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { router } from "./routes";
import User from "@models/user.model";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/", router);

console.log(port);

User.create({
	name: "Hein Ko Zin",
	email: "heinkozin4@gmail.com",
	password: "heinkozin",
})
	.then((res) => {
		console.log(res);
	})
	.catch((e) => {
		console.log(e);
	});

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
