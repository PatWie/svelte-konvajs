<script lang="ts">
	import Example from './examples/shapes/_rect.svelte';
	import DemoLayout from './_demo_layout.svelte';
	const code = `&lt;script lang=&quot;ts&quot;&gt;
	import Stage from &quot;$lib/stage.svelte&quot;;
	import Layer from &quot;$lib/layer.svelte&quot;;
	import Rectangle from &quot;$lib/shapes/rectangle.svelte&quot;;

	let container;
&lt;/script&gt;

&lt;div bind:this={container} class=&quot;container&quot; /&gt;

{#if container}
	&lt;Stage width={500} height={500} {container}&gt;
		&lt;Layer&gt;
			&lt;Rectangle
				x={20}
				y={20}
				width={100}
				height={50}
				fill=&quot;green&quot;
				stroke=&quot;black&quot;
				strokeWidth={4}
			/&gt;
			&lt;Rectangle
				x={150}
				y={40}
				width={100}
				height={50}
				fill=&quot;red&quot;
				shadowBlur={10}
				cornerRadius={4}
			/&gt;
			&lt;Rectangle
				x={50}
				y={120}
				width={100}
				height={100}
				fill=&quot;blue&quot;
				cornerRadius={[0, 10, 20, 30]}
			/&gt;
		&lt;/Layer&gt;
	&lt;/Stage&gt;
{/if}

&lt;style&gt;
	.container {
		background-color: #f0f0f0;
	}
&lt;/style&gt;`;
</script>

<DemoLayout>
	<svelte:fragment slot="title">Rectangle</svelte:fragment>
	<svelte:fragment slot="example"><Example /></svelte:fragment>
	<svelte:fragment slot="code">{@html code}</svelte:fragment>
</DemoLayout>
