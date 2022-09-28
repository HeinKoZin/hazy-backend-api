import { DataTypes } from "sequelize";
import { sequelize } from ".";

const User = sequelize.define("users", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

sequelize
	.sync()
	.then(() => {
		console.log("User table created successfully!");
	})
	.catch((error) => {
		console.error("Unable to create table : ", error);
	});

export default User;
