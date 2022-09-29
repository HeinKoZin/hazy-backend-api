export interface ResponseInterface {
	message: string;
	success: boolean;
}

export const errorResponse = (message: string): ResponseInterface => {
	return {
		message: message,
		success: false,
	};
};
