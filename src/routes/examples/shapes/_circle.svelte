<script lang="ts">
	import Stage from '$lib/stage.svelte';
	import Layer from '$lib/layer.svelte';
	import Circle from '$lib/shapes/circle.svelte';

	let container;
	let stage;
</script>

<div bind:this={container} class="container" />

{#if container}
	<Stage width={500} height={500} {container} bind:stage>
		<Layer>
			<Circle
				x={stage.width() / 2}
				y={stage.height() / 2}
				radius={70}
				fill="red"
				stroke="black"
				strokeWidth={4}
			/>
		</Layer>
	</Stage>
{/if}
