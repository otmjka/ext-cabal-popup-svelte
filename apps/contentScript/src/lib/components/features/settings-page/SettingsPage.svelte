<script lang="ts">
  // Components
  import { TabItem, TabList } from '@/components/ui';

  import TabBuySell from './TabBuySell.svelte';
  import TabAutoLimits from './TabAutoLimits.svelte';
  import TabMigrationSnipe from './TabMigrationSnipe.svelte';
  import TabLimit from './TabLimit.svelte';
  import TabTxProcessors from './TabTxProcessors.svelte';
  import Footer from './Footer.svelte';

	// Types
	import type { TNavItem } from '@/types/app';

	// Data
	const tabs: TNavItem[] = [
		{
			key: 'buy_sell',
			label: 'Buy/Sell Settings',
      component: TabBuySell,
		}, {
			key: 'auto_limits',
			label: 'AutoLimits Settings',
      component: TabAutoLimits,
		}, {
			key: 'migration_snipe',
			label: 'Migration Snipe Settings',
      component: TabMigrationSnipe,
		}, {
			key: 'limit',
			label: 'Limit Settings',
      component: TabLimit,
		}, {
			key: 'tx_processors',
			label: 'Transaction processors',
      component: TabTxProcessors,
		},
	];
	let activeTab: TNavItem = $state(tabs[1]);

	// Methods
	const onTabClick = (tab: TNavItem) => {
		activeTab = tab;
	};
</script>

<main class="ff-chakra page-settings e:pt-[24px]">
  <header>
    <TabList class="e:gap-x-[20px]">
      {#each tabs as tab}
        <TabItem
          onclick={() => {
            onTabClick(tab);
          }}
          active={activeTab.key === tab.key}
        >
          {tab.label}
        </TabItem>
      {/each}
    </TabList>
  </header>

  <div class="e:w-full e:flex e:justify-center">
    <activeTab.component />
  </div>
  <Footer />
</main>

<style scoped>
	@reference "@src/app.css";

  .page-settings {
    @apply e:w-full e:min-h-dvh e:h-fit;
    @apply e:flex e:flex-col e:gap-y-[32px] e:items-center;
    @apply e:bg-gray-950 e:relative;
    @apply e:bg-no-repeat e:bg-cover e:bg-fixed;
    background-image: url("../../../../assets/main-bg.jpg");
  }
</style>