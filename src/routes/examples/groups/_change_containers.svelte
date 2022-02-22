<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Rect from "$lib/shapes/rect.svelte";
  import Group from "$lib/group.svelte";
  import Circle from "$lib/shapes/circle.svelte";

  let container;

  let yellowGroup;
  let blueGroup;
  let box;
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container}>
    <Layer>
      <Group x={100} y={100} draggable={true} bind:node={yellowGroup}>
        <Circle x={0} y={0} radius={50} fill={"yellow"} stroke={"black"} />
        <Rect
          bind:node={box}
          x={10}
          y={10}
          width={100}
          height={50}
          fill={"red"}
          stroke={"black"}
        />
      </Group>
      <Group x={300} y={80} draggable={true} bind:node={blueGroup}>
        <Circle x={0} y={0} radius={50} fill={"blue"} stroke={"black"} /></Group
      >
    </Layer>
  </Stage>
{/if}
<button
  type="button"
  class="btn"
  on:click={() => {
    box.moveTo(blueGroup);
  }}>toBlue</button
>
<button
  type="button"
  class="btn"
  on:click={() => {
    box.moveTo(yellowGroup);
  }}>toYellow</button
>
