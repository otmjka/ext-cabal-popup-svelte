<script lang="ts">
  // Components
  import { WidgetAside, WidgetControlButton } from '@/components/structure';
  import { TabList, TabItem } from '@/components/ui';

  import PinIcon from "@lucide/svelte/icons/pin";
  import PinOffIcon from "@lucide/svelte/icons/pin-off";

  import TabBuySell from './TabBuySell.svelte';
  import TabMigration from './TabMigration.svelte';
  import TabLimits from './TabLimits.svelte';

  // Types
  import type { TNavItem } from '@/types/app';

  // Data
  const tabs: TNavItem[] = [
    {
      key: 'trade',
      label: 'Buy/Sell',
    }, {
      key: 'migration',
      label: 'Migration',
    }, {
      key: 'limits',
      label: 'Limits',
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

<WidgetAside {draggable} class="e:p-[8px] e:gap-y-[12px] e:max-h-[380px] e:h-full">
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