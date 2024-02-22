<script lang="ts">
</script>

<svelte:head>
	<title>Koniec testu</title>
	<meta name="description" content="Opis badania" />
</svelte:head>

<div class="endContainer">
	<div class="informationContainer">
		<h1>Koniec testu</h1>
		<a href="results">Wyniki</a>
	</div>
	<div class="footerContainer">
		<p>Test powstał w oparciu o: <a href="https://faces.mpdl.mpg.de/">Bazę danych FACES</a></p>
	</div>
</div>

<style>
	.endContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		flex-direction: column;
	}

	.informationContainer {
		flex: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.informationContainer a {
		font-size: 1.5rem;
	}

	.footerContainer a {
		font-size: 1rem;
	}
</style>
