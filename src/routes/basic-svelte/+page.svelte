<script lang="ts">
	type Pregunta = {
		id: string;
		pregunta: string;
	};

	let pregunta: Pregunta = $state({ id: '', pregunta: '' });

	let respuesta = $state('');

	const preguntas = $state([
		{
			id: 'Pregunta 01',
			pregunta: '¿Cuál es la capital de Francia?'
		},
		{
			id: 'Pregunta 02',
			pregunta: '¿Cuál es la capital de España?'
		},
		{
			id: 'Pregunta 03',
			pregunta: '¿Cuál es la capital de Italia?'
		},
		{
			id: 'Pregunta 04',
			pregunta: '¿Cuál es la capital de Portugal?'
		},
		{
			id: 'Pregunta 05',
			pregunta: '¿Cuál es la capital de Alemania?'
		},
		{
			id: 'Pregunta 06',
			pregunta: '¿Cuál es la capital de Rusia?'
		},
		{
			id: 'Pregunta 07',
			pregunta: '¿Cuál es la capital de China?'
		},
		{
			id: 'Pregunta 08',
			pregunta: '¿Cuál es la capital de Japón?'
		},
		{
			id: 'Pregunta 09',
			pregunta: '¿Cuál es la capital de Australia?'
		},
		{
			id: 'Pregunta 10',
			pregunta: '¿Cuál es la capital de Argentina?'
		},
		{
			id: 'Pregunta 11',
			pregunta: '¿Cuál es la capital de Brasil?'
		},
		{
			id: 'Pregunta 12',
			pregunta: '¿Cuál es la capital de Chile?'
		},
		{
			id: 'Pregunta 13',
			pregunta: '¿Cuál es la capital de Colombia?'
		},
		{
			id: 'Pregunta 14',
			pregunta: '¿Cuál es la capital de Ecuador?'
		},
		{
			id: 'Pregunta 15',
			pregunta: '¿Cuál es la capital de Perú?'
		},
		{
			id: 'Pregunta 16',
			pregunta: '¿Cuál es la capital de Venezuela?'
		},
		{
			id: 'Pregunta 17',
			pregunta: '¿Cuál es la capital de Estados Unidos?'
		},
		{
			id: 'Pregunta 18',
			pregunta: '¿Cuál es la capital de Canadá?'
		},
		{
			id: 'Pregunta 19',
			pregunta: '¿Cuál es la capital de México?'
		},
		{
			id: 'Pregunta 20',
			pregunta: '¿Cuál es la capital de Cuba?'
		}
	]);

	const enviarRespuesta = () => {
		alert(`La respuesta a la ${pregunta.id}: ${pregunta.pregunta}  es ${respuesta}`);
	};
</script>

<label for="preguntas">Por favor seleccione una pregunta y responda</label>
<select id="preguntas" name="preguntas" bind:value={pregunta}>
	{#each preguntas as pregunta}
		<option value={pregunta}>{pregunta.pregunta}</option>
	{/each}
</select>

<br />

<label for="respuesta">Ingrese la respuesta</label>
<input type="text" id="respuesta" name="respuesta" bind:value={respuesta} />

<button onclick={enviarRespuesta}>Enviar Respuesta</button>
