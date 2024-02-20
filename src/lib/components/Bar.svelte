<script lang="ts">
	import { Bar } from 'svelte-chartjs';
	import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
	import type { ChartInterface } from '$lib/config/chartData';

	export let barData: ChartInterface;
	Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
</script>

<Bar data={barData} options={{ responsive: true }} />
