<script lang="ts">
	import type { Results } from '$lib/interfaces/image';
	import Bar from './Bar.svelte';
	export let singleData: Results;
</script>

<div class="resultCardContainer">
	<img src={singleData.imageSrc} alt="Does any1 look here?" />
	<div class="resultCardBarContainer">
		<h3>Correct answer: <span>{singleData.correctEmotion.toUpperCase()}</span></h3>
		<Bar barData={singleData.answers} />
	</div>
</div>

<style>
	.resultCardContainer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		scroll-snap-align: start;
		height: 100vh;
	}
	.resultCardContainer img {
		width: 50%;
	}
	.resultCardBarContainer {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 0 2rem;
	}

	.resultCardBarContainer h3 span {
		color: var(--color-theme-1);
	}
</style>
