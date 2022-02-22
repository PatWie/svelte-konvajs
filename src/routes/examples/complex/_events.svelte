<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Text from "$lib/shapes/text.svelte";
  import Star from "$lib/shapes/star.svelte";

  let container;
  let stage;

  const width = 500;
  const height = 500;

  function generateShapes() {
    return [...Array(10)].map((_, i) => ({
      id: i.toString(),
      x: Math.random() * width,
      y: Math.random() * height,
      rotation: Math.random() * 180,
      isDragging: false,
    }));
  }

  const stars = generateShapes();
</script>

<div bind:this={container} class="container" />
{#if container}
  <Stage {width} {height} {container} bind:stage>
    <Layer>
      <Text text="Try to drag a star" />
      {#each stars as star}
        <Star
          {...star}
          numPoints={5}
          innerRadius={20}
          outerRadius={40}
          fill="#89b717"
          opacity={0.8}
          draggable
          shadowColor="black"
          shadowBlur={10}
          shadowOpacity={0.6}
          on:dragstart={() => {
            star.isDragging = true;
          }}
          on:dragend={(e) => {
            console.log(e);
            // This is different to the react example.
            // TODO(): figure out why this is not needed in the React version.
            var mousePos = stage.getPointerPosition();
            star.x = mousePos.x;
            star.y = mousePos.y;
            star.isDragging = false;
          }}
          shadowOffsetX={star.isDragging ? 10 : 5}
          shadowOffsetY={star.isDragging ? 10 : 5}
          scaleX={star.isDragging ? 1.2 : 1}
          scaleY={star.isDragging ? 1.2 : 1}
        />
      {/each}
    </Layer>
  </Stage>
{/if}
