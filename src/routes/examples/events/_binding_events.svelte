<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Text from "$lib/shapes/text.svelte";
  import Circle from "$lib/shapes/circle.svelte";
  import RegularPolygon from "$lib/shapes/regular_polygon.svelte";

  let container;
  let stage;

  let text;
  function writeMessage(message) {
    text = message;
  }
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <Text
        x={10}
        y={10}
        fontFamily={"Calibri"}
        fontSize={24}
        {text}
        fill={"black"}
      />
      <RegularPolygon
        x={80}
        y={120}
        sides={3}
        radius={80}
        fill={"#00D2FF"}
        stroke={"black"}
        strokeWidth={4}
        on:mousemove={() => {
          var mousePos = stage.getPointerPosition();
          var x = mousePos.x - 190;
          var y = mousePos.y - 40;
          writeMessage("x: " + x + ", y: " + y);
        }}
        on:mouseout={() => {
          writeMessage("Mouseout triangle");
        }}
      />
      <Circle
        x={230}
        y={100}
        radius={60}
        fill={"red"}
        stroke={"black"}
        strokeWidth={4}
        on:mouseover={() => {
          writeMessage("Mouseover circle");
        }}
        on:mouseout={() => {
          writeMessage("Mouseout circle");
        }}
        on:mousedown={() => {
          writeMessage("Mousedown circle");
        }}
      />
    </Layer>
  </Stage>
{/if}
