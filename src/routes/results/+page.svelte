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

<div class="text-column">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
	{#if answers}
		{#each answers as singleData}
			<ResultCard {singleData} />{/each}
	{/if}
</div>
