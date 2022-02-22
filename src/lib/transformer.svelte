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
  import { layerKey, eventNames } from "$lib/utils";
  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();

  const { getLayer } = getContext(layerKey);
  const layer = getLayer();

  export let node: Konva.Transformer = undefined;

  onMount(async () => {
    node = new Konva.Transformer({
      ...($$restProps as Konva.TransformerConfig),
    });
    eventNames.forEach((event_name) => {
      node.on(event_name, (args) => {
        dispatcher(event_name, { ...args });
      });
    });
    layer.add(node);
  });

  onDestroy(() => {
    if (node) node.remove();
  });
</script>

{#if node}
  <slot />
{/if}
