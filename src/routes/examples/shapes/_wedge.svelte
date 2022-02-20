<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Wedge from "$lib/shapes/wedge.svelte";

  let container;
  let stage;
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <Wedge
        x={stage.width() / 2}
        y={stage.height() / 2}
        radius={70}
        angle={60}
        fill={"red"}
        stroke={"black"}
        strokeWidth={4}
        rotation={-120}
      />
    </Layer>
  </Stage>
{/if}
