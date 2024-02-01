import type { ImageQuestionWithAnswer } from '$lib/interfaces/imageInterface';

export default class Storage {
	private name = 'facialExpressionAnswer';

	getData(): ImageQuestionWithAnswer[] {
		const lsData = localStorage.getItem(this.name) ?? '';
		return lsData ? JSON.parse(lsData) : [];
	}

	setData(answer: ImageQuestionWithAnswer) {
		const newData = this.getData();
		newData.push(answer);
		return localStorage.setItem(this.name, JSON.stringify(newData));
	}
}
