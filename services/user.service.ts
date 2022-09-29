import User from "@models/user.model";

const users = () => {
	return User.findAll();
};

export { users };
