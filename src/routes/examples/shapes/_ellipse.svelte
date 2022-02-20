<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Ellipse from "$lib/shapes/ellipse.svelte";

  let container;
  let stage;
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <Ellipse
        x={stage.width() / 2}
        y={stage.height() / 2}
        radiusX={100}
        radiusY={70}
        fill="yellow"
        stroke="black"
        strokeWidth={4}
      />
    </Layer>
  </Stage>
{/if}
