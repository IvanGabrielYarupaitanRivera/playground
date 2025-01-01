<script>
	import Counter from './Counter.svelte';
	import Counter2 from './Counter2.svelte';

	let valor = $state(0);
	const sumar = () => {
		valor += 1;
	};
	const restar = () => {
		valor -= 1;
	};
</script>

<Counter></Counter>

<Counter2 {sumar} {restar} {valor}></Counter2>
