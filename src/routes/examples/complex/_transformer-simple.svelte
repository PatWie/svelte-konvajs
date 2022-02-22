<script lang="ts">
  import Stage from "$lib/stage.svelte";
  import Layer from "$lib/layer.svelte";
  import Text from "$lib/shapes/text.svelte";
  import Transformer from "$lib/transformer.svelte";

  let container;
  let stage;
  let textNode;

  const width = 500;
  const height = 500;
</script>

<div bind:this={container} class="container" />
{#if container}
  <Stage {width} {height} {container} bind:stage>
    <Layer>
      <Text
        text="Draggable Text"
        x={50}
        y={50}
        bind:node={textNode}
        draggable={true}
      >
        <!-- In Svelte there seems to be a good way of attaching transformers.-->
        <Transformer nodes={[textNode]} />
      </Text>
    </Layer>
  </Stage>
{/if}
