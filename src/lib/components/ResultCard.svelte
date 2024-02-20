<script lang="ts">
	import type { Results } from '$lib/interfaces/image';
	import Bar from './Bar.svelte';
	export let singleData: Results;
</script>

<div class="resultCardContainer">
	<img src={singleData.imageSrc} alt="Does any1 look here?" />
	<div class="resultCardBarContainer">
		<Bar barData={singleData.answers} />
	</div>
</div>

<style>
	.resultCardContainer {
		max-width: 100vw;
		display: flex;
		align-items: center;
		gap: 2rem;
		justify-content: space-between;
	}
	.resultCardContainer img {
		width: 50%;
	}
	.resultCardBarContainer {
		width: 100%;
	}
</style>
