# svelte-konvajs

[![Build Status](https://ci.patwie.com/api/badges/PatWie/svelte-konvajs/status.svg)](https://ci.patwie.com/PatWie/svelte-konvajs)

Svelte wrapper for konvajs Open for PRs and contributions!

Full Documentation and demo [here](https://svelte-konvajs.patwie.com/)

### Installation
```shell script
npm i svelte-konvajs
```

### Usage
```svelte
<Stage width={500} height={500} {container}>
  <Layer>
    <Rect
      x={20}
      y={20}
      width={100}
      height={50}
      fill="green"
      stroke="black"
      strokeWidth={4}
    />
  </Layer>
</Stage>
```
