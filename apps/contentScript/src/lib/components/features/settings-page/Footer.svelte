<script lang="ts">
  import Logo from "@src/assets/cabal_logo_lg.png";
  import { TelegramIcon, DocsIcon, TwitterIcon, CabalLogoMiniIcon } from "@/components/icons";

  // Types
	import type { TNavItem } from '@/types/app';

  const navs: TNavItem[] = [
    {
      label: "Bot",
      key: "bot",
      url: "https://t.me/CabalSolana_bot",
      component: CabalLogoMiniIcon,
    },
    {
      label: "Hub",
      key: "telegram",
      url: "https://t.me/cabalsolana_portal",
      component: TelegramIcon,
    },
    {
      label: "Docs",
      key: "docs",
      url: "https://cabalbot-1.gitbook.io/cabalbot-docs",
      component: DocsIcon,
    },
    {
      label: "Twitter",
      key: "twitter",
      url: "https://x.com/CabalSolana_bot",
      component: TwitterIcon,
    }
  ]
</script>

<footer class="e:w-full e:max-w-[510px] e:flex e:items-center e:justify-between e:select-none">
  <figure>
    <img src={Logo} alt="Cabal logo" class="e:pointer-events-none">
  </figure>

  <nav class="e:flex e:gap-x-[12px] e:items-center">
    {#each navs as nav}
      <a 
        href={nav.url}
        target="_blank"
        class="text-18px e:text-[#5D9667] e:flex e:gap-x-[2px] e:items-center"  
      >
        <nav.component />
        <span>
          {nav.label}
        </span>
      </a>
    {/each}
  </nav>
</footer>