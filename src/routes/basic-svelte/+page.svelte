<script lang="ts">
	let pregunta = '';
	let respuesta = '';
	const preguntas = [
		'¿Cuál es la capital de Francia?',
		'¿Cuál es la capital de España?',
		'¿Cuál es la capital de Italia?',
		'¿Cuál es la capital de Portugal?',
		'¿Cuál es la capital de Alemania?',
		'¿Cuál es la capital de Rusia?',
		'¿Cuál es la capital de China?',
		'¿Cuál es la capital de Japón?',
		'¿Cuál es la capital de Australia?',
		'¿Cuál es la capital de Argentina?',
		'¿Cuál es la capital de Brasil?',
		'¿Cuál es la capital de Chile?',
		'¿Cuál es la capital de Colombia?',
		'¿Cuál es la capital de Ecuador?',
		'¿Cuál es la capital de Perú?',
		'¿Cuál es la capital de Venezuela?',
		'¿Cuál es la capital de Estados Unidos?',
		'¿Cuál es la capital de Canadá?',
		'¿Cuál es la capital de México?',
		'¿Cuál es la capital de Cuba?'
	];

	const enviarRespuesta = () => {
		alert(`La respuesta a "${pregunta}" es: ${respuesta}`);
	};
</script>

<label for="preguntas">Por favor seleccione una pregunta y responda</label>
<select id="preguntas" name="preguntas" bind:value={pregunta}>
	{#each preguntas as pregunta}
		<option value={pregunta}>{pregunta}</option>
	{/each}
</select>

<br />

<label for="respuesta">Ingrese la respuesta</label>
<input type="text" id="respuesta" name="respuesta" bind:value={respuesta} disabled={!pregunta} />

<button onclick={enviarRespuesta} disabled={!respuesta}>Enviar Respuesta</button>
