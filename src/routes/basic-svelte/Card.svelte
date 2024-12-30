<script lang="ts">
	// Usar destructuración para mayor claridad
	let {
		headerClass = 'text-2xl font-bold', // Valores por defecto
		sectionClass = 'text-lg',
		footerClass = 'text-sm',
		title,
		content,
		palabra = 'Sin autor'
	} = $props();
</script>

<article class="rounded-lg bg-cyan-950 p-4">
	<header class={headerClass}>{title}</header>
	<section class={sectionClass}>{content}</section>
	<footer class={footerClass}>{palabra}</footer>
</article>
