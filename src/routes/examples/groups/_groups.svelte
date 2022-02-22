<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Rect from "$lib/shapes/rect.svelte";
  import Group from "$lib/group.svelte";

  let container;
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container}>
    <Layer>
      <Group x={120} y={40} rotation={20}>
        <Rect
          x={20}
          y={20}
          width={100}
          height={50}
          fill="green"
          stroke="black"
          strokeWidth={4}
        />
        <Rect
          x={150}
          y={40}
          width={100}
          height={50}
          fill="red"
          shadowBlur={10}
          cornerRadius={4}
        />
        <Rect
          x={50}
          y={120}
          width={100}
          height={100}
          fill="blue"
          cornerRadius={[0, 10, 20, 30]}
        />
      </Group>
    </Layer>
  </Stage>
{/if}
