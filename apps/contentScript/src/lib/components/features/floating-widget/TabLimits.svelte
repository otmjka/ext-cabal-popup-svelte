<script lang="ts">
	import tabBuySellStore, { segments } from '@/stores/tab-buy-sell';
	// Components
	import { SegmentControlItem, SegmentControlList, PaginationButton } from '@/components/ui';
	import SolanaCircleIcon from '@/components/icons/SolanaCircleIcon.svelte';
	import LimitRecord from './LimitRecord.svelte';

	// Utils
	import { TargetFormatType } from '@/shared/src/utils/formatters';

	import { mapApiOrderParsedToRecord } from '@/shared/src/utils/mappers';

	// Stores
	import { contentAppStore } from '@/stores/contentAppStore';

	// Type
	import type { TLimitRecord } from '@/types/limits';
	import type { TNavItem } from '@/types/app';

	// Data

	const targetFormatType = [TargetFormatType.mc, TargetFormatType.sol, TargetFormatType.usd];
	let targetFormatTypeIndex = $state<number>(0);

	let limits: TLimitRecord[] = $derived.by(() => {
		if (!$contentAppStore.tokenStatus || !$contentAppStore.solPriceUSD) {
			return [];
		}
		const mapper = mapApiOrderParsedToRecord({
			formatType: targetFormatType[targetFormatTypeIndex],
			tokenStatusSupply: $contentAppStore.tokenStatus?.supply,
			solPriceUSD: $contentAppStore.solPriceUSD,
			ticker: $contentAppStore.tokenStatus?.ticker
		});

		return $contentAppStore.limitOrders.map(mapper);
	});

	let page = $state(1);
	let total = $state(95);

	// Methods

	const onPaginate = (newPage: number) => {
		page = newPage <= 0 ? 1 : newPage >= total ? total : newPage;
		// limits = generateRecrods();
	};

	const onSegmentClick = (el: TNavItem) => {
		$tabBuySellStore.floating.segment = el;
	};

	const onChangePriceFormatType = () => {
		if (targetFormatTypeIndex === 2) {
			targetFormatTypeIndex = 0;
			return;
		}

		targetFormatTypeIndex += 1;
	};
</script>

<div class="e:w-full e:flex e:flex-col e:gap-y-[10px]">
	<div class="e:w-full e:flex e:justify-start">
		<SegmentControlList>
			{#each segments as el}
				<SegmentControlItem
					active={$tabBuySellStore.floating.segment.key === el.key}
					onclick={() => {
						onSegmentClick(el);
					}}
				>
					{el.label}
				</SegmentControlItem>
			{/each}
		</SegmentControlList>
	</div>

	<div class="e:w-full e:border-[1px] e:border-white/20 e:rounded-[2px]">
		<table class="text-12px e:w-full">
			<thead
				class="e:[&>tr>th]:font-normal e:[&>tr>th]:uppercase e:[&>tr>th]:px-[8px] e:[&>tr>th]:py-[5px] e:text-white/50 e:bg-white/10"
			>
				<tr>
					<th class="e:w-1/3 e:text-left"> $Ticker </th>
					<th class="e:w-1/3 e:text-left"> Limit Type </th>
					<th class="e:w-1/3 e:text-right">
						<button type="button" onclick={onChangePriceFormatType}>
							<span class="e:flex e:justify-end e:gap-[4px] e:items-center">
								MC
								<SolanaCircleIcon />
							</span>
						</button>
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
			<tfoot
				class="e:[&>tr>th]:font-normal e:[&>tr>th]:px-[8px] e:[&>tr>th]:py-[5px] e:text-white/50 e:bg-white/10"
			>
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
