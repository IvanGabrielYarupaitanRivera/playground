<script lang="ts">
	import '../app.css';
	let { children } = $props();

	const pages = [
		{ title: 'Inicio', href: '/' },
		{ title: 'Svelte Básico', href: '/basic-svelte' },
		{ title: 'Svelte Avanzado', href: '/advanced-svelte' },
		{ title: 'SvelteKit Básico', href: '/basic-sveltekit' },
		{ title: 'SvelteKit Avanzado', href: '/advanced-sveltekit' }
	];
</script>

<section class="flex min-h-screen flex-col">
	<header class="bg-gray-800 p-4 text-white">
		<h1 class="text-center text-4xl font-bold text-cyan-400">Aprendiendo SvelteKit</h1>
	</header>

	<main class="container mx-auto flex-grow p-4">
		{@render children()}
	</main>

	<footer class="sticky bottom-0 bg-gray-950 p-4 text-white">
		<nav>
			<ul class="flex justify-center space-x-4">
				{#each pages as page}
					<li class="rounded border bg-cyan-950 px-4 py-2">
						<a href={page.href} class="text-cyan-200 hover:text-cyan-500">{page.title}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</footer>
</section>
