<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Transformer from "$lib/transformer.svelte";
  import Rect from "$lib/shapes/rect.svelte";

  let container;
  let stage;
  const width = 500;
  const height = 500;

  const initialRectangles = [
    {
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      fill: "red",
      id: "rect1",
    },
    {
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      fill: "green",
      id: "rect2",
    },
  ];
  let selected_id;
  let rectangles = [];
</script>

<div bind:this={container} class="container" />
{#if container}
  <Stage
    {width}
    {height}
    {container}
    bind:stage
    on:click={(e) => {
      const clickedOnEmpty = e.detail.target === e.detail.target.getStage();
      if (clickedOnEmpty) {
        selected_id = undefined;
      }
    }}
  >
    <Layer>
      {#each initialRectangles as props, index}
        <Rect
          {...props}
          init_only_props={["x", "y"]}
          bind:node={rectangles[index]}
          draggable
          on:click={(e) => {
            selected_id = props.id;
          }}
          on:tap={() => {
            selected_id = props.id;
          }}
        >
          <!-- there is an issue: Cannot read properties of undefined _getPointerById-->
          {#if selected_id == props.id}
            <Transformer nodes={[rectangles[index]]} />
          {/if}
        </Rect>
      {/each}
    </Layer>
  </Stage>
{/if}
