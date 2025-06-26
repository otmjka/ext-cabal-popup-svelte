<script lang="ts">
  import FileIcon from "@lucide/svelte/icons/file";
</script>

<div class="e:h-[20px]e:w-full e:flex e:items-center e:justify-between text-light-gray text-12px e:font-medium">
  <img 
    src="./src/assets/cabal_logo.svg" 
    alt="" 
    class="e:size-[18px]"
  >

  <button class="e:flex e:items-center e:gap-x-[4px] e:cursor-pointer" >
    <FileIcon size={12} />
    See Limit History
  </button>

  <button class="e:cursor-pointer" >
    TX History
  </button>
</div>