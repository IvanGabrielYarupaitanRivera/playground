<script>
	import { page } from '$app/state';
</script>

<h1>Estos son los datos que se pueden obtener del store page</h1>

<h2>URL</h2>
<p>{page.url}</p>

<h2>Params</h2>
<p>{page.params}</p>

<h2>Route</h2>
<p>{page.route.id}</p>

<h2>Status</h2>
<p>{page.status}</p>

<h2>Error</h2>
<p>{page.error}</p>

<h2>Data</h2>
<ul>
	{#each page.data.arreglo as item}
		<li>{item.id}</li>
	{/each}
</ul>

<h2>Form</h2>
<p>{page.form}</p>
