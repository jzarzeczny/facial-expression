export interface ImageQuestion {
	imageSrc: string;
	imageName: string;
}
export interface ImageQuestionWithAnswer extends ImageQuestion {
	answer: string;
}
