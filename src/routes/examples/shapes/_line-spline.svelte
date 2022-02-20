<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Line from "$lib/shapes/line.svelte";
  import { afterUpdate } from "svelte";

  let container;
  let stage;

  const pt_red = [5, 70, 140, 23, 250, 60, 300, 20];
  const pt_green = pt_red.map((x) => x + 50);
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <Line
        points={pt_red}
        stroke={"red"}
        strokeWidth={15}
        lineCap={"round"}
        lineJoin={"round"}
        tension={1}
      />
      <Line
        points={pt_green}
        stroke={"green"}
        strokeWidth={2}
        lineJoin={"round"}
        dash={[33, 10]}
        lineCap={"round"}
        tension={0.5}
      />
    </Layer>
  </Stage>
{/if}
