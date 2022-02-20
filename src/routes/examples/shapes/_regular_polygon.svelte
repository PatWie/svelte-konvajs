<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import RegularPolygon from "$lib/shapes/regular_polygon.svelte";

  let container;
  let stage;
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <RegularPolygon
        x={100}
        y={150}
        sides={6}
        radius={70}
        fill={"red"}
        stroke={"black"}
        strokeWidth={4}
      />
    </Layer>
  </Stage>
{/if}
