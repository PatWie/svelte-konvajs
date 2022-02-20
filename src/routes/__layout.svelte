<script>
	import 'virtual:windi.css';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-100">
  <body class="h-full">
  ```
-->
<div class="min-h-full">
	<nav class="bg-purple-600">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<div class="text-white">Svelte- KonvaJS</div>
					</div>
					<div class="hidden md:block">
						<div class="ml-10 flex items-baseline space-x-4">
							<a
								href="#"
								class=" text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-500 hover:bg-opacity-75"
								aria-current="page">Start</a
							>
							<a
								href="#"
								class=" text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-500 hover:bg-opacity-75"
								aria-current="page">Github</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<slot />
</div>
