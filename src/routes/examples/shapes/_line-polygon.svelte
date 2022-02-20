<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Line from "$lib/shapes/line.svelte";
  import { afterUpdate } from "svelte";

  let container;
  let stage;
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <Line
        points={[23, 20, 23, 160, 70, 93, 150, 109, 290, 139, 270, 93]}
        fill={"#00D2FF"}
        stroke={"black"}
        strokeWidth={5}
        closed={true}
      />
    </Layer>
  </Stage>
{/if}
