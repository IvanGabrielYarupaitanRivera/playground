<script lang="ts">
	import { configuracionHelado } from '$lib/types/helado';
	import SeleccionCantidad from '$lib/components/SeleccionCantidad.svelte';
	import SeleccionSabores from '$lib/components/SeleccionSabores.svelte';
	import ResumenSeleccion from '$lib/components/ResumenSeleccion.svelte';

	let cantidadBolasSeleccionada = $state('');
	let saboresElegidos = $state([]);
</script>

<SeleccionCantidad
	{cantidadBolasSeleccionada}
	opcionesCantidad={configuracionHelado.opcionesCantidad}
/>

<SeleccionSabores
	{saboresElegidos}
	{cantidadBolasSeleccionada}
	opcionesSabores={configuracionHelado.opcionesSabores}
/>

<hr />

<ResumenSeleccion {cantidadBolasSeleccionada} {saboresElegidos} />
