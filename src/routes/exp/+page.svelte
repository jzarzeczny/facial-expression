<script lang="ts">
	import { imageSource } from '$lib/config/imageConfig';
	import type { ImageQuestionWithAnswer } from '$lib/interfaces/image';
	import { onMount } from 'svelte';
	import Storage from '$lib/utils/Storage';
	import { goto } from '$app/navigation';

	let index = 0;

	const storage = new Storage();

	const listOfBasicEmotion = ['Anger', 'Disgust', 'Fear', 'Happiness', 'Neutrality', 'Sadness'];

	onMount(() => {
		index = storage.getData<ImageQuestionWithAnswer[]>('facialExpressionAnswer')?.length ?? 0;
	});

	async function sendData(data: ImageQuestionWithAnswer[]) {
		await fetch('/api/data', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json'
			}
		});
	}

	async function handleAnswer(emotion: string) {
		const data: ImageQuestionWithAnswer = {
			answer: emotion,
			...imagesRef
		};

		const isDataSubmitted = storage.getData<boolean>('dataSubmitted');
		if (index !== imageSource.length) {
			storage.setArray('facialExpressionAnswer', data);
			return index++;
		}

		if (!isDataSubmitted) {
			const finalData = storage.getData<ImageQuestionWithAnswer[]>('facialExpressionAnswer');
			await sendData(finalData);
			storage.setBoolean('dataSubmitted', true);
			goto('/end');
		}

		goto('/results');
	}

	$: imagesRef = imageSource[index];
</script>

<svelte:head>
	<title>Badanie</title>
	<meta name="description" content="Opis testu" />
</svelte:head>
<section class="section">
	<div class="image-container">
		<img class="image" alt="Exp" src={imagesRef.imageSrc} />
	</div>
	<div class="option-container">
		{#each listOfBasicEmotion as emotion}
			<button class="button" on:click={() => handleAnswer(emotion)}>{emotion}</button>
		{/each}
	</div>
	<div class="progress-indicator">
		{index + 1} / <span>{imageSource.length}</span>
	</div>
</section>

<style>
	.section {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: row;
		overflow: hidden;
		position: relative;
	}

	.image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.image-container {
		flex: 1;
	}

	.option-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.button {
		width: 300px;
		height: 80px;
		font-size: 2rem;
		border-radius: 8px;
		background-color: transparent;
		transition: border 1s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.button:hover {
		border: 2px solid var(--color-theme-1);
	}

	.progress-indicator {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
</style>
