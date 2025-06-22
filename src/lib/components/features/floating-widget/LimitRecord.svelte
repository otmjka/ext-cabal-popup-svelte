<script lang="ts">
  // Components
  import PencilIcon from "@lucide/svelte/icons/pencil";
  import TrashIcon from "@lucide/svelte/icons/trash";

  // Type
  import type { TLimitRecord } from '@/types/limits';

  // Props
  let {
    limit,
    onedit,
    ontrash,
  }: {
    limit: TLimitRecord,
    onedit?: () => void,
    ontrash?: () => void
  } = $props();

  // Methods
  const onEditClick = () => {
    onedit?.();
  }

  const onTrashClick = () => {
    ontrash?.();
  }
</script>

<tr class="[&>td]:px-[8px] [&>td]:py-[5px]">
  <td class="font-semibold">
    {limit.ticker}
  </td>
  <td 
    class:text-buy={limit.type === "negative"}
    class:text-sell={limit.type != "negative"}
  >
    {limit.limitType}
  </td>
  <td class="text-right">
    {limit.mc}
  </td>
  <td class="w-[42px]">
    <button
      class="cursor-pointer"
      onclick={onEditClick}
    >
      <PencilIcon size={16} />
    </button>
  </td>
  <td class="w-[42px]">
    <button
      class="cursor-pointer"
      onclick={onTrashClick}
    >
      <TrashIcon size={16} />
    </button>
  </td>
</tr>