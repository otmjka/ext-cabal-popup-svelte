<script lang="ts">
	let count = 0;
</script>

<main class="text-center">
	<h1 class="mb-4 text-lg font-bold text-gray-800">Svelte + Tailwind 4</h1>
	<button
		class="rounded bg-green-600 px-4 py-2 text-white hover:bg-blue-700"
		on:click={() => count++}
	>
		Clicked {count} times
	</button>
</main>
