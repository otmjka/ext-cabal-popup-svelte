<script lang="ts">
	import { type Snippet } from 'svelte';
	type IPaper = {
		children: Snippet;
	};

	// Props
	let { children, ...other }: IPaper = $props();

	// Data
	// const variants = {
	// 	buy: 'e:bg-[#15251980] e:border-[#5BBE7B80]',
	// 	sell: 'e:bg-[#2B161A80] e:border-[#E96B8280]',
	// 	ghost: 'e:bg-gray-400/20 e:border-gray-400/40'
	// };

	// // Reactive
	// let cssClass = $derived.by(() => {
	// 	return [
	// 		`e:w-full e:rounded-[2px] e:border e:px-[8px] e:py-[8px]`,
	// 		variants[variant] || variants.buy,
	// 		other?.class
	// 	].join(' ');
	// });

	// const commonClasses = 'e:border';
	// const color = {
	// 	['e:bg-black ebrd-black-100 e:border-black-100']:
	// 		props.color === PaperColor.black || !props.color,
	// 	['e:bg-green-50 e:border-green-200 ebrd-green-200']: props.color === PaperColor.green,
	// 	['e:bg-red-50 e:border-red-200 ebrd-red-200']: props.color === PaperColor.red
	// };
	// const p = {
	// 	'e:px-8 e:py-8': !props.p,
	// 	[`e:px-${props.p} e:py-${props.p} epx${props.p} epy${props.p}`]: props.p
	// };
</script>

<div class="e:border e:bg-black ebrd-black-100 e:border-black-100 e:px-8 e:py-8">
	{@render children?.()}
</div>
