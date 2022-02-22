<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Path from "$lib/shapes/path.svelte";

  let container;
  let stage;
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <Path
        x={50}
        y={40}
        data={"M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-18.3.2,4.352-22.33c7.5.0.3.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.8.3.23.152l2.857,3.988c9.617-6.8.3.21.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z"}
        fill={"green"}
        scale={{
          x: 2,
          y: 2,
        }}
      />
    </Layer>
  </Stage>
{/if}
