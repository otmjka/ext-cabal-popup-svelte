<script lang="ts">
	// Components
	import { WidgetAside, WidgetControlButton } from '@/components/structure';
	import { TabList, TabItem } from '@/components/ui';
	import SettingsIcon from '@lucide/svelte/icons/settings';

	import TabBuySell from './TabBuySell.svelte';
	import TabMigration from './TabMigration.svelte';
	import TabLimits from './TabLimits.svelte';

	// Types
	import type { TNavItem } from '@/types/app';
	import type { ContentManagerHandlers } from '@/hooks/useContentManager/useContentManager.svelte';
	import { contentAppStore } from '@/stores/contentAppStore';
	import tabBuySellStore, { tabsFloating } from '@/stores/tab-buy-sell';

	// Data

	let props = $props<{
		handlers: ContentManagerHandlers;
	}>();

	let collapsed = $state(false);

	// Methods
	const onTabClick = (tab: TNavItem) => {
		$tabBuySellStore.floating.activeTab = tab;

		if ($tabBuySellStore.floating.activeTab.key === 'limits') {
			props.handlers.getTokenLimitOrders();
		}
	};

	const onSettingsClick = () => {
		props.handlers.onOpenSettings();
	};

	let isWidgetReady = $derived($contentAppStore.isWidgetReady);
</script>

<WidgetAside draggable width={320} height={380}>
	{#snippet header()}
		<header class="e:flex e:justify-between">
			<TabList>
				{#each tabsFloating as tab}
					<TabItem
						onclick={() => {
							onTabClick(tab);
						}}
						active={$tabBuySellStore.floating.activeTab.key === tab.key}
					>
						{tab.label}
					</TabItem>
				{/each}
			</TabList>
			<div class="e:flex e:gap-[6px]">
				<WidgetControlButton title="Settings" onclick={onSettingsClick}>
					<SettingsIcon size={16} />
				</WidgetControlButton>

				<WidgetControlButton title={collapsed ? 'expand' : 'collapse'}>_</WidgetControlButton>
			</div>
		</header>
	{/snippet}
	{#if isWidgetReady}
		{#if $tabBuySellStore.floating.activeTab.key === 'trade'}
			<TabBuySell handlers={props.handlers} />
			<!-- onSell={props.widgetState.onMarketSell} onAutoLimit={props.widgetState.onAutoLimitClick} -->
		{/if}
		{#if $tabBuySellStore.floating.activeTab.key === 'migration'}
			<TabMigration />
		{/if}
		{#if $tabBuySellStore.floating.activeTab.key === 'limits'}
			<TabLimits />
		{/if}
	{/if}
</WidgetAside>
