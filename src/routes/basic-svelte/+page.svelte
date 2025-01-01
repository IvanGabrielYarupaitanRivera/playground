<script>
	import { Spring, Tween } from 'svelte/motion';

	let progress1 = new Spring(0);
	let progress2 = new Tween(0);

	const getRandomNumber = () => {
		progress1.target = Math.random();
		progress2.target = Math.random();
	};
</script>

<button onclick={getRandomNumber}>Random</button>

<progress value={progress1.current}></progress>
<progress value={progress2.current}></progress>
