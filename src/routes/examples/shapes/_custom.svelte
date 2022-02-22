<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Custom from "$lib/shapes/custom.svelte";

  let container;
  let stage;

  function sceneFunc(context, shape) {
    context.beginPath();
    context.moveTo(20, 50);
    context.lineTo(220, 80);
    context.quadraticCurveTo(150, 100, 260, 170);
    context.closePath();

    // (!) Konva specific method, it is very important
    context.fillStrokeShape(shape);
  }
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <Custom fill={"#00D2FF"} stroke={"black"} strokeWidth={4} {sceneFunc} />
    </Layer>
  </Stage>
{/if}
