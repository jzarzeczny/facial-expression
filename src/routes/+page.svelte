<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import type { ImageQuestionWithAnswer } from '$lib/interfaces/image';
	import { onMount } from 'svelte';
	import Storage from '$lib/utils/Storage';

	let userAnswers: ImageQuestionWithAnswer[];

	onMount(() => {
		const storage = new Storage();
		userAnswers = storage.getData<ImageQuestionWithAnswer[]>('dataSubmitted');
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="main-section">
	<div>
		<h1 class="header">Obiad czwartkowy</h1>
		<p class="sub-header">Czy eksprecje mimiczne są uniwersalne?</p>
	</div>

	<div class="button-container">
		<a href="instruction" class="button">Badanie</a>
		{#if userAnswers}
			<div class="separator"></div>
			<a href="results" class="button">Wyniki</a>
		{/if}
	</div>
	<div></div>
</section>

<style>
	.main-section {
		display: flex;
		height: 100%;
		justify-content: space-evenly;
		align-items: center;
	}
	.header {
		font-size: 48px;
	}

	.sub-header {
		font-size: 32px;
		text-align: center;
	}
	section {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.button-container {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}

	.separator {
		display: block;
		width: 3px;
		height: 55px;
		background-color: var(--color-theme-1);
	}
</style>
