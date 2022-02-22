<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Line from "$lib/shapes/line.svelte";
  import { afterUpdate } from "svelte";

  let container;
  let stage;

  let lines = [
    {
      component: Line,
      props: {
        points: [5, 70, 140, 23, 250, 60, 300, 20],
        stroke: "red",
        strokeWidth: 15,
        lineCap: "round",
        lineJoin: "round",
      },
    },
    {
      component: Line,
      props: {
        points: [5, 70, 140, 23, 250, 60, 300, 20],
        stroke: "green",
        strokeWidth: 2,
        lineJoin: "round",
        /*
         * line segments with a length of 33px
         * with a gap of 10px
         */
        dash: [33, 10],
      },
    },
  ];

  let redLineNode;
  let greenLineNode;
  let blueLineNode;

  function move(down: boolean) {
    const sign = down ? +1 : -1;
    redLineNode.move({
      x: sign * 0,
      y: sign * 5,
    });
    greenLineNode.move({
      x: sign * 0,
      y: sign * 55,
    });
    blueLineNode.move({
      x: sign * 0,
      y: sign * 105,
    });
  }
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <svelte:component
        this={lines[0].component}
        bind:node={redLineNode}
        {...lines[0].props}
      />
      <svelte:component
        this={lines[1].component}
        bind:node={greenLineNode}
        {...lines[1].props}
      />

      <Line
        bind:node={blueLineNode}
        points={[5, 70, 140, 23, 250, 60, 300, 20]}
        stroke={"blue"}
        strokeWidth={10}
        lineCap={"round"}
        lineJoin={"round"}
        dash={[29, 20, 0.001, 20]}
      />
    </Layer>
  </Stage>
{/if}
<button
  type="button"
  class="btn"
  on:click={() => {
    move(true);
  }}>move down</button
>

<button
  type="button"
  class="justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  on:click={() => {
    move(false);
  }}>move up</button
>
