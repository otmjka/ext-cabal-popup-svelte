<script lang="ts">
	// import SolanaCircleIcon from '@/components/icons/SolanaCircleIcon.svelte';
	import SolanaIcon from '@/components/icons/SolanaIcon.svelte';
	import WalletIcon from '@lucide/svelte/icons/wallet';

	let {
		balance,
		walletIcon = false
	}: {
		balance: string;
		walletIcon?: boolean;
	} = $props();
</script>

<div class="text-12px e:flex e:items-center e:gap-x-[4px] e:font-bold e:text-white">
	{#if walletIcon}
		<WalletIcon size={14} class="e:mr-[4px] text-light-gray" />
	{/if}
	<SolanaIcon size={12} />
	{balance}
</div>
