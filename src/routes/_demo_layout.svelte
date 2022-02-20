<script>
  import Highlight from "svelte-highlight";
  import hljs from "highlight.js";
  import typescript from "svelte-highlight/src/languages/typescript";
  import css from "svelte-highlight/src/languages/css";
  import xml from "svelte-highlight/src/languages/xml";
  import windi_svelte_components from "./_code_snippet/windi-svelte-components";

  const svelte_language = {
    name: "svelte-language",
    register: (hljs) => {
      return {
        subLanguage: "xml",
        contains: [
          hljs.COMMENT("<!--", "-->", {
            relevance: 10,
          }),
          {
            begin: /^(\s*)(<script.*(\s*context="module")?>)/gm,
            end: /^(\s*)(<\/script>)/gm,
            subLanguage: "typescript",
            excludeBegin: true,
            excludeEnd: true,
            contains: [
              {
                begin: /^(\s*)(\$:)/gm,
                end: /(\s*)/gm,
                className: "keyword",
              },
            ],
          },
          {
            begin: /^(\s*)(<style.*>)/gm,
            end: /^(\s*)(<\/style>)/gm,
            subLanguage: "css",
            excludeBegin: true,
            excludeEnd: true,
          },
          {
            begin: /\{/gm,
            end: /\}/gm,
            subLanguage: "typescript",
            contains: [
              {
                begin: /[\{]/,
                end: /[\}]/,
                skip: true,
              },
              {
                begin: /([#:\/@])(if|else|each|await|then|catch|debug|html)/gm,
                className: "keyword",
                relevance: 10,
              },
            ],
          },
        ],
      };
    },
  };

  function unescapeHtml(unsafe) {
    return unsafe
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }

  export let code;
</script>

<svelte:head>
  {@html windi_svelte_components}
</svelte:head>

<header class="bg-white shadow">
  <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
    <h1 class="text-lg leading-6 font-semibold text-gray-900">
      <slot name="title" />
    </h1>
  </div>
</header>
<main>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-4 sm:px-0">
      <!-- preview -->
      <div
        class="border-4 border-dashed border-gray-200 rounded-lg preview mx-auto"
      >
        <slot name="example" />
      </div>
      <!-- code example -->
      <div class="rounded-xl shadow-xl bg-gray-800 text-gray-200 my-4">
        <div class="border-b border-gray-700 px-8 py-3 flex justify-between">
          <div>
            <div class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500" />
            <div class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300" />
            <div class="inline-block w-3 h-3 mr-2 rounded-full bg-green-400" />
          </div>
        </div>

        <div class="px-4 py-2  relative">
          <div class="font-mono  text-sm">
            <Highlight language={svelte_language} code={unescapeHtml(code)} />
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  :global(.hljs) {
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity)) !important;
  }
</style>
