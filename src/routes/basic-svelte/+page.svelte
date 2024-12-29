<script>
	import Button from './Button.svelte';
</script>

<main class="mx-auto max-w-3xl">
	<article class="p-8">
		<header class="mb-8 border-b border-cyan-800 pb-4">
			<h2 class="text-center text-3xl font-bold text-cyan-400">Introducción</h2>
		</header>

		<section class="space-y-6">
			<p class="text-cyan-100/90">Las aplicaciones en Svelte son hechas a bases de componentes.</p>

			<div class="rounded-lg bg-cyan-950 p-6">
				<h3 class="mb-4 text-xl font-semibold text-cyan-300">¿Qué es un componente?</h3>

				<p class="leading-relaxed text-cyan-100">
					Es un bloque de código reusable que contiene
					<code class="rounded bg-neutral-950 px-2 py-1 text-cyan-400">HTML</code>,
					<code class="rounded bg-neutral-950 px-2 py-1 text-cyan-400">CSS</code> y
					<code class="rounded bg-neutral-950 px-2 py-1 text-cyan-400">JavaScript</code>.
				</p>
				<p class="leading-relaxed text-cyan-100">
					Un componente puede ser un botón, un formulario, una barra de navegación, etc. Estos
					componentes deben estar en un archivo con extensión
					<code class="rounded bg-neutral-950 px-2 py-1 text-cyan-400">.svelte</code>.
				</p>
			</div>

			<div class="rounded-lg bg-cyan-950 p-6">
				<h3 class="mb-4 text-xl font-semibold text-cyan-300">Ejemplo de un componente</h3>

				<p class="leading-relaxed text-cyan-100">
					Vamos a realizar un componente de botón. Creamos un archivo con extensión
					<code class="rounded bg-neutral-950 px-2 py-1 text-cyan-400">.svelte </code>
					y le damos el nombre de
					<code class="rounded bg-neutral-950 px-2 py-1 text-cyan-400">Button.svelte</code>.
				</p>
				<p class="leading-relaxed text-cyan-100">
					Para usar el componente que creamos, es decir, el botón, lo importamos en el archivo de la
					siguiente manera:
					<code class="rounded bg-neutral-950 px-2 py-1 text-cyan-400">
						import Button from './Button.svelte';
					</code>.
				</p>
				<p class="leading-relaxed text-cyan-100">
					Para usar el botón, lo llamamos de la siguiente manera:
					<code class="rounded bg-neutral-950 px-2 py-1 text-cyan-400">
						&ltButton&gt &lt/Button&gt;
					</code>.

					<Button name="Juan"></Button>
					<Button name="Pedro"></Button>
				</p>
			</div>
		</section>
	</article>
</main>
