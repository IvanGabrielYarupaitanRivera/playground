<script lang="ts">
	import '../app.css';
	let { children } = $props();

	const pages = [{ title: 'Inicio', href: '/' }];
</script>

<svelte:head>
	<title>Aprendiendo SvelteKit</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
	<header class="space-y-4 bg-blue-300 p-4">
		<h1 class="text-center text-4xl font-bold text-blue-700">Aprendiendo SvelteKit</h1>

		<nav aria-label="Navegación principal">
			<ul class="flex justify-center gap-4">
				{#each pages as page}
					<li>
						<a href={page.href} class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
							{page.title}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</header>

	<main class="container mx-auto flex-grow p-4">
		{@render children()}
	</main>

	<footer class="bg-blue-300 p-4">
		<small class="block text-center text-blue-700">
			© {new Date().getFullYear()} Aprendiendo SvelteKit
		</small>
	</footer>
</div>
