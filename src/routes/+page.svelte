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

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>

	<div class="button-container">
		<a href="instruction" class="button">Badanie</a>
		{#if userAnswers}
			<div class="separator"></div>
			<a href="results" class="button">Wyniki</a>
		{/if}
	</div>
</section>

<style>
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

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
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
