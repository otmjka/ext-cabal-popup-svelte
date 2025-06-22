<script lang="ts">
  let {
    size = 14,
    ...other
  }: {
    size?: number,
    class?: string,
  } = $props();
</script>

<svg width="{size}px" height="{size}px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class={other?.class}>
<circle cx="8" cy="8" r="8" fill="black"/>
<path d="M4.97012 9.84906C5.02428 9.79498 5.09876 9.76343 5.17775 9.76343H12.3411C12.472 9.76343 12.5374 9.92118 12.4449 10.0136L11.0298 11.4266C10.9757 11.4807 10.9012 11.5122 10.8222 11.5122H3.65887C3.52797 11.5122 3.46252 11.3545 3.55505 11.2621L4.97012 9.84906Z" fill="url(#paint0_linear_338_12122)"/>
<path d="M4.97012 4.57343C5.02654 4.51934 5.10102 4.48779 5.17775 4.48779H12.3411C12.472 4.48779 12.5374 4.64554 12.4449 4.73794L11.0298 6.15093C10.9757 6.20502 10.9012 6.23657 10.8222 6.23657H3.65887C3.52797 6.23657 3.46252 6.07882 3.55505 5.98642L4.97012 4.57343Z" fill="url(#paint1_linear_338_12122)"/>
<path d="M11.0298 7.19428C10.9757 7.14019 10.9012 7.10864 10.8222 7.10864H3.65887C3.52797 7.10864 3.46252 7.26639 3.55505 7.35879L4.97012 8.77178C5.02428 8.82587 5.09876 8.85742 5.17775 8.85742H12.3411C12.472 8.85742 12.5374 8.69967 12.4449 8.60727L11.0298 7.19428Z" fill="url(#paint2_linear_338_12122)"/>
<defs>
<linearGradient id="paint0_linear_338_12122" x1="11.6568" y1="3.64373" x2="6.71059" y2="13.1316" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFA3"/>
<stop offset="1" stop-color="#DC1FFF"/>
</linearGradient>
<linearGradient id="paint1_linear_338_12122" x1="9.48905" y1="2.51363" x2="4.54286" y2="12.0015" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFA3"/>
<stop offset="1" stop-color="#DC1FFF"/>
</linearGradient>
<linearGradient id="paint2_linear_338_12122" x1="10.566" y1="3.07502" x2="5.61982" y2="12.5629" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FFA3"/>
<stop offset="1" stop-color="#DC1FFF"/>
</linearGradient>
</defs>
</svg>
