<script lang="ts">
  import { onMount } from 'svelte';

  // Components
  import { SegmentControlItem, SegmentControlList, PaginationButton } from '@/components/ui';
  import SolanaCircleIcon from '@/components/icons/SolanaCircleIcon.svelte';
  import LimitRecord from './LimitRecord.svelte';

  // Utils
  import { random } from '@/untils/math';

  // Type
  import type { TLimitRecord } from '@/types/limits';
  import type { TNavItem } from '@/types/app';

  // Props
  let {
    token = "$Alpha"
  } = $props();

  // Data
  const segments: TNavItem[] = [
    {
      label: "Recent",
      key: "recent"
    }, {
      label: "Worth",
      key: "worth"
    }
  ];
  let segment: TNavItem = $state(segments[0]);
  let limits: TLimitRecord[] = $state([]);
  let page = $state(1);
  let total = $state(95);

  // Methods
  function generateRecrods(count = 8): TLimitRecord[] {
    const list = [];
    for (let i = 0; i < count; i++) {
      const type = random(1, 10) <= 5 ? "negative" : "positive";
      list.push({
        id: i,
        ticker: token,
        limitType: type === "negative" ? "BuyDip" : "BuyPush",
        type,
        mc: random(12_000, 100_000),
      });
    }
    return list;
  }

  const onPaginate = (newPage: number) => {
    page = newPage <= 0 ? 1 : newPage >= total ? total : newPage;
    limits = generateRecrods();
  }

  const onSegmentClick = (el: TNavItem) => {
    segment = el;
  }

  onMount(() => {
    limits = generateRecrods();
  });
</script>

<div class="e:w-full e:flex e:flex-col e:gap-y-[10px]">
  <div  class="e:w-full e:flex e:justify-start">
    <SegmentControlList>
      {#each segments as el}
        <SegmentControlItem
          active={segment.key === el.key}
          onclick={() => { onSegmentClick(el) }}
        >
          {el.label}
        </SegmentControlItem>
      {/each}
    </SegmentControlList>
  </div>

  <div class="e:w-full e:border-[1px] e:border-white/20 e:rounded-[2px]">
    <table class="text-12px e:w-full">
      <thead class="e:[&>tr>th]:font-normal e:[&>tr>th]:uppercase e:[&>tr>th]:px-[8px] e:[&>tr>th]:py-[5px] e:text-white/50 e:bg-white/10">
        <tr>
          <th class="e:w-1/3 e:text-left">
            $Ticker
          </th>
          <th class="e:w-1/3 e:text-left">
            Limit Type
          </th>
          <th class="e:w-1/3 e:text-right">
            <span class="e:flex e:justify-end e:gap-[4px] e:items-center">
              MC 
              <SolanaCircleIcon />
            </span>
          </th>
          <th class="e:w-[40px]"></th>
          <th class="e:w-[40px]"></th>
        </tr>
      </thead>
      <tbody class="e:bg-white/5">
        {#each limits as limit}
          <LimitRecord {limit} />
        {/each}
      </tbody>
      <tfoot class="e:[&>tr>th]:font-normal e:[&>tr>th]:px-[8px] e:[&>tr>th]:py-[5px] e:text-white/50 e:bg-white/10">
        <tr>
          <th colspan="3" class="e:text-right">
            {page}/{total}
          </th>
          <th>
            <PaginationButton 
              action="prev"
              disabled={page <= 1}
              onclick={() => onPaginate(page - 1)}
            />
          </th>
          <th>
            <PaginationButton 
              action="next"
              disabled={page >= total}
              onclick={() => onPaginate(page + 1)}
            />
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
