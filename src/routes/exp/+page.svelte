<script lang="ts">
	import { imageSource } from '$lib/config/imageConfig';
	import type { ImageQuestionWithAnswer } from '$lib/interfaces/imageInterface';
	import Storage from './Storage';
	const listOfBasicEmotion = ['Anger', 'Disgust', 'Fear', 'Happiness', 'Neutrality', 'Sadness'];
	let index = 0;

	const storage = new Storage();

	function handleAnswer(emotion: string) {
		const data: ImageQuestionWithAnswer = {
			answer: emotion,
			...imagesRef
		};

		storage.setData(data);
		if (index === imageSource.length - 1) {
			console.log(storage.getData());
		} else {
			index++;
		}
	}

	$: imagesRef = imageSource[index];
</script>

<svelte:head>
	<title>Badanie</title>
	<meta name="description" content="Opis badania" />
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
</section>

<style>
	.section {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: row;
		overflow: hidden;
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
</style>
