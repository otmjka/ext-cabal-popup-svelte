<script lang="ts">
  // Components
  import { WidgetAside, WidgetControlButton } from '@/components/structure';
  import { TabList, TabItem } from '@/components/ui';
  import Settings from "@lucide/svelte/icons/settings";
  import Move from "@lucide/svelte/icons/move";

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

  let collapsed = $state(false);
  let activeTab: TNavItem = $state(tabs[0]);

  // Methods
  const onTabClick = (tab: TNavItem) => {
    activeTab = tab;
  }

  const onSettingsClick = () => {
    console.log('Settings');
  }
</script>

<WidgetAside 
  draggable 
  width={320} 
  height={380}
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
    <div class="e:flex e:gap-[4px]">
      <WidgetControlButton 
        title='Move'
        onclick={onSettingsClick}
      >
        <Move size={16}  />
      </WidgetControlButton>
      <WidgetControlButton 
        title='Settings'
        onclick={onSettingsClick}
      >
        <Settings size={16}  />
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