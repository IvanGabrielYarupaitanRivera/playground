<script>
	const colors = ['red', 'green', 'blue'];
	let selected = $state(colors[0]);
</script>

<h1
	class="text-2xl"
	class:text-red-500={selected === 'red'}
	class:text-green-500={selected === 'green'}
	class:text-blue-500={selected === 'blue'}
>
	Pick a colour
</h1>

<div class="space-x-2">
	{#each colors as color, i}
		<button
			onclick={() => (selected = color)}
			class="p-4"
			class:bg-red-500={color === 'red'}
			class:bg-green-500={color === 'green'}
			class:bg-blue-500={color === 'blue'}
		>
			{i}
		</button>
	{/each}
</div>
