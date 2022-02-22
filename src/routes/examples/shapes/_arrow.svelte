<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Arrow from "$lib/shapes/arrow.svelte";

  let container;
  let stage;
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <Arrow
        x={stage.width() / 4}
        y={stage.height() / 4}
        points={[0, 0, stage.width() / 2, stage.height() / 2]}
        pointerLength={20}
        pointerWidth={20}
        fill={"black"}
        stroke={"black"}
        strokeWidth={4}
      />
    </Layer>
  </Stage>
{/if}
