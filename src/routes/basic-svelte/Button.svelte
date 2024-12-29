<script lang="ts">
	let count = $state(0);

	let { name }: { name: string } = $props();

	function handleClick() {
		count += 1;
	}
</script>

<button onclick={handleClick} class="mt-4 rounded bg-red-500 px-2 py-1">
	Clicked {count}
	{count === 1 ? 'time' : 'times'} by {name}
</button>
