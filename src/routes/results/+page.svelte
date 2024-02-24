<script lang="ts">
	import ResultCard from '$lib/components/ResultCard.svelte';
	import type { ImageQuestionWithAnswer, Results, UserAnswersObject } from '$lib/interfaces/image';
	import type { CorrectAnswer, IncorrectAnswer } from '$lib/interfaces/information';
	import Storage from '$lib/utils/Storage';
	import { onMount } from 'svelte';

	export let data: CorrectAnswer<Results> | IncorrectAnswer;

	const storage = new Storage();

	let answers: Results[];
	let userAnswers: UserAnswersObject;
	if (data.message === 'Success') {
		answers = data.data;
	}

	onMount(() => {
		const userData = storage.getData<ImageQuestionWithAnswer[]>('facialExpressionAnswer');
		userAnswers = changeUserAnswersToArray(userData);
		console.log(userAnswers);
	});

	function changeUserAnswersToArray(userAnswers: ImageQuestionWithAnswer[]) {
		return userAnswers.reduce((acc: UserAnswersObject, userAnswer: ImageQuestionWithAnswer) => {
			const key = Object.keys(userAnswer)[2] as keyof ImageQuestionWithAnswer;
			const imageNameKey = userAnswer[key];
			acc[imageNameKey] = userAnswer;
			return acc;
		}, {});
	}
</script>

<svelte:head>
	<title>Result page</title>
	<meta name="description" content="Test results" />
</svelte:head>

<div class="resultsContainer">
	<div class="titleContainer">
		<h2>Wyniki</h2>
		<div class="contextContainer">
			<span>scroll</span>
			<span>^</span>
		</div>
	</div>
	{#if answers}
		{#each answers as singleData}
			<ResultCard {singleData} {userAnswers} />{/each}
	{/if}
</div>

<style>
	.resultsContainer {
		scroll-snap-type: x mandatory;
		max-width: 100%;
	}

	.titleContainer {
		height: 100vh;
		scroll-snap-align: start;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.titleContainer {
		font-size: 5rem;
	}

	.contextContainer {
		position: absolute;
		bottom: 20%;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.contextContainer span {
		font-size: 3rem;
	}

	.contextContainer span:nth-child(2) {
		color: var(--color-theme-1);
		transform: rotate(180deg);
		font-size: 5rem;
	}
</style>
