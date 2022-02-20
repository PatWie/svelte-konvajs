<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Text from "$lib/shapes/text.svelte";
  import Rect from "$lib/shapes/rect.svelte";

  let container;
  let stage;

  let complextTextMeta = {
    component: Text,
    props: {
      x: 20,
      y: 60,
      text: "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
      fontSize: 18,
      fontFamily: "Calibri",
      fill: "#555",
      width: 300,
      padding: 20,
      align: "center",
    },
  };
  let complexText;
</script>

<div bind:this={container} class="container" />

{#if container}
  <Stage width={500} height={500} {container} bind:stage>
    <Layer>
      <Text
        x={stage.width() / 2}
        y={15}
        text={"Simple Text"}
        fontSize={30}
        fontFamily={"Calibri"}
        fill={"green"}
      />
      <!-- TODO: figure out a nice way of how to order these things.-->
      {#if complexText}
        <Rect
          x={20}
          y={60}
          stroke={"#555"}
          strokeWidth={5}
          fill={"#ddd"}
          width={300}
          height={complexText.node.height()}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOffsetX={10}
          shadowOffsetY={10}
          shadowOpacity={0.2}
          cornerRadius={10}
        />
      {/if}
      <svelte:component
        this={complextTextMeta.component}
        bind:this={complexText}
        {...complextTextMeta.props}
      />
    </Layer>
  </Stage>
{/if}
