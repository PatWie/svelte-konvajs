<svelte:options accessors />

<script lang="ts">
  import {
    onMount,
    onDestroy,
    setContext,
    getContext,
    afterUpdate,
  } from "svelte";
  import Konva from "konva";
  import { parentKey, eventNames, excludeKeys } from "$lib/utils";
  import { createEventDispatcher } from "svelte";
  const dispatcher = createEventDispatcher();

  const { getParent } = getContext(parentKey);
  const parent = getParent();

  export let init_only_props = [];
  export let node: Konva.Wedge = undefined;
  setContext(parentKey, {
    getParent: () => node,
  });

  onMount(async () => {
    node = new Konva.Wedge({
      ...($$restProps as Konva.WedgeConfig),
    });
    parent.add(node);
    eventNames.forEach((event_name) => {
      node.on(event_name, (args) => {
        dispatcher(event_name, { ...args });
      });
    });
  });

  afterUpdate(() => {
    node.setAttrs(
      excludeKeys($$restProps, init_only_props) as Konva.WedgeConfig
    );
  });

  onDestroy(() => {
    if (node) node.remove();
  });
</script>

{#if node}
  <slot />
{/if}
