<script lang="ts">
  import { onMount, onDestroy, setContext, getContext } from "svelte";
  import Konva from "konva";
  import { parentKey, layerKey, stageKey } from "./utils";

  let layer: Konva.Layer;
  setContext(parentKey, {
    getParent: () => layer,
  });
  setContext(layerKey, {
    getLayer: () => layer,
  });

  const { getStage } = getContext(stageKey);
  const stage = getStage();
  onMount(async () => {
    layer = new Konva.Layer();
    stage.add(layer);
  });

  onDestroy(() => {
    if (layer) layer.remove();
  });
</script>

{#if layer}
  <slot />
{/if}
