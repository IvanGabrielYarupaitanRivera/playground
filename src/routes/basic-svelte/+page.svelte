<script lang="ts">
	import MensajePersonalizado from './MensajePersonalizado.svelte';

	let source: string =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEFqSVnXsXqQT_qIumH4c2uDciSgHK1PRVA&s';
	let alternativeText: string = 'imagen de la portada del manga Dungeon ni Deai';
</script>

<!-- Viendo nuestro componente que hemos creado -->
<MensajePersonalizado idComponente={1}></MensajePersonalizado>
<MensajePersonalizado idComponente={2}></MensajePersonalizado>

<!-- Agregamos una imagen con atributos dinámicos -->
<img src={source} alt={alternativeText} />
