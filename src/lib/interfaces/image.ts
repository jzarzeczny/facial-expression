import type { ChartInterface } from '$lib/config/chartData';

export interface ImageQuestion {
	imageSrc: string;
	imageName: string;
}
export interface ImageQuestionWithAnswer extends ImageQuestion {
	answer: string;
}

export type Emotions = 'anger' | 'disgust' | 'fear' | 'happiness' | 'neutrality' | 'sadness';

export interface Results extends ImageQuestionWithAnswer {
	correctEmotion: Emotions;
	answers: ChartInterface;
}
