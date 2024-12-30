<script lang="ts">
	import { randomNumber } from './utils';

	let number = $state(randomNumber());

	function handleClick() {
		number = randomNumber();
	}

	$inspect(number);
</script>

{#await number}
	<p>...Esperando</p>
{:then number}
	<p>Número {number}</p>
{:catch error}
	<p>{error.message}</p>
{/await}

<button onclick={handleClick} class="bg-red-700">Número Aleatorio </button>
