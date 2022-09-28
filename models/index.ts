import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const database = process.env.DB_NAME as string;
const username = process.env.DB_USERNAME as string;
const password = process.env.DB_PASSWORD as string;
const host = process.env.DB_HOST as string;

const sequelize = new Sequelize(database, username, password, {
	host: host,
	dialect: "mysql",
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch((error) => {
		console.error("Unable to connect to the database: ", error);
	});

export { sequelize };
