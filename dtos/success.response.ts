export interface ResponseInterface {
	message: string;
	data: any;
	success: boolean;
}

export const successResponse = (
	data: any,
	message: string
): ResponseInterface => {
	return {
		message: message,
		data: data,
		success: true,
	};
};
