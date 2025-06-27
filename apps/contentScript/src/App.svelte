<script lang="ts">
  import Toaster from '@/components/structure/toaster/Toaster.svelte';

  import FloatingWidget from '@/components/features/floating-widget/FloatingWidget.svelte';
  import MainWidget from '@/components/features/main-widget/MainWidget.svelte';
  import SettingsPage from '@/components/features/settings-page/SettingsPage.svelte';

  // Data
  let showSettings = $state(true);
</script>

<main class="e:w-full e:h-dvh e:bg-slate-100 e:flex e:justify-end">
  {#if showSettings}
    <SettingsPage />
  {:else}
    <FloatingWidget />
    <MainWidget />
  {/if}
</main>

<Toaster />
