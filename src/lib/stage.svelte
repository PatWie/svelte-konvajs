<script lang="ts">
  import { onDestroy, setContext, onMount, afterUpdate } from "svelte";
  import Konva from "konva";
  import { stageKey, eventNames } from "$lib/utils";
  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();
  export let container;

  export let width;
  export let height;
  export let scale = 1;

  export let stage: Konva.Stage;
  setContext(stageKey, {
    getStage: () => stage,
  });

  onMount(async () => {
    stage = new Konva.Stage({
      container: container,
      width: width,
      height: height,
      scaleX: scale,
      scaleY: scale,
    });
    eventNames.forEach((event_name) => {
      stage.on(event_name, (args) => {
        dispatcher(event_name, { ...args });
      });
    });
  });

  afterUpdate(() => {
    stage.scaleX(scale);
    stage.scaleY(scale);
    stage.setAttr("width", width);
    stage.setAttr("height", height);
  });

  onDestroy(() => {
    if (stage) stage.remove();
  });
</script>

{#if stage}
  <slot />
{/if}
