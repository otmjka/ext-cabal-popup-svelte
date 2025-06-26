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

<tr class="e:[&>td]:px-[8px] e:[&>td]:py-[5px]">
  <td class="e:font-semibold">
    {limit.ticker}
  </td>
  <td 
    class:text-buy={limit.type === "negative"}
    class:text-sell={limit.type != "negative"}
  >
    {limit.limitType}
  </td>
  <td class="e:text-right">
    {limit.mc}
  </td>
  <td class="e:w-[42px]">
    <button
      class="e:cursor-pointer"
      onclick={onEditClick}
    >
      <PencilIcon size={16} />
    </button>
  </td>
  <td class="e:w-[42px]">
    <button
      class="e:cursor-pointer"
      onclick={onTrashClick}
    >
      <TrashIcon size={16} />
    </button>
  </td>
</tr>