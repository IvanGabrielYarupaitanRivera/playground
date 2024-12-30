<script lang="ts">
	import Stepper from './Stepper.svelte';

	let value = $state(0);

	const backSteps = () => {
		value--;
	};

	const nextSteps = () => {
		value++;
	};
</script>

<Stepper {backSteps} {nextSteps} {value}></Stepper>
