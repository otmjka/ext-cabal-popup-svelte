<script lang="ts">
  // Components
  import { WidgetAside, WidgetControlButton, WidgetControlDropdown } from '@/components/structure';
  import { TabList, TabItem } from '@/components/ui';

  import PinIcon from "@lucide/svelte/icons/pin";
  import PinOffIcon from "@lucide/svelte/icons/pin-off";
	import MenuIcon from '@lucide/svelte/icons/menu';

	import TabBuy from './TabBuy.svelte';
	import TabSell from './TabSell.svelte';

	// Types
	import type { TNavItem } from '@/types/app';

  // Props
  let props = $props<{
		handlers: {
			onMarketBuySol: (amount: number) => void;
			onOpenSettings: () => void;
			onMarketSellPerc: (value: number) => void;
		};
	}>();

	// Data
	const tabs: TNavItem[] = [
		{
			key: 'buy',
			label: 'Buy'
		},
		{
			key: 'sell',
			label: 'Sell'
		}
	];

  const menu = [
    {
      label: 'See Limit History',
      callback: () => {},
    }, {
      label: 'TX History',
      callback: () => {},
    }, {
      label: 'About Cabal',
      callback: () => {},
    },
  ];
  let showMenu = $state(true);
  let draggable = $state(false);
  let collapsed = $state(false);
  let activeTab: TNavItem = $state(tabs[0]);

  // Methods
  const onTabClick = (tab: TNavItem) => {
    activeTab = tab;
  }

  const onMenuClick = () => {
    showMenu = !showMenu;
  }
</script>

<WidgetAside 
  {draggable} 
  width={320} 
  height={356}
>
  {#snippet header()}
    <header class="e:flex e:justify-between">
      <TabList>
        {#each tabs as tab}
          <TabItem 
            onclick={() => { onTabClick(tab) }}
            active={activeTab.key === tab.key}
          >
            {tab.label}
          </TabItem>
        {/each}
      </TabList>
      <div class="e:flex e:gap-[6px]">
        <WidgetControlButton 
          title={draggable ? 'pin' : 'unpin'}
          onclick={() => { draggable = !draggable }}
        >
          {#if draggable}
            <PinIcon size={16} />
          {:else}
            <PinOffIcon size={16}  />
          {/if}
        </WidgetControlButton>
        <WidgetControlButton title={collapsed ? 'expand' : 'collapse'}>
          _
        </WidgetControlButton>

        <WidgetControlDropdown 
          items={menu} 
          bind:visible={showMenu}
        >
          <WidgetControlButton 
            title="Menu" 
            onclick={onMenuClick}
            active={showMenu}
          >
            <MenuIcon size={16} />
          </WidgetControlButton>
        </WidgetControlDropdown >
      </div>
    </header>
  {/snippet}

	{#if activeTab.key === 'buy'}
		<TabBuy handlers={props.handlers} />
	{/if}
	{#if activeTab.key === 'sell'}
		<TabSell />
	{/if}
</WidgetAside>
