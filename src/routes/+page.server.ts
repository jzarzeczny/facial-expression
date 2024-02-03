import type { ImageQuestionWithAnswer } from '$lib/interfaces/imageInterface';
import { getData } from './api/database';

export async function load(): Promise<{ message: string; data?: ImageQuestionWithAnswer[] }> {
	try {
		const result = await getData();

		if (result) {
			return {
				message: 'Success',
				data: result
			};
		}
		return {
			message: 'Failed'
		};
	} catch (error) {
		console.error('Error executing query', error);
	}
	return {
		message: 'Information'
	};
}