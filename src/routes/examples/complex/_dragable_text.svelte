<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Text from "$lib/shapes/text.svelte";

  let container;
  let stage;

  const width = 500;
  const height = 500;

  let state = {
    isDragging: false,
    x: 50,
    y: 50,
  };
</script>

<div bind:this={container} class="container" />
{#if container}
  <Stage {width} {height} {container} bind:stage>
    <Layer>
      <Text
        text="Draggable Text"
        {...state}
        draggable={true}
        fill={state.isDragging ? "green" : "black"}
        on:dragstart={() => {
          state.isDragging = true;
        }}
        on:dragend={(e) => {
          // TODO(): Some weird behavior (offset).
          //  state.x = e.detail.evt.x;
          //  state.y = e.detail.evt.y;

          // The following state update is not needed,
          // as we use "init_only_props" here.
          // var mousePos = stage.getPointerPosition();
          // state.x = mousePos.x;
          // state.y = mousePos.y;
          state.isDragging = false;
        }}
        init_only_props={["x", "y"]}
      />
    </Layer>
  </Stage>
{/if}
