<script lang="ts">
	import picture from '$lib/exp/men.jpg';
	const listOfBasicEmotion = [
		'Złość/Gniew',
		'Strach',
		'Wstręt',
		'Zaskoczenie',
		'Szczęście',
		'Smutek'
	];
</script>

<svelte:head>
	<title>Badanie</title>
	<meta name="description" content="Opis badania" />
</svelte:head>
<section class="section">
	<div class="image-container">
		<img class="image" alt="Exp" src={picture} />
	</div>
	<div class="option-container">
		{#each listOfBasicEmotion as emotion}
			<button class="button">{emotion}</button>
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
</style>
