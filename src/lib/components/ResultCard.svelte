<script lang="ts">
	import type { Results, UserAnswersObject } from '$lib/interfaces/image';
	import Bar from './Bar.svelte';
	export let singleData: Results;
	export let userAnswers: UserAnswersObject;
</script>

{#if userAnswers}
	<div class="resultCardContainer">
		<img src={singleData.imageSrc} alt="Does any1 look here?" />
		<div class="resultCardBarContainer">
			<div class="resultTextsContainer">
				<h3>Correct answer: <span>{singleData.correctEmotion.toUpperCase()}</span></h3>
				<h3>Your answer: <span>{userAnswers[singleData.imageName].answer}</span></h3>
			</div>
			<Bar barData={singleData.answers} />
		</div>
	</div>
{/if}

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
		flex: 1 1 45%;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding: 0 2rem;
	}

	.resultTextsContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.resultCardBarContainer h3 span {
		color: var(--color-theme-1);
	}
</style>
