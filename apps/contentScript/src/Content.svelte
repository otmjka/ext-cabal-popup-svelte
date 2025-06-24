<script lang="ts">
	import FloatingWidget from '@/components/features/floating-widget/FloatingWidget.svelte';
	import { useContentManager } from '@/hooks/useContentManager';
	export let mint: string;

	const { handleOpenSettings } = useContentManager({ mint });
</script>

<main class="e:absolute e:top-0 e:right-0 e:z-[200]">
	<FloatingWidget state={{ onOpenSettings: handleOpenSettings }} />
</main>
