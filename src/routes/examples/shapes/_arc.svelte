<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Arc from "$lib/shapes/arc.svelte";

  let container;
  let stage;
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <Arc
        x={stage.width() / 2}
        y={stage.height() / 2}
        innerRadius={40}
        outerRadius={70}
        angle={60}
        fill={"yellow"}
        stroke={"black"}
        strokeWidth={4}
      />
    </Layer>
  </Stage>
{/if}
