<!-- Esta es la sección de JavaScript -->
<script lang="ts">
	let { idComponente }: { idComponente: number } = $props();
</script>

<!-- Esta es la sección de HTML -->
<p>ID Componente</p>
<span>{idComponente}</span>

<!-- Esta es la sección de CSS -->
<style>
	p {
		color: #f7a280;
	}

	span {
		color: #9ff08f;
		font-size: 45px;
		font-weight: bold;
	}
</style>
