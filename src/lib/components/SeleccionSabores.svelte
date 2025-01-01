<script lang="ts">
	export let saboresElegidos: string[];
	export let opcionesSabores: string[];
	export let cantidadBolasSeleccionada: string;
</script>

<h2>Elige los sabores de helado</h2>
{#each opcionesSabores as sabor}
	<label for={sabor}>
		{sabor}
		<input
			type="checkbox"
			name={sabor}
			id={sabor}
			value={sabor}
			bind:group={saboresElegidos}
			disabled={!cantidadBolasSeleccionada}
		/>
	</label>
{/each}
