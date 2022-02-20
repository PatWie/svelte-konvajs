<svelte:options accessors />

<script lang="ts">
	import {
		onMount,
		onDestroy,
		setContext,
		getContext,
		afterUpdate,
	} from "svelte";
	import Konva from "konva";
	import { circleKey, layerKey, eventNames } from "$lib/utils";
	import { createEventDispatcher } from "svelte";
	const dispatcher = createEventDispatcher();

	export let node: Konva.Circle = undefined;
	setContext(circleKey, {
		getCircle: () => node,
	});

	const { getLayer } = getContext(layerKey);
	const layer = getLayer();

	onMount(async () => {
		node = new Konva.Circle({
			...($$restProps as Konva.CircleConfig),
		});
		layer.add(node);
		eventNames.forEach((event_name) => {
			node.on(event_name, () => {
				dispatcher(event_name);
			});
		});
	});

	afterUpdate(() => {
		node.setAttrs($$restProps as Konva.CircleConfig);
	});

	onDestroy(() => {
		if (node) node.remove();
	});
</script>

{#if node}
	<slot />
{/if}
