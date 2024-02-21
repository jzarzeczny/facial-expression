<script lang="ts">
	import ResultCard from '$lib/components/ResultCard.svelte';
	import type { Results } from '$lib/interfaces/image';
	import type { CorrectAnswer, IncorrectAnswer } from '$lib/interfaces/information';

	export let data: CorrectAnswer<Results> | IncorrectAnswer;
	let answers: Results[];

	if (data.message === 'Success') {
		answers = data.data;
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
			<ResultCard {singleData} />{/each}
	{/if}
</div>

<style>
	.resultsContainer {
		scroll-snap-type: x mandatory;
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
