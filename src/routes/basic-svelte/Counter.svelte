<script>
	import { valor } from './valores';

	let sumar = () => {
		$valor += 1;
	};
</script>

<button onclick={sumar}>{$valor}</button>
