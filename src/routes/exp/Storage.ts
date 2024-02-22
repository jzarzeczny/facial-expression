type StorageType = 'facialExpressionAnswer' | 'dataSubmitted';

export default class Storage {
	getData<T>(storageType: StorageType): T[] {
		const lsData = localStorage.getItem(storageType) ?? '';
		return lsData ? JSON.parse(lsData) : [];
	}

	setData<T>(storageType: StorageType, answer: T) {
		const newData = this.getData(storageType);
		newData.push(answer);
		return localStorage.setItem(storageType, JSON.stringify(newData));
	}
}
