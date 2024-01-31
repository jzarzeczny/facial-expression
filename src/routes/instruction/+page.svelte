<svelte:head>
	<title>Opis</title>
	<meta name="description" content="Opis badania" />
</svelte:head>
<section class="section">
	<h1>Instrukcja</h1>

	<div>
		<p class="paragraph">
			Gdy naciśniesz przycisk <span>Dalej</span> otworzy się strona eksperymentu.<br /><br /> Na
			kazdym etapie zobaczysz zdjęcie człowieka po lewej strony ekranu oraz nazwy emocji po prawej
			stronie ekranu.<br /><br /> Twoim zadaniem jest ocenić jakie emocje przejawia osoba na zdjęciu
			i zaznacenie swojego wyboru.
		</p>
	</div>
</section>
<div class="button-container">
	<a href="/exp" class="button">Dalej</a>
</div>

<style>
	.section {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}
	.paragraph {
		margin: 0 auto;
		font-size: 1.25rem;
		line-height: 1.5;
		max-width: 65ch;
	}

	.button-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
