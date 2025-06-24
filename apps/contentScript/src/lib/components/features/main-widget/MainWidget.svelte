<script lang="ts">
  // Components
  import { WidgetAside, WidgetControlButton } from '@/components/structure';
  import { TabList, TabItem } from '@/components/ui';

  import PinIcon from "@lucide/svelte/icons/pin";
  import PinOffIcon from "@lucide/svelte/icons/pin-off";

  import TabBuy from './TabBuy.svelte';
  import TabSell from './TabSell.svelte';

  // Types
  import type { TNavItem } from '@/types/app';

  // Data
  const tabs: TNavItem[] = [
    {
      key: 'buy',
      label: 'Buy',
    }, {
      key: 'sell',
      label: 'Sell',
    },
  ];

  let draggable = $state(false);
  let collapsed = $state(false);
  let activeTab: TNavItem = $state(tabs[0]);

  // Methods
  const onTabClick = (tab: TNavItem) => {
    activeTab = tab;
  }
</script>

<WidgetAside 
  {draggable} 
  width={320} 
  height={442}
  class="e:p-[8px] e:gap-y-[12px]"
>
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
    <div class="e:flex e:gap-[8px]">
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
    </div>
  </header>

  {#if activeTab.key === 'buy'}
    <TabBuy />
  {/if}
  {#if activeTab.key === 'sell'}
    <TabSell />
  {/if}
</WidgetAside>