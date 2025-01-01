<script lang="ts">
	export let cantidadBolasSeleccionada: string;
	export let saboresElegidos: string[];

	$: mensajeError = (() => {
		if (!cantidadBolasSeleccionada) return 'Seleccione la cantidad de bolas.';
		if (saboresElegidos.length === 0) return 'Seleccione al menos un sabor.';
		if (saboresElegidos.length > parseInt(cantidadBolasSeleccionada))
			return 'El número de sabores no puede ser mayor que la cantidad de bolas.';
		return '';
	})();
</script>

{#if mensajeError}
	<p>{mensajeError}</p>
{:else}
	<p>Has seleccionado {cantidadBolasSeleccionada} bolas.</p>
	<p>Los sabores que elegiste son: {saboresElegidos.join(', ')}.</p>
{/if}
