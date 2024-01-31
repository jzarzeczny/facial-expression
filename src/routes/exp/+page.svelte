<script lang="ts">
	import picture from '$lib/exp/men.jpg';
	import secondImage from '$lib/exp/secondImage.jpg';
	import thirdImage from '$lib/exp/thirdImage.jpg';
	const listOfBasicEmotion = [
		'Złość/Gniew',
		'Strach',
		'Wstręt',
		'Zaskoczenie',
		'Szczęście',
		'Smutek'
	];

	let index = 0;
	const listOfImages = [picture, secondImage, thirdImage];
	function changeIndex() {
		console.log('Changing index');
		console.log(index);
		if (index === listOfImages.length - 1) {
			index = 0;
		} else {
			index++;
		}
	}

	$: something = listOfImages[index];

	console.log(something);
</script>

<svelte:head>
	<title>Badanie</title>
	<meta name="description" content="Opis badania" />
</svelte:head>
<section class="section">
	<div class="image-container">
		<img class="image" alt="Exp" src={something} />
	</div>
	<div class="option-container">
		{#each listOfBasicEmotion as emotion}
			<button class="button" on:click={changeIndex}>{emotion}</button>
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
