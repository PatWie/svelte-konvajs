<script lang="ts">
	import { onDestroy, setContext, onMount, afterUpdate } from 'svelte';
	import Konva from 'konva';
	import { stageKey } from '$lib/utils';

	export let container;

	export let width;
	export let height;
	export let scale = 1;

	export let stage: Konva.Stage;
	setContext(stageKey, {
		getStage: () => stage
	});

	onMount(async () => {
		stage = new Konva.Stage({
			container: container,
			width: width,
			height: height,
			scaleX: scale,
			scaleY: scale
		});
	});

	afterUpdate(() => {
		stage.scaleX(scale);
		stage.scaleY(scale);
		stage.setAttr('width', width);
		stage.setAttr('height', height);
	});

	onDestroy(() => {
		if (stage) stage.remove();
	});
</script>

{#if stage}
	<slot />
{/if}
