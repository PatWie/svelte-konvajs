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
  import { lineKey, layerKey, eventNames } from "$lib/utils";
  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();

  export let node: Konva.RegularPolygon = undefined;
  setContext(lineKey, {
    getLine: () => node,
  });

  const { getLayer } = getContext(layerKey);
  const layer = getLayer();

  onMount(async () => {
    node = new Konva.RegularPolygon({
      ...($$restProps as Konva.RegularPolygonConfig),
    });
    layer.add(node);
    eventNames.forEach((event_name) => {
      node.on(event_name, () => {
        dispatcher(event_name);
      });
    });
  });

  afterUpdate(() => {
    node.setAttrs($$restProps as Konva.RegularPolygonConfig);
  });

  onDestroy(() => {
    if (node) node.remove();
  });
</script>

{#if node}
  <slot />
{/if}
