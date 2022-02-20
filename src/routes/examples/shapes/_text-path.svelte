<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import TextPath from "$lib/shapes/text_path.svelte";

  let container;
  let stage;
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <TextPath
        x={0}
        y={50}
        fill={"#333"}
        fontSize={16}
        fontFamily={"Arial"}
        text={"All the world's a stage, and all the men and women merely players."}
        data={"M10,10 C0,0 10,150 100,100 S300,150 5.0.300"}
      />
    </Layer>
  </Stage>
{/if}
