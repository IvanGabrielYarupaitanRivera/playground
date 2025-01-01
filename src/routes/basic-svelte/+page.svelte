<script>
	import { tareas, totalTareas } from './tareas';

	const addTarea = () => {
		$tareas = [...$tareas, { id: $tareas.length + 1, nombre: '', completada: false }];
	};
</script>

{#each $tareas as tarea}
	<div>
		<input type="checkbox" bind:checked={tarea.completada} />

		<input
			type="text"
			name="tarea"
			id="tarea"
			bind:value={tarea.nombre}
			placeholder="Escribe una tarea"
			class={tarea.completada ? 'text-green-400' : 'text-red-400'}
		/>
	</div>
{/each}

<button onclick={addTarea}>Añadir tarea</button>

<hr />

<p>
	Total tareas: {$totalTareas}
</p>
