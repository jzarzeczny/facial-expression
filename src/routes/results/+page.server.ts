import { addGroupedAnswersToChart, groupAnswers } from '$lib/config/chartData';
import { imageSource } from '$lib/config/imageConfig';
import type { Emotions, ImageQuestionWithAnswer, Results } from '$lib/interfaces/image';
import type { CorrectAnswer, IncorrectAnswer } from '$lib/interfaces/information';
import { getData } from '../api/database';

export async function load(): Promise<CorrectAnswer<Results> | IncorrectAnswer> {
	try {
		const result = await getData();
		if (result) {
			const data = mapAnswersToImage(result);
			return { message: 'Success', data };
		}
		return { message: 'Failure' };
	} catch (error) {
		console.error('Error executing query', error);
		return { message: 'Failure' };
	}
}
function mapAnswersToImage(result: ImageQuestionWithAnswer[]): Results[] {
	return imageSource.map((image) => {
		const rawAnswers = result.filter((res) => res.imageName === image.imageName);
		const mappedAnswers = sortAnswers(rawAnswers);
		const plainResult = groupAnswers(mappedAnswers);
		const data = addGroupedAnswersToChart(plainResult);
		return {
			...rawAnswers[0],
			correctEmotion: findCorrectEmotion(image.imageName),
			answers: data
		};
	});
}

function findCorrectEmotion(imageName: string): Emotions {
	const indicator = imageName.split('_')[3];
	const mappedEmotion = mapEmotions(indicator);

	if (!mappedEmotion) {
		throw new Error('Emotion is incorrect');
	}

	return mappedEmotion;
}
function sortAnswers(rawAnswers: ImageQuestionWithAnswer[]): Record<string, number> {
	return rawAnswers.reduce(
		(result, answer) => {
			const key = answer.answer;
			result[key] = (result[key] || 0) + 1;
			return result;
		},
		{} as Record<string, number>
	);
}

function mapEmotions(emotionIndicator: string): Emotions | undefined {
	switch (emotionIndicator) {
		case 'a':
			return 'anger';
		case 'd':
			return 'disgust';
		case 'f':
			return 'fear';
		case 'h':
			return 'happiness';
		case 'n':
			return 'neutrality';
		case 's':
			return 'sadness';
		default:
			return undefined;
	}
}
