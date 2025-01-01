<script lang="ts">
	export let cantidadBolasSeleccionada: string;
	export let opcionesCantidad: string[];
</script>

<h2>Elige el número de bolas de helado</h2>
{#each opcionesCantidad as cantidad}
	<label for={cantidad}>
		bola {cantidad}
		<input
			type="radio"
			name="bolas"
			id={cantidad}
			bind:group={cantidadBolasSeleccionada}
			value={cantidad}
		/>
	</label>
{/each}
