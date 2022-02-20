<script>
	import Highlight from 'svelte-highlight';
	import lang from 'highlightjs-svelte';

	function unescapeHtml(unsafe) {
		return unsafe
			.replace(/&amp;/g, '&')
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&quot;/g, '"')
			.replace(/&#039;/g, "'");
	}

	export let code;
</script>

<header class="bg-white shadow">
	<div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
		<h1 class="text-lg leading-6 font-semibold text-gray-900"><slot name="title" /></h1>
	</div>
</header>
<main>
	<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
		<div class="px-4 py-4 sm:px-0">
			<!-- preview -->
			<div class="border-4 border-dashed border-gray-200 rounded-lg preview mx-auto">
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
						<Highlight language={lang} code={unescapeHtml(code)} />
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
	.preview {
		height: 500px;
		width: 500px;
	}
</style>
