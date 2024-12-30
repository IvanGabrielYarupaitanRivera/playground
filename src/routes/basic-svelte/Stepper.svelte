<script lang="ts">
	let { nextSteps, backSteps, value } = $props();
</script>

<section class="flex w-80 flex-col items-center space-y-4 rounded-lg bg-gray-100 p-4">
	<header class="text-center">
		<h1 class="text-2xl font-bold text-gray-800">Stepper</h1>
		<p class="text-gray-700">Step {value}</p>
	</header>

	<nav class="flex space-x-2">
		<button onclick={backSteps} class="rounded-lg bg-gray-800 px-4 py-2 text-white"
			>⬅️ Restar
		</button>
		<button onclick={nextSteps} class="rounded-lg bg-gray-800 px-4 py-2 text-white"
			>Sumar ➡️
		</button>
	</nav>
</section>
