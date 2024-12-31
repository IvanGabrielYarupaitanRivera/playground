<script lang="ts">
	const numeroBolas = ['1', '2', '3', '4', '5'];
	const saboresHelado = ['fresa', 'chocolate', 'vainilla', 'menta', 'mango'];
	let bola = $state('');
	let sabor = $state('');
</script>

<h2>Elige el número de bolas de helado</h2>

{#each numeroBolas as bolas}
	<label for={bolas}>bola {bolas}</label>
	<input type="radio" name={bolas} id={bolas} bind:group={bola} value={bolas} />
{/each}

<h2>Elige los sabores de helado</h2>

{#each saboresHelado as saborHelado}
	<label for={saborHelado}>{saborHelado}</label>
	<input
		type="checkbox"
		name={saborHelado}
		id={saborHelado}
		value={saborHelado}
		bind:group={sabor}
		disabled={bola === ''}
	/>
{/each}

<hr />

<!-- Primero verificar si el usuario eligió la cantidad de bolas de helado -->
{#if !bola}
	<p>Por favor eliga un número de bolas</p>
{:else if sabor.length === 0}
	<p>Por favor elija al menos un sabor de helado</p>
{:else if sabor.length > parseInt(bola)}
	<p>El número de sabores elegidos es mayor al número de bolas</p>
{:else}
	<p>El número de bolas elegido es: {bola}</p>
	<p>Los sabores elegidos son: {sabor}</p>
{/if}
