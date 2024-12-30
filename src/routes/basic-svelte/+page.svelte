<script lang="ts">
	let position = $state({ x: 0, y: 0 });

	function onpointermove(event: PointerEvent) {
		position = {
			x: event.clientX,
			y: event.clientY
		};
	}
</script>

<div {onpointermove} class="min-h-screen bg-slate-800">
	El mouse está en: {position.x} y {position.y}
</div>
