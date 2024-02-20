import type { ImageQuestionWithAnswer } from '$lib/interfaces/image';
import { getData } from './api/database';

export async function load(): Promise<{ message: string; data?: ImageQuestionWithAnswer[] }> {
	try {
		const result = await getData();
		console.log(result);
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
