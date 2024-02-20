export interface ChartInterface {
	labels: string[];
	datasets: DatasetInterface[];
}

interface DatasetInterface {
	label: string;
	data: number[];
	backgroundColor: string[];
	borderWidth: number;
	borderColor: string[];
}

export const chartData: ChartInterface = {
	labels: ['Anger', 'Disgust', 'Fear', 'Happiness', 'Neutrality', 'Sadness'],
	datasets: []
};

const dataset = {
	label: '% of Votes',
	data: [],
	backgroundColor: [
		'rgba(255, 134,159,0.4)',
		'rgba(98,  182, 239,0.4)',
		'rgba(255, 218, 128,0.4)',
		'rgba(113, 205, 205,0.4)',
		'rgba(170, 128, 252,0.4)',
		'rgba(255, 177, 101,0.4)'
	],
	borderWidth: 2,
	borderColor: [
		'rgba(255, 134, 159, 1)',
		'rgba(98,  182, 239, 1)',
		'rgba(255, 218, 128, 1)',
		'rgba(113, 205, 205, 1)',
		'rgba(170, 128, 252, 1)',
		'rgba(255, 177, 101, 1)'
	]
};

export function groupAnswers(answers: { [key: string]: number }): number[] {
	const answer: number[] = [];
	chartData.labels.forEach((label: string) => {
		if (answers[label]) {
			answer.push(answers[label]);
		} else {
			answer.push(0);
		}
	});

	return answer;
}

export function addGroupedAnswersToChart(groupAnswers: number[]): ChartInterface {
	const populatedDataset: DatasetInterface = {
		...dataset,
		data: groupAnswers
	};

	return {
		...chartData,
		datasets: [populatedDataset]
	};
}
