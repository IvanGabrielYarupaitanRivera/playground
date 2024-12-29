<script>
	let classes = [
		{ title: 'Introducción a Svelte', description: 'Aprende los conceptos básicos de Svelte.' },
		{ title: 'Componentes en Svelte', description: 'Cómo crear y usar componentes en Svelte.' },
		{ title: 'Reactividad en Svelte', description: 'Entiende la reactividad en Svelte.' },
		{ title: 'Stores en Svelte', description: 'Gestiona el estado con stores en Svelte.' }
	];
</script>

<section class="class-list">
	{#each classes as clase}
		<div class="class-item">
			<div class="class-title">{clase.title}</div>
			<div class="class-description">{clase.description}</div>
		</div>
	{/each}
</section>

<style>
	.class-list {
		max-width: 600px;
		margin: 0 auto;
		padding: 1rem;
		font-family: Arial, sans-serif;
	}
	.class-item {
		border: 1px solid #ddd;
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 5px;
		background-color: #f9f9f9;
	}
	.class-title {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	.class-description {
		font-size: 1rem;
		color: #555;
	}
</style>
