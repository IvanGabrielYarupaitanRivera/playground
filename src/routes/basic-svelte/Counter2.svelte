<script>
	let { valor, sumar, restar } = $props();
</script>

<div class="my-4 flex flex-row items-center gap-x-6">
	<button onclick={restar} class="bg-red-500 p-4">Restar</button>
	<p class="w-10 rounded-full bg-gray-400 p-1 text-center">{valor}</p>
	<button onclick={sumar} class="bg-green-500 p-4">Sumar</button>
</div>
