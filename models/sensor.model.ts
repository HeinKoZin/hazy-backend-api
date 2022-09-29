import {
	CreationOptional,
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
} from "sequelize";
import { sequelize } from ".";

class Sensor extends Model<
	InferAttributes<Sensor>,
	InferCreationAttributes<Sensor>
> {
	declare id: CreationOptional<string>;
	declare device_id: string;
	declare lat: number;
	declare lng: number;
	declare pmValue: number;
	// timestamps!
	// createdAt can be undefined during creation
	declare createdAt: CreationOptional<Date>;
	// updatedAt can be undefined during creation
	declare updatedAt: CreationOptional<Date>;
}

Sensor.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		device_id: {
			type: DataTypes.STRING,
			unique: true,
		},
		lng: {
			type: DataTypes.DOUBLE,
		},
		lat: {
			type: DataTypes.DOUBLE,
		},
		pmValue: {
			type: DataTypes.INTEGER,
		},
		createdAt: {
			type: DataTypes.DATE,
		},
		updatedAt: {
			type: DataTypes.DATE,
		},
	},
	{ sequelize, tableName: "sensors" }
);

(async () => {
	await sequelize.sync();
})();

export default Sensor;
