<script lang="ts">
	// Components
	import { WidgetAside, WidgetControlButton } from '@/components/structure';
	import { TabList, TabItem } from '@/components/ui';
	import Settings from '@lucide/svelte/icons/settings';

	import TabBuySell from './TabBuySell.svelte';
	import TabMigration from './TabMigration.svelte';
	import TabLimits from './TabLimits.svelte';

	// Types
	import type { TNavItem } from '@/types/app';

	// Data
	const tabs: TNavItem[] = [
		{
			key: 'trade',
			label: 'Buy/Sell'
		},
		{
			key: 'migration',
			label: 'Migration'
		},
		{
			key: 'limits',
			label: 'Limits'
		}
	];

	type State = {
		onOpenSettings: () => void;
	};

	let props = $props<{ widgetState: State }>();

	let collapsed = $state(false);
	let activeTab: TNavItem = $state(tabs[0]);

	// Methods
	const onTabClick = (tab: TNavItem) => {
		activeTab = tab;
	};

	const onSettingsClick = () => {
		props.onOpenSettings();
	};
</script>

<WidgetAside draggable width={320} height={380}>
	{#snippet header()}
		<header class="e:flex e:justify-between">
			<TabList>
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
			<div class="e:flex e:gap-[8px]">
				<WidgetControlButton title="Settings" onclick={onSettingsClick}>
					<Settings size={16} />
				</WidgetControlButton>

				<WidgetControlButton title={collapsed ? 'expand' : 'collapse'}>_</WidgetControlButton>
			</div>
		</header>
	{/snippet}

	{#if activeTab.key === 'trade'}
		<TabBuySell />
	{/if}
	{#if activeTab.key === 'migration'}
		<TabMigration />
	{/if}
	{#if activeTab.key === 'limits'}
		<TabLimits />
	{/if}
</WidgetAside>
