<script>
	let altura = $state(10);
	let ancho = $state(10);
	let area = $derived(altura * ancho);
</script>

<input type="range" name="altura" id="altura" bind:value={altura} min="10" max="500" step="1" />
<input type="range" name="ancho" id="ancho" bind:value={ancho} min="10" max="500" step="1" />

<div class="bg-gray-100 p-4" style="height: {altura}px; width: {ancho}px;">{area}</div>

<p>Altura: {altura}</p>
<p>Ancho: {ancho}</p>
