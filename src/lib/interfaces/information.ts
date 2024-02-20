export type Message = 'Success' | 'Failure';

export interface CorrectAnswer<T> {
	message: 'Success';
	data: T[];
}
export interface IncorrectAnswer {
	message: 'Failure';
}
