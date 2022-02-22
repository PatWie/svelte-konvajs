<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Rect from "$lib/shapes/rect.svelte";

  let container;

  var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  let rectangleProps = [];

  let boxes = {};

  for (let i = 0; i < colors.length; i++) {
    const props = {
      x: i * 30 + 210,
      y: i * 18 + 40,
      width: 100,
      height: 50,
      fill: colors[i],
      stroke: "black",
      strokeWidth: 4,
      draggable: true,
      name: colors[i],
    };
    rectangleProps.push(props);
  }

  function moveTop() {
    boxes["yellow"].node.moveToTop();
  }
  function moveBottom() {
    boxes["yellow"].node.moveToBottom();
  }
  // ...
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container}>
    <Layer>
      {#each rectangleProps as props}
        <Rect
          {...props}
          bind:this={boxes[props.name]}
          on:mouseover={() => {
            document.body.style.cursor = "pointer";
          }}
          on:mouseout={() => {
            document.body.style.cursor = "default";
          }}
        />
      {/each}
    </Layer>
  </Stage>
{/if}

<button
  type="button"
  class="btn"
  on:click={() => {
    moveTop();
  }}>move top</button
>
<button
  type="button"
  class="btn"
  on:click={() => {
    moveBottom();
  }}>move bottom</button
>
<!-- ... -->
