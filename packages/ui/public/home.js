(function () {
  'use strict';var __vite_style__ = document.createElement('style');__vite_style__.textContent = "@import \"https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap\";\n\n/*! tailwindcss v4.1.10 | MIT License | https://tailwindcss.com */\n@layer properties {\n  @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {\n    *, :before, :after, ::backdrop {\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n      --tw-divide-x-reverse: 0;\n      --tw-border-style: solid;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-duration: initial;\n      --tw-ease: initial;\n    }\n  }\n}\n@layer theme {\n  :root, :host {\n    --e-font-sans: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    --e-font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n    --e-color-red-50: #170f13;\n    --e-color-red-100: #2b161a;\n    --e-color-red-200: #562d34;\n    --e-color-red-300: #82444f;\n    --e-color-red-400: #ad5b69;\n    --e-color-red-500: #e96b82;\n    --e-color-red-600: #de8c9c;\n    --e-color-green-50: #0d1310;\n    --e-color-green-100: #152519;\n    --e-color-green-200: #2d4b33;\n    --e-color-green-400: #75bc81;\n    --e-color-green-500: #5bbe7b;\n    --e-color-blue-100: oklch(93.2% .032 255.585);\n    --e-color-blue-300: oklch(80.9% .105 251.813);\n    --e-color-blue-500: oklch(62.3% .214 259.815);\n    --e-color-blue-600: oklch(54.6% .245 262.881);\n    --e-color-purple-500: oklch(62.7% .265 303.9);\n    --e-color-purple-600: oklch(55.8% .288 302.321);\n    --e-color-gray-100: oklch(96.7% .003 264.542);\n    --e-color-gray-200: oklch(92.8% .006 264.531);\n    --e-color-gray-300: oklch(87.2% .01 258.338);\n    --e-color-gray-400: oklch(70.7% .022 261.325);\n    --e-color-gray-600: oklch(44.6% .03 256.802);\n    --e-color-gray-700: oklch(37.3% .034 259.733);\n    --e-color-black: #04070c;\n    --e-color-white: #fff;\n    --e-spacing: 4px;\n    --e-text-xs: 12px;\n    --e-text-xs--line-height: calc(1 / .75);\n    --e-text-sm: 14px;\n    --e-text-sm--line-height: calc(1.25 / .875);\n    --e-text-base: 1rem;\n    --e-text-base--line-height: calc(1.5 / 1);\n    --e-text-lg: 18px;\n    --e-text-lg--line-height: calc(1.75 / 1.125);\n    --e-text-2xl: 24px;\n    --e-text-2xl--line-height: calc(2 / 1.5);\n    --e-font-weight-normal: 400;\n    --e-font-weight-medium: 500;\n    --e-font-weight-semibold: 600;\n    --e-font-weight-bold: 700;\n    --e-radius-lg: .5rem;\n    --e-ease-in: cubic-bezier(.4, 0, 1, 1);\n    --e-default-transition-duration: .15s;\n    --e-default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    --e-default-font-family: var(--e-font-sans);\n    --e-default-mono-font-family: var(--e-font-mono);\n    --e-font-chakra: \"Chakra Petch\", \"sans-serif\";\n    --e-color-black-100: #36383c;\n    --e-color-black-200: #686a6d;\n    --e-color-black-300: #9b9c9e;\n    --e-color-black-400: #cdcdce;\n    --e-spacing-4\\.5: 18px;\n    --e-spacing-7\\.5: 30px;\n  }\n}\n@layer base {\n  *, :after, :before, ::backdrop {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  ::file-selector-button {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  html, :host {\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    line-height: 1.5;\n    font-family: var(--e-default-font-family, ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");\n    font-feature-settings: var(--e-default-font-feature-settings, normal);\n    font-variation-settings: var(--e-default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n\n  b, strong {\n    font-weight: bolder;\n  }\n\n  code, kbd, samp, pre {\n    font-family: var(--e-default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n    font-feature-settings: var(--e-default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--e-default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub, sup {\n    vertical-align: baseline;\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n  }\n\n  sub {\n    bottom: -.25em;\n  }\n\n  sup {\n    top: -.5em;\n  }\n\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n\n  :-moz-focusring {\n    outline: auto;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  ol, ul, menu {\n    list-style: none;\n  }\n\n  img, svg, video, canvas, audio, iframe, embed, object {\n    vertical-align: middle;\n    display: block;\n  }\n\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  button, input, select, optgroup, textarea {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n\n  ::placeholder {\n    opacity: 1;\n  }\n\n  @supports (not ((-webkit-appearance: -apple-pay-button))) or (contain-intrinsic-size: 1px) {\n    ::placeholder {\n      color: currentColor;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      ::placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n\n  ::-webkit-datetime-edit {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-year-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-month-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-day-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-hour-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-minute-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-second-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-millisecond-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  button, input:where([type=\"button\"], [type=\"reset\"], [type=\"submit\"]) {\n    appearance: button;\n  }\n\n  ::file-selector-button {\n    appearance: button;\n  }\n\n  ::-webkit-inner-spin-button {\n    height: auto;\n  }\n\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [hidden]:where(:not([hidden=\"until-found\"])) {\n    display: none !important;\n  }\n}\n@layer components;\n@layer utilities {\n  .e\\:absolute {\n    position: absolute;\n  }\n\n  .e\\:relative {\n    position: relative;\n  }\n\n  .e\\:top-0 {\n    top: calc(var(--e-spacing) * 0);\n  }\n\n  .e\\:right-0 {\n    right: calc(var(--e-spacing) * 0);\n  }\n\n  .e\\:bottom-\\[-2px\\] {\n    bottom: -2px;\n  }\n\n  .e\\:z-\\[200\\] {\n    z-index: 200;\n  }\n\n  .e\\:my-4 {\n    margin-block: calc(var(--e-spacing) * 4);\n  }\n\n  .e\\:mt-2 {\n    margin-top: calc(var(--e-spacing) * 2);\n  }\n\n  .e\\:mt-3 {\n    margin-top: calc(var(--e-spacing) * 3);\n  }\n\n  .e\\:mt-4 {\n    margin-top: calc(var(--e-spacing) * 4);\n  }\n\n  .e\\:mt-6 {\n    margin-top: calc(var(--e-spacing) * 6);\n  }\n\n  .e\\:mt-\\[6px\\] {\n    margin-top: 6px;\n  }\n\n  .e\\:mt-\\[10px\\] {\n    margin-top: 10px;\n  }\n\n  .e\\:mt-\\[14px\\] {\n    margin-top: 14px;\n  }\n\n  .e\\:mb-2 {\n    margin-bottom: calc(var(--e-spacing) * 2);\n  }\n\n  .e\\:mb-3 {\n    margin-bottom: calc(var(--e-spacing) * 3);\n  }\n\n  .e\\:mb-4 {\n    margin-bottom: calc(var(--e-spacing) * 4);\n  }\n\n  .e\\:mb-5 {\n    margin-bottom: calc(var(--e-spacing) * 5);\n  }\n\n  .e\\:mb-8 {\n    margin-bottom: calc(var(--e-spacing) * 8);\n  }\n\n  .e\\:mb-\\[4px\\] {\n    margin-bottom: 4px;\n  }\n\n  .e\\:mb-\\[6px\\] {\n    margin-bottom: 6px;\n  }\n\n  .e\\:mb-\\[15px\\] {\n    margin-bottom: 15px;\n  }\n\n  .e\\:ml-2 {\n    margin-left: calc(var(--e-spacing) * 2);\n  }\n\n  .e\\:block {\n    display: block;\n  }\n\n  .e\\:flex {\n    display: flex;\n  }\n\n  .e\\:size-2 {\n    width: calc(var(--e-spacing) * 2);\n    height: calc(var(--e-spacing) * 2);\n  }\n\n  .e\\:size-4 {\n    width: calc(var(--e-spacing) * 4);\n    height: calc(var(--e-spacing) * 4);\n  }\n\n  .e\\:size-4\\.5 {\n    width: var(--e-spacing-4\\.5);\n    height: var(--e-spacing-4\\.5);\n  }\n\n  .e\\:size-5 {\n    width: calc(var(--e-spacing) * 5);\n    height: calc(var(--e-spacing) * 5);\n  }\n\n  .e\\:size-7\\.5 {\n    width: var(--e-spacing-7\\.5);\n    height: var(--e-spacing-7\\.5);\n  }\n\n  .e\\:h-4 {\n    height: calc(var(--e-spacing) * 4);\n  }\n\n  .e\\:h-5 {\n    height: calc(var(--e-spacing) * 5);\n  }\n\n  .e\\:h-\\[1px\\] {\n    height: 1px;\n  }\n\n  .e\\:h-\\[12px\\] {\n    height: 12px;\n  }\n\n  .e\\:h-\\[16px\\] {\n    height: 16px;\n  }\n\n  .e\\:h-\\[386px\\] {\n    height: 386px;\n  }\n\n  .e\\:h-screen {\n    height: 100vh;\n  }\n\n  .e\\:min-h-\\[662px\\] {\n    min-height: 662px;\n  }\n\n  .e\\:w-4 {\n    width: calc(var(--e-spacing) * 4);\n  }\n\n  .e\\:w-6 {\n    width: calc(var(--e-spacing) * 6);\n  }\n\n  .e\\:w-11 {\n    width: calc(var(--e-spacing) * 11);\n  }\n\n  .e\\:w-16 {\n    width: calc(var(--e-spacing) * 16);\n  }\n\n  .e\\:w-\\[5px\\] {\n    width: 5px;\n  }\n\n  .e\\:w-\\[10px\\] {\n    width: 10px;\n  }\n\n  .e\\:w-\\[12px\\] {\n    width: 12px;\n  }\n\n  .e\\:w-\\[16px\\] {\n    width: 16px;\n  }\n\n  .e\\:w-\\[56px\\] {\n    width: 56px;\n  }\n\n  .e\\:w-\\[103px\\] {\n    width: 103px;\n  }\n\n  .e\\:w-\\[167px\\] {\n    width: 167px;\n  }\n\n  .e\\:w-\\[320px\\] {\n    width: 320px;\n  }\n\n  .e\\:w-\\[422px\\] {\n    width: 422px;\n  }\n\n  .e\\:w-\\[764px\\] {\n    width: 764px;\n  }\n\n  .e\\:w-full {\n    width: 100%;\n  }\n\n  .e\\:w-screen {\n    width: 100vw;\n  }\n\n  .e\\:max-w-\\[312px\\] {\n    max-width: 312px;\n  }\n\n  .e\\:min-w-\\[288px\\] {\n    min-width: 288px;\n  }\n\n  .e\\:flex-1 {\n    flex: 1;\n  }\n\n  .e\\:transform {\n    transform: var(--tw-rotate-x, ) var(--tw-rotate-y, ) var(--tw-rotate-z, ) var(--tw-skew-x, ) var(--tw-skew-y, );\n  }\n\n  .e\\:cursor-pointer {\n    cursor: pointer;\n  }\n\n  .e\\:appearance-none {\n    appearance: none;\n  }\n\n  .e\\:flex-col {\n    flex-direction: column;\n  }\n\n  .e\\:items-baseline {\n    align-items: baseline;\n  }\n\n  .e\\:items-center {\n    align-items: center;\n  }\n\n  .e\\:items-end {\n    align-items: flex-end;\n  }\n\n  .e\\:items-start {\n    align-items: flex-start;\n  }\n\n  .e\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .e\\:justify-center {\n    justify-content: center;\n  }\n\n  .e\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .e\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .e\\:gap-0\\.5 {\n    gap: calc(var(--e-spacing) * .5);\n  }\n\n  .e\\:gap-1 {\n    gap: calc(var(--e-spacing) * 1);\n  }\n\n  .e\\:gap-2 {\n    gap: calc(var(--e-spacing) * 2);\n  }\n\n  .e\\:gap-3 {\n    gap: calc(var(--e-spacing) * 3);\n  }\n\n  .e\\:gap-4 {\n    gap: calc(var(--e-spacing) * 4);\n  }\n\n  .e\\:gap-5 {\n    gap: calc(var(--e-spacing) * 5);\n  }\n\n  .e\\:gap-7 {\n    gap: calc(var(--e-spacing) * 7);\n  }\n\n  .e\\:gap-\\[7px\\] {\n    gap: 7px;\n  }\n\n  .e\\:gap-\\[10px\\] {\n    gap: 10px;\n  }\n\n  :where(.e\\:divide-x > :not(:last-child)) {\n    --tw-divide-x-reverse: 0;\n    border-inline-style: var(--tw-border-style);\n    border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));\n    border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n  }\n\n  :where(.e\\:divide-black-300 > :not(:last-child)) {\n    border-color: var(--e-color-black-300);\n  }\n\n  .e\\:overflow-hidden {\n    overflow: hidden;\n  }\n\n  .e\\:rounded-\\[5px\\] {\n    border-radius: 5px;\n  }\n\n  .e\\:rounded-\\[10px\\] {\n    border-radius: 10px;\n  }\n\n  .e\\:rounded-full {\n    border-radius: 3.40282e38px;\n  }\n\n  .e\\:rounded-lg {\n    border-radius: var(--e-radius-lg);\n  }\n\n  .e\\:border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n\n  .e\\:border-r {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 1px;\n  }\n\n  .e\\:border-black-100 {\n    border-color: var(--e-color-black-100);\n  }\n\n  .e\\:border-black-200 {\n    border-color: var(--e-color-black-200);\n  }\n\n  .e\\:border-black-300 {\n    border-color: var(--e-color-black-300);\n  }\n\n  .e\\:border-gray-200 {\n    border-color: var(--e-color-gray-200);\n  }\n\n  .e\\:border-gray-400 {\n    border-color: var(--e-color-gray-400);\n  }\n\n  .e\\:border-gray-600 {\n    border-color: var(--e-color-gray-600);\n  }\n\n  .e\\:border-green-200 {\n    border-color: var(--e-color-green-200);\n  }\n\n  .e\\:border-green-400 {\n    border-color: var(--e-color-green-400);\n  }\n\n  .e\\:border-green-500 {\n    border-color: var(--e-color-green-500);\n  }\n\n  .e\\:border-red-200 {\n    border-color: var(--e-color-red-200);\n  }\n\n  .e\\:border-red-400 {\n    border-color: var(--e-color-red-400);\n  }\n\n  .e\\:border-red-500 {\n    border-color: var(--e-color-red-500);\n  }\n\n  .e\\:border-white {\n    border-color: var(--e-color-white);\n  }\n\n  .e\\:bg-black {\n    background-color: var(--e-color-black);\n  }\n\n  .e\\:bg-black-100 {\n    background-color: var(--e-color-black-100);\n  }\n\n  .e\\:bg-black-400 {\n    background-color: var(--e-color-black-400);\n  }\n\n  .e\\:bg-blue-100 {\n    background-color: var(--e-color-blue-100);\n  }\n\n  .e\\:bg-blue-300 {\n    background-color: var(--e-color-blue-300);\n  }\n\n  .e\\:bg-blue-500 {\n    background-color: var(--e-color-blue-500);\n  }\n\n  .e\\:bg-blue-600 {\n    background-color: var(--e-color-blue-600);\n  }\n\n  .e\\:bg-gray-100 {\n    background-color: var(--e-color-gray-100);\n  }\n\n  .e\\:bg-gray-200 {\n    background-color: var(--e-color-gray-200);\n  }\n\n  .e\\:bg-green-50 {\n    background-color: var(--e-color-green-50);\n  }\n\n  .e\\:bg-green-100 {\n    background-color: var(--e-color-green-100);\n  }\n\n  .e\\:bg-green-400 {\n    background-color: var(--e-color-green-400);\n  }\n\n  .e\\:bg-green-500 {\n    background-color: var(--e-color-green-500);\n  }\n\n  .e\\:bg-purple-600 {\n    background-color: var(--e-color-purple-600);\n  }\n\n  .e\\:bg-red-50 {\n    background-color: var(--e-color-red-50);\n  }\n\n  .e\\:bg-red-100 {\n    background-color: var(--e-color-red-100);\n  }\n\n  .e\\:bg-red-200 {\n    background-color: var(--e-color-red-200);\n  }\n\n  .e\\:bg-red-300 {\n    background-color: var(--e-color-red-300);\n  }\n\n  .e\\:bg-red-400 {\n    background-color: var(--e-color-red-400);\n  }\n\n  .e\\:bg-red-500 {\n    background-color: var(--e-color-red-500);\n  }\n\n  .e\\:bg-white {\n    background-color: var(--e-color-white);\n  }\n\n  .e\\:p-2 {\n    padding: calc(var(--e-spacing) * 2);\n  }\n\n  .e\\:px-0\\.5 {\n    padding-inline: calc(var(--e-spacing) * .5);\n  }\n\n  .e\\:px-2 {\n    padding-inline: calc(var(--e-spacing) * 2);\n  }\n\n  .e\\:px-3 {\n    padding-inline: calc(var(--e-spacing) * 3);\n  }\n\n  .e\\:px-4 {\n    padding-inline: calc(var(--e-spacing) * 4);\n  }\n\n  .e\\:px-5 {\n    padding-inline: calc(var(--e-spacing) * 5);\n  }\n\n  .e\\:px-8 {\n    padding-inline: calc(var(--e-spacing) * 8);\n  }\n\n  .e\\:px-\\[11px\\] {\n    padding-inline: 11px;\n  }\n\n  .e\\:px-\\[15px\\] {\n    padding-inline: 15px;\n  }\n\n  .e\\:px-\\[20px\\] {\n    padding-inline: 20px;\n  }\n\n  .e\\:py-0\\.5 {\n    padding-block: calc(var(--e-spacing) * .5);\n  }\n\n  .e\\:py-1 {\n    padding-block: calc(var(--e-spacing) * 1);\n  }\n\n  .e\\:py-1\\.5 {\n    padding-block: calc(var(--e-spacing) * 1.5);\n  }\n\n  .e\\:py-2 {\n    padding-block: calc(var(--e-spacing) * 2);\n  }\n\n  .e\\:py-8 {\n    padding-block: calc(var(--e-spacing) * 8);\n  }\n\n  .e\\:py-\\[2px\\] {\n    padding-block: 2px;\n  }\n\n  .e\\:py-\\[5px\\] {\n    padding-block: 5px;\n  }\n\n  .e\\:py-\\[6px\\] {\n    padding-block: 6px;\n  }\n\n  .e\\:py-\\[7px\\] {\n    padding-block: 7px;\n  }\n\n  .e\\:py-\\[9px\\] {\n    padding-block: 9px;\n  }\n\n  .e\\:py-\\[10px\\] {\n    padding-block: 10px;\n  }\n\n  .e\\:py-\\[11px\\] {\n    padding-block: 11px;\n  }\n\n  .e\\:pt-1 {\n    padding-top: calc(var(--e-spacing) * 1);\n  }\n\n  .e\\:pt-6 {\n    padding-top: calc(var(--e-spacing) * 6);\n  }\n\n  .e\\:pt-7 {\n    padding-top: calc(var(--e-spacing) * 7);\n  }\n\n  .e\\:pr-1 {\n    padding-right: calc(var(--e-spacing) * 1);\n  }\n\n  .e\\:pr-3 {\n    padding-right: calc(var(--e-spacing) * 3);\n  }\n\n  .e\\:pb-7 {\n    padding-bottom: calc(var(--e-spacing) * 7);\n  }\n\n  .e\\:pl-4 {\n    padding-left: calc(var(--e-spacing) * 4);\n  }\n\n  .e\\:text-center {\n    text-align: center;\n  }\n\n  .e\\:text-left {\n    text-align: left;\n  }\n\n  .e\\:font-chakra {\n    font-family: var(--e-font-chakra);\n  }\n\n  .e\\:text-2xl {\n    font-size: var(--e-text-2xl);\n    line-height: var(--tw-leading, var(--e-text-2xl--line-height));\n  }\n\n  .e\\:text-base {\n    font-size: var(--e-text-base);\n    line-height: var(--tw-leading, var(--e-text-base--line-height));\n  }\n\n  .e\\:text-lg {\n    font-size: var(--e-text-lg);\n    line-height: var(--tw-leading, var(--e-text-lg--line-height));\n  }\n\n  .e\\:text-sm {\n    font-size: var(--e-text-sm);\n    line-height: var(--tw-leading, var(--e-text-sm--line-height));\n  }\n\n  .e\\:text-xs {\n    font-size: var(--e-text-xs);\n    line-height: var(--tw-leading, var(--e-text-xs--line-height));\n  }\n\n  .e\\:text-\\[8px\\] {\n    font-size: 8px;\n  }\n\n  .e\\:text-\\[9px\\] {\n    font-size: 9px;\n  }\n\n  .e\\:text-\\[10px\\] {\n    font-size: 10px;\n  }\n\n  .e\\:leading-none {\n    --tw-leading: 1;\n    line-height: 1;\n  }\n\n  .e\\:font-bold {\n    --tw-font-weight: var(--e-font-weight-bold);\n    font-weight: var(--e-font-weight-bold);\n  }\n\n  .e\\:font-medium {\n    --tw-font-weight: var(--e-font-weight-medium);\n    font-weight: var(--e-font-weight-medium);\n  }\n\n  .e\\:font-normal {\n    --tw-font-weight: var(--e-font-weight-normal);\n    font-weight: var(--e-font-weight-normal);\n  }\n\n  .e\\:font-semibold {\n    --tw-font-weight: var(--e-font-weight-semibold);\n    font-weight: var(--e-font-weight-semibold);\n  }\n\n  .e\\:whitespace-nowrap {\n    white-space: nowrap;\n  }\n\n  .e\\:text-black {\n    color: var(--e-color-black);\n  }\n\n  .e\\:text-black-200 {\n    color: var(--e-color-black-200);\n  }\n\n  .e\\:text-black-300 {\n    color: var(--e-color-black-300);\n  }\n\n  .e\\:text-gray-300 {\n    color: var(--e-color-gray-300);\n  }\n\n  .e\\:text-gray-400 {\n    color: var(--e-color-gray-400);\n  }\n\n  .e\\:text-gray-700 {\n    color: var(--e-color-gray-700);\n  }\n\n  .e\\:text-green-500 {\n    color: var(--e-color-green-500);\n  }\n\n  .e\\:text-purple-500 {\n    color: var(--e-color-purple-500);\n  }\n\n  .e\\:text-red-500 {\n    color: var(--e-color-red-500);\n  }\n\n  .e\\:text-red-600 {\n    color: var(--e-color-red-600);\n  }\n\n  .e\\:text-white {\n    color: var(--e-color-white);\n  }\n\n  .e\\:uppercase {\n    text-transform: uppercase;\n  }\n\n  .e\\:placeholder-gray-400::placeholder {\n    color: var(--e-color-gray-400);\n  }\n\n  .e\\:shadow-lg {\n    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .e\\:shadow-md {\n    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, #0000001a), 0 2px 4px -2px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .e\\:shadow-sm {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .e\\:transition {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;\n    transition-timing-function: var(--tw-ease, var(--e-default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--e-default-transition-duration));\n  }\n\n  .e\\:transition-all {\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--e-default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--e-default-transition-duration));\n  }\n\n  .e\\:transition-colors {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;\n    transition-timing-function: var(--tw-ease, var(--e-default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--e-default-transition-duration));\n  }\n\n  .e\\:transition-transform {\n    transition-property: transform, translate, scale, rotate;\n    transition-timing-function: var(--tw-ease, var(--e-default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--e-default-transition-duration));\n  }\n\n  .e\\:duration-200 {\n    --tw-duration: .2s;\n    transition-duration: .2s;\n  }\n\n  .e\\:ease-in {\n    --tw-ease: var(--e-ease-in);\n    transition-timing-function: var(--e-ease-in);\n  }\n\n  .e\\:outline-none {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n}\n.ebrdwhite {\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--e-color-white);\n}\n.ebrd-black-100 {\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--e-color-black-100);\n}\n.ebrd-black-200 {\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--e-color-black-200);\n}\n.ebrd-green-200 {\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--e-color-green-200);\n}\n.ebrd-red-200 {\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--e-color-red-200);\n}\n.ebrd-red-500 {\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--e-color-red-500);\n}\n.ebrd-green-400 {\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--e-color-green-400);\n}\n.ebrd-green-500 {\n  border-style: var(--tw-border-style);\n  border-width: 1px;\n  border-color: var(--e-color-green-500);\n}\n.ebggreen100 {\n  background-color: var(--e-color-green-100);\n}\n.ebggreen400 {\n  background-color: var(--e-color-green-400);\n}\n.ebggreen500 {\n  background-color: var(--e-color-green-500);\n}\n.ebgred100 {\n  background-color: var(--e-color-red-100);\n}\n.ebgred500 {\n  background-color: var(--e-color-red-500);\n}\n.epx2 {\n  padding-inline: calc(var(--e-spacing) * 2);\n}\n.epx4 {\n  padding-inline: calc(var(--e-spacing) * 4);\n}\n.epy1-5 {\n  padding-block: calc(var(--e-spacing) * 1.5);\n}\n.epy2px {\n  padding-block: 2px;\n}\n.epy4 {\n  padding-block: calc(var(--e-spacing) * 4);\n}\n@property --tw-rotate-x {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-rotate-y {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-rotate-z {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-skew-x {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-skew-y {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-divide-x-reverse {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-border-style {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-leading {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-font-weight {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-shadow-color {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-inset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-shadow-color {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-inset-shadow-alpha {\n  syntax: \"<percentage>\";\n  inherits: false;\n  initial-value: 100%;\n}\n@property --tw-ring-color {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-inset-ring-color {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-inset-ring-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-ring-inset {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-ring-offset-width {\n  syntax: \"<length>\";\n  inherits: false;\n  initial-value: 0;\n}\n@property --tw-ring-offset-color {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: #fff;\n}\n@property --tw-ring-offset-shadow {\n  syntax: \"*\";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n@property --tw-duration {\n  syntax: \"*\";\n  inherits: false\n}\n@property --tw-ease {\n  syntax: \"*\";\n  inherits: false\n}\n/*$vite$:1*/";document.head.appendChild(__vite_style__);

  false             &&(function polyfill() {
    const relList = document.createElement("link").relList;
    if (relList && relList.supports && relList.supports("modulepreload")) {
      return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
      processPreload(link);
    }
    new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type !== "childList") {
          continue;
        }
        for (const node of mutation.addedNodes) {
          if (node.tagName === "LINK" && node.rel === "modulepreload")
            processPreload(node);
        }
      }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(link) {
      const fetchOpts = {};
      if (link.integrity) fetchOpts.integrity = link.integrity;
      if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
      if (link.crossOrigin === "use-credentials")
        fetchOpts.credentials = "include";
      else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
      else fetchOpts.credentials = "same-origin";
      return fetchOpts;
    }
    function processPreload(link) {
      if (link.ep)
        return;
      link.ep = true;
      const fetchOpts = getFetchOpts(link);
      fetch(link.href, fetchOpts);
    }
  }());

  const IS_DEV = false;
  const equalFn = (a, b) => a === b;
  const $PROXY = Symbol("solid-proxy");
  const SUPPORTS_PROXY = typeof Proxy === "function";
  const $TRACK = Symbol("solid-track");
  const signalOptions = {
    equals: equalFn
  };
  let runEffects = runQueue;
  const STALE = 1;
  const PENDING = 2;
  const UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
  };
  var Owner = null;
  let Transition = null;
  let ExternalSourceConfig = null;
  let Listener = null;
  let Updates = null;
  let Effects = null;
  let ExecCount = 0;
  function createRoot(fn, detachedOwner) {
    const listener = Listener,
      owner = Owner,
      unowned = fn.length === 0,
      current = detachedOwner === undefined ? owner : detachedOwner,
      root = unowned ? UNOWNED : {
        owned: null,
        cleanups: null,
        context: current ? current.context : null,
        owner: current
      },
      updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
    Owner = root;
    Listener = null;
    try {
      return runUpdates(updateFn, true);
    } finally {
      Listener = listener;
      Owner = owner;
    }
  }
  function createSignal(value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const s = {
      value,
      observers: null,
      observerSlots: null,
      comparator: options.equals || undefined
    };
    const setter = value => {
      if (typeof value === "function") {
        value = value(s.value);
      }
      return writeSignal(s, value);
    };
    return [readSignal.bind(s), setter];
  }
  function createComputed(fn, value, options) {
    const c = createComputation(fn, value, true, STALE);
    updateComputation(c);
  }
  function createRenderEffect(fn, value, options) {
    const c = createComputation(fn, value, false, STALE);
    updateComputation(c);
  }
  function createEffect(fn, value, options) {
    runEffects = runUserEffects;
    const c = createComputation(fn, value, false, STALE);
    c.user = true;
    Effects ? Effects.push(c) : updateComputation(c);
  }
  function createMemo(fn, value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const c = createComputation(fn, value, true, 0);
    c.observers = null;
    c.observerSlots = null;
    c.comparator = options.equals || undefined;
    updateComputation(c);
    return readSignal.bind(c);
  }
  function batch(fn) {
    return runUpdates(fn, false);
  }
  function untrack(fn) {
    if (Listener === null) return fn();
    const listener = Listener;
    Listener = null;
    try {
      if (ExternalSourceConfig) ;
      return fn();
    } finally {
      Listener = listener;
    }
  }
  function on(deps, fn, options) {
    const isArray = Array.isArray(deps);
    let prevInput;
    let defer = options && options.defer;
    return prevValue => {
      let input;
      if (isArray) {
        input = Array(deps.length);
        for (let i = 0; i < deps.length; i++) input[i] = deps[i]();
      } else input = deps();
      if (defer) {
        defer = false;
        return prevValue;
      }
      const result = untrack(() => fn(input, prevInput, prevValue));
      prevInput = input;
      return result;
    };
  }
  function onMount(fn) {
    createEffect(() => untrack(fn));
  }
  function onCleanup(fn) {
    if (Owner === null) ;else if (Owner.cleanups === null) Owner.cleanups = [fn];else Owner.cleanups.push(fn);
    return fn;
  }
  function getListener() {
    return Listener;
  }
  function createContext(defaultValue, options) {
    const id = Symbol("context");
    return {
      id,
      Provider: createProvider(id),
      defaultValue
    };
  }
  function useContext(context) {
    let value;
    return Owner && Owner.context && (value = Owner.context[context.id]) !== undefined ? value : context.defaultValue;
  }
  function children(fn) {
    const children = createMemo(fn);
    const memo = createMemo(() => resolveChildren(children()));
    memo.toArray = () => {
      const c = memo();
      return Array.isArray(c) ? c : c != null ? [c] : [];
    };
    return memo;
  }
  function readSignal() {
    if (this.sources && (this.state)) {
      if ((this.state) === STALE) updateComputation(this);else {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(this), false);
        Updates = updates;
      }
    }
    if (Listener) {
      const sSlot = this.observers ? this.observers.length : 0;
      if (!Listener.sources) {
        Listener.sources = [this];
        Listener.sourceSlots = [sSlot];
      } else {
        Listener.sources.push(this);
        Listener.sourceSlots.push(sSlot);
      }
      if (!this.observers) {
        this.observers = [Listener];
        this.observerSlots = [Listener.sources.length - 1];
      } else {
        this.observers.push(Listener);
        this.observerSlots.push(Listener.sources.length - 1);
      }
    }
    return this.value;
  }
  function writeSignal(node, value, isComp) {
    let current = node.value;
    if (!node.comparator || !node.comparator(current, value)) {
      node.value = value;
      if (node.observers && node.observers.length) {
        runUpdates(() => {
          for (let i = 0; i < node.observers.length; i += 1) {
            const o = node.observers[i];
            const TransitionRunning = Transition && Transition.running;
            if (TransitionRunning && Transition.disposed.has(o)) ;
            if (TransitionRunning ? !o.tState : !o.state) {
              if (o.pure) Updates.push(o);else Effects.push(o);
              if (o.observers) markDownstream(o);
            }
            if (!TransitionRunning) o.state = STALE;
          }
          if (Updates.length > 10e5) {
            Updates = [];
            if (IS_DEV) ;
            throw new Error();
          }
        }, false);
      }
    }
    return value;
  }
  function updateComputation(node) {
    if (!node.fn) return;
    cleanNode(node);
    const time = ExecCount;
    runComputation(node, node.value, time);
  }
  function runComputation(node, value, time) {
    let nextValue;
    const owner = Owner,
      listener = Listener;
    Listener = Owner = node;
    try {
      nextValue = node.fn(value);
    } catch (err) {
      if (node.pure) {
        {
          node.state = STALE;
          node.owned && node.owned.forEach(cleanNode);
          node.owned = null;
        }
      }
      node.updatedAt = time + 1;
      return handleError(err);
    } finally {
      Listener = listener;
      Owner = owner;
    }
    if (!node.updatedAt || node.updatedAt <= time) {
      if (node.updatedAt != null && "observers" in node) {
        writeSignal(node, nextValue);
      } else node.value = nextValue;
      node.updatedAt = time;
    }
  }
  function createComputation(fn, init, pure, state = STALE, options) {
    const c = {
      fn,
      state: state,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: init,
      owner: Owner,
      context: Owner ? Owner.context : null,
      pure
    };
    if (Owner === null) ;else if (Owner !== UNOWNED) {
      {
        if (!Owner.owned) Owner.owned = [c];else Owner.owned.push(c);
      }
    }
    return c;
  }
  function runTop(node) {
    if ((node.state) === 0) return;
    if ((node.state) === PENDING) return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
    const ancestors = [node];
    while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
      if (node.state) ancestors.push(node);
    }
    for (let i = ancestors.length - 1; i >= 0; i--) {
      node = ancestors[i];
      if ((node.state) === STALE) {
        updateComputation(node);
      } else if ((node.state) === PENDING) {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(node, ancestors[0]), false);
        Updates = updates;
      }
    }
  }
  function runUpdates(fn, init) {
    if (Updates) return fn();
    let wait = false;
    if (!init) Updates = [];
    if (Effects) wait = true;else Effects = [];
    ExecCount++;
    try {
      const res = fn();
      completeUpdates(wait);
      return res;
    } catch (err) {
      if (!wait) Effects = null;
      Updates = null;
      handleError(err);
    }
  }
  function completeUpdates(wait) {
    if (Updates) {
      runQueue(Updates);
      Updates = null;
    }
    if (wait) return;
    const e = Effects;
    Effects = null;
    if (e.length) runUpdates(() => runEffects(e), false);
  }
  function runQueue(queue) {
    for (let i = 0; i < queue.length; i++) runTop(queue[i]);
  }
  function runUserEffects(queue) {
    let i,
      userLength = 0;
    for (i = 0; i < queue.length; i++) {
      const e = queue[i];
      if (!e.user) runTop(e);else queue[userLength++] = e;
    }
    for (i = 0; i < userLength; i++) runTop(queue[i]);
  }
  function lookUpstream(node, ignore) {
    node.state = 0;
    for (let i = 0; i < node.sources.length; i += 1) {
      const source = node.sources[i];
      if (source.sources) {
        const state = source.state;
        if (state === STALE) {
          if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
        } else if (state === PENDING) lookUpstream(source, ignore);
      }
    }
  }
  function markDownstream(node) {
    for (let i = 0; i < node.observers.length; i += 1) {
      const o = node.observers[i];
      if (!o.state) {
        o.state = PENDING;
        if (o.pure) Updates.push(o);else Effects.push(o);
        o.observers && markDownstream(o);
      }
    }
  }
  function cleanNode(node) {
    let i;
    if (node.sources) {
      while (node.sources.length) {
        const source = node.sources.pop(),
          index = node.sourceSlots.pop(),
          obs = source.observers;
        if (obs && obs.length) {
          const n = obs.pop(),
            s = source.observerSlots.pop();
          if (index < obs.length) {
            n.sourceSlots[s] = index;
            obs[index] = n;
            source.observerSlots[index] = s;
          }
        }
      }
    }
    if (node.tOwned) {
      for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
      delete node.tOwned;
    }
    if (node.owned) {
      for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
      node.owned = null;
    }
    if (node.cleanups) {
      for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
      node.cleanups = null;
    }
    node.state = 0;
  }
  function castError(err) {
    if (err instanceof Error) return err;
    return new Error(typeof err === "string" ? err : "Unknown error", {
      cause: err
    });
  }
  function handleError(err, owner = Owner) {
    const error = castError(err);
    throw error;
  }
  function resolveChildren(children) {
    if (typeof children === "function" && !children.length) return resolveChildren(children());
    if (Array.isArray(children)) {
      const results = [];
      for (let i = 0; i < children.length; i++) {
        const result = resolveChildren(children[i]);
        Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
      }
      return results;
    }
    return children;
  }
  function createProvider(id, options) {
    return function provider(props) {
      let res;
      createRenderEffect(() => res = untrack(() => {
        Owner.context = {
          ...Owner.context,
          [id]: props.value
        };
        return children(() => props.children);
      }), undefined);
      return res;
    };
  }

  const FALLBACK = Symbol("fallback");
  function dispose(d) {
    for (let i = 0; i < d.length; i++) d[i]();
  }
  function mapArray(list, mapFn, options = {}) {
    let items = [],
      mapped = [],
      disposers = [],
      len = 0,
      indexes = mapFn.length > 1 ? [] : null;
    onCleanup(() => dispose(disposers));
    return () => {
      let newItems = list() || [],
        newLen = newItems.length,
        i,
        j;
      newItems[$TRACK];
      return untrack(() => {
        let newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
        if (newLen === 0) {
          if (len !== 0) {
            dispose(disposers);
            disposers = [];
            items = [];
            mapped = [];
            len = 0;
            indexes && (indexes = []);
          }
          if (options.fallback) {
            items = [FALLBACK];
            mapped[0] = createRoot(disposer => {
              disposers[0] = disposer;
              return options.fallback();
            });
            len = 1;
          }
        }
        else if (len === 0) {
          mapped = new Array(newLen);
          for (j = 0; j < newLen; j++) {
            items[j] = newItems[j];
            mapped[j] = createRoot(mapper);
          }
          len = newLen;
        } else {
          temp = new Array(newLen);
          tempdisposers = new Array(newLen);
          indexes && (tempIndexes = new Array(newLen));
          for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++);
          for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, newEnd--) {
            temp[newEnd] = mapped[end];
            tempdisposers[newEnd] = disposers[end];
            indexes && (tempIndexes[newEnd] = indexes[end]);
          }
          newIndices = new Map();
          newIndicesNext = new Array(newEnd + 1);
          for (j = newEnd; j >= start; j--) {
            item = newItems[j];
            i = newIndices.get(item);
            newIndicesNext[j] = i === undefined ? -1 : i;
            newIndices.set(item, j);
          }
          for (i = start; i <= end; i++) {
            item = items[i];
            j = newIndices.get(item);
            if (j !== undefined && j !== -1) {
              temp[j] = mapped[i];
              tempdisposers[j] = disposers[i];
              indexes && (tempIndexes[j] = indexes[i]);
              j = newIndicesNext[j];
              newIndices.set(item, j);
            } else disposers[i]();
          }
          for (j = start; j < newLen; j++) {
            if (j in temp) {
              mapped[j] = temp[j];
              disposers[j] = tempdisposers[j];
              if (indexes) {
                indexes[j] = tempIndexes[j];
                indexes[j](j);
              }
            } else mapped[j] = createRoot(mapper);
          }
          mapped = mapped.slice(0, len = newLen);
          items = newItems.slice(0);
        }
        return mapped;
      });
      function mapper(disposer) {
        disposers[j] = disposer;
        if (indexes) {
          const [s, set] = createSignal(j);
          indexes[j] = set;
          return mapFn(newItems[j], s);
        }
        return mapFn(newItems[j]);
      }
    };
  }
  function createComponent(Comp, props) {
    return untrack(() => Comp(props || {}));
  }
  function trueFn() {
    return true;
  }
  const propTraps = {
    get(_, property, receiver) {
      if (property === $PROXY) return receiver;
      return _.get(property);
    },
    has(_, property) {
      if (property === $PROXY) return true;
      return _.has(property);
    },
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor(_, property) {
      return {
        configurable: true,
        enumerable: true,
        get() {
          return _.get(property);
        },
        set: trueFn,
        deleteProperty: trueFn
      };
    },
    ownKeys(_) {
      return _.keys();
    }
  };
  function resolveSource(s) {
    return !(s = typeof s === "function" ? s() : s) ? {} : s;
  }
  function resolveSources() {
    for (let i = 0, length = this.length; i < length; ++i) {
      const v = this[i]();
      if (v !== undefined) return v;
    }
  }
  function mergeProps(...sources) {
    let proxy = false;
    for (let i = 0; i < sources.length; i++) {
      const s = sources[i];
      proxy = proxy || !!s && $PROXY in s;
      sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
    }
    if (SUPPORTS_PROXY && proxy) {
      return new Proxy({
        get(property) {
          for (let i = sources.length - 1; i >= 0; i--) {
            const v = resolveSource(sources[i])[property];
            if (v !== undefined) return v;
          }
        },
        has(property) {
          for (let i = sources.length - 1; i >= 0; i--) {
            if (property in resolveSource(sources[i])) return true;
          }
          return false;
        },
        keys() {
          const keys = [];
          for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(resolveSource(sources[i])));
          return [...new Set(keys)];
        }
      }, propTraps);
    }
    const sourcesMap = {};
    const defined = Object.create(null);
    for (let i = sources.length - 1; i >= 0; i--) {
      const source = sources[i];
      if (!source) continue;
      const sourceKeys = Object.getOwnPropertyNames(source);
      for (let i = sourceKeys.length - 1; i >= 0; i--) {
        const key = sourceKeys[i];
        if (key === "__proto__" || key === "constructor") continue;
        const desc = Object.getOwnPropertyDescriptor(source, key);
        if (!defined[key]) {
          defined[key] = desc.get ? {
            enumerable: true,
            configurable: true,
            get: resolveSources.bind(sourcesMap[key] = [desc.get.bind(source)])
          } : desc.value !== undefined ? desc : undefined;
        } else {
          const sources = sourcesMap[key];
          if (sources) {
            if (desc.get) sources.push(desc.get.bind(source));else if (desc.value !== undefined) sources.push(() => desc.value);
          }
        }
      }
    }
    const target = {};
    const definedKeys = Object.keys(defined);
    for (let i = definedKeys.length - 1; i >= 0; i--) {
      const key = definedKeys[i],
        desc = defined[key];
      if (desc && desc.get) Object.defineProperty(target, key, desc);else target[key] = desc ? desc.value : undefined;
    }
    return target;
  }
  function splitProps(props, ...keys) {
    if (SUPPORTS_PROXY && $PROXY in props) {
      const blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]);
      const res = keys.map(k => {
        return new Proxy({
          get(property) {
            return k.includes(property) ? props[property] : undefined;
          },
          has(property) {
            return k.includes(property) && property in props;
          },
          keys() {
            return k.filter(property => property in props);
          }
        }, propTraps);
      });
      res.push(new Proxy({
        get(property) {
          return blocked.has(property) ? undefined : props[property];
        },
        has(property) {
          return blocked.has(property) ? false : property in props;
        },
        keys() {
          return Object.keys(props).filter(k => !blocked.has(k));
        }
      }, propTraps));
      return res;
    }
    const otherObject = {};
    const objects = keys.map(() => ({}));
    for (const propName of Object.getOwnPropertyNames(props)) {
      const desc = Object.getOwnPropertyDescriptor(props, propName);
      const isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable;
      let blocked = false;
      let objectIndex = 0;
      for (const k of keys) {
        if (k.includes(propName)) {
          blocked = true;
          isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc);
        }
        ++objectIndex;
      }
      if (!blocked) {
        isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc);
      }
    }
    return [...objects, otherObject];
  }
  let counter = 0;
  function createUniqueId() {
    return `cl-${counter++}`;
  }

  const narrowedError = name => `Stale read from <${name}>.`;
  function For(props) {
    const fallback = "fallback" in props && {
      fallback: () => props.fallback
    };
    return createMemo(mapArray(() => props.each, props.children, fallback || undefined));
  }
  function Show(props) {
    const keyed = props.keyed;
    const conditionValue = createMemo(() => props.when, undefined, undefined);
    const condition = keyed ? conditionValue : createMemo(conditionValue, undefined, {
      equals: (a, b) => !a === !b
    });
    return createMemo(() => {
      const c = condition();
      if (c) {
        const child = props.children;
        const fn = typeof child === "function" && child.length > 0;
        return fn ? untrack(() => child(keyed ? c : () => {
          if (!untrack(condition)) throw narrowedError("Show");
          return conditionValue();
        })) : child;
      }
      return props.fallback;
    }, undefined, undefined);
  }

  const booleans = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"];
  const Properties = /*#__PURE__*/new Set(["className", "value", "readOnly", "noValidate", "formNoValidate", "isMap", "noModule", "playsInline", ...booleans]);
  const ChildProperties = /*#__PURE__*/new Set(["innerHTML", "textContent", "innerText", "children"]);
  const Aliases = /*#__PURE__*/Object.assign(Object.create(null), {
    className: "class",
    htmlFor: "for"
  });
  const PropAliases = /*#__PURE__*/Object.assign(Object.create(null), {
    class: "className",
    novalidate: {
      $: "noValidate",
      FORM: 1
    },
    formnovalidate: {
      $: "formNoValidate",
      BUTTON: 1,
      INPUT: 1
    },
    ismap: {
      $: "isMap",
      IMG: 1
    },
    nomodule: {
      $: "noModule",
      SCRIPT: 1
    },
    playsinline: {
      $: "playsInline",
      VIDEO: 1
    },
    readonly: {
      $: "readOnly",
      INPUT: 1,
      TEXTAREA: 1
    }
  });
  function getPropAlias(prop, tagName) {
    const a = PropAliases[prop];
    return typeof a === "object" ? a[tagName] ? a["$"] : undefined : a;
  }
  const DelegatedEvents = /*#__PURE__*/new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]);
  const SVGElements = /*#__PURE__*/new Set([
  "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect",
  "set", "stop",
  "svg", "switch", "symbol", "text", "textPath",
  "tref", "tspan", "use", "view", "vkern"]);
  const SVGNamespace = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace"
  };

  const memo = fn => createMemo(() => fn());

  function reconcileArrays(parentNode, a, b) {
    let bLength = b.length,
      aEnd = a.length,
      bEnd = bLength,
      aStart = 0,
      bStart = 0,
      after = a[aEnd - 1].nextSibling,
      map = null;
    while (aStart < aEnd || bStart < bEnd) {
      if (a[aStart] === b[bStart]) {
        aStart++;
        bStart++;
        continue;
      }
      while (a[aEnd - 1] === b[bEnd - 1]) {
        aEnd--;
        bEnd--;
      }
      if (aEnd === aStart) {
        const node = bEnd < bLength ? bStart ? b[bStart - 1].nextSibling : b[bEnd - bStart] : after;
        while (bStart < bEnd) parentNode.insertBefore(b[bStart++], node);
      } else if (bEnd === bStart) {
        while (aStart < aEnd) {
          if (!map || !map.has(a[aStart])) a[aStart].remove();
          aStart++;
        }
      } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
        const node = a[--aEnd].nextSibling;
        parentNode.insertBefore(b[bStart++], a[aStart++].nextSibling);
        parentNode.insertBefore(b[--bEnd], node);
        a[aEnd] = b[bEnd];
      } else {
        if (!map) {
          map = new Map();
          let i = bStart;
          while (i < bEnd) map.set(b[i], i++);
        }
        const index = map.get(a[aStart]);
        if (index != null) {
          if (bStart < index && index < bEnd) {
            let i = aStart,
              sequence = 1,
              t;
            while (++i < aEnd && i < bEnd) {
              if ((t = map.get(a[i])) == null || t !== index + sequence) break;
              sequence++;
            }
            if (sequence > index - bStart) {
              const node = a[aStart];
              while (bStart < index) parentNode.insertBefore(b[bStart++], node);
            } else parentNode.replaceChild(b[bStart++], a[aStart++]);
          } else aStart++;
        } else a[aStart++].remove();
      }
    }
  }

  const $$EVENTS = "_$DX_DELEGATE";
  function render(code, element, init, options = {}) {
    let disposer;
    createRoot(dispose => {
      disposer = dispose;
      element === document ? code() : insert(element, code(), element.firstChild ? null : undefined, init);
    }, options.owner);
    return () => {
      disposer();
      element.textContent = "";
    };
  }
  function template(html, isImportNode, isSVG, isMathML) {
    let node;
    const create = () => {
      const t = document.createElement("template");
      t.innerHTML = html;
      return t.content.firstChild;
    };
    const fn = () => (node || (node = create())).cloneNode(true);
    fn.cloneNode = fn;
    return fn;
  }
  function delegateEvents(eventNames, document = window.document) {
    const e = document[$$EVENTS] || (document[$$EVENTS] = new Set());
    for (let i = 0, l = eventNames.length; i < l; i++) {
      const name = eventNames[i];
      if (!e.has(name)) {
        e.add(name);
        document.addEventListener(name, eventHandler);
      }
    }
  }
  function setAttribute(node, name, value) {
    if (value == null) node.removeAttribute(name);else node.setAttribute(name, value);
  }
  function setAttributeNS(node, namespace, name, value) {
    if (value == null) node.removeAttributeNS(namespace, name);else node.setAttributeNS(namespace, name, value);
  }
  function setBoolAttribute(node, name, value) {
    value ? node.setAttribute(name, "") : node.removeAttribute(name);
  }
  function className(node, value) {
    if (value == null) node.removeAttribute("class");else node.className = value;
  }
  function addEventListener(node, name, handler, delegate) {
    if (delegate) {
      if (Array.isArray(handler)) {
        node[`$$${name}`] = handler[0];
        node[`$$${name}Data`] = handler[1];
      } else node[`$$${name}`] = handler;
    } else if (Array.isArray(handler)) {
      const handlerFn = handler[0];
      node.addEventListener(name, handler[0] = e => handlerFn.call(node, handler[1], e));
    } else node.addEventListener(name, handler, typeof handler !== "function" && handler);
  }
  function classList(node, value, prev = {}) {
    const classKeys = Object.keys(value || {}),
      prevKeys = Object.keys(prev);
    let i, len;
    for (i = 0, len = prevKeys.length; i < len; i++) {
      const key = prevKeys[i];
      if (!key || key === "undefined" || value[key]) continue;
      toggleClassKey(node, key, false);
      delete prev[key];
    }
    for (i = 0, len = classKeys.length; i < len; i++) {
      const key = classKeys[i],
        classValue = !!value[key];
      if (!key || key === "undefined" || prev[key] === classValue || !classValue) continue;
      toggleClassKey(node, key, true);
      prev[key] = classValue;
    }
    return prev;
  }
  function style(node, value, prev) {
    if (!value) return prev ? setAttribute(node, "style") : value;
    const nodeStyle = node.style;
    if (typeof value === "string") return nodeStyle.cssText = value;
    typeof prev === "string" && (nodeStyle.cssText = prev = undefined);
    prev || (prev = {});
    value || (value = {});
    let v, s;
    for (s in prev) {
      value[s] == null && nodeStyle.removeProperty(s);
      delete prev[s];
    }
    for (s in value) {
      v = value[s];
      if (v !== prev[s]) {
        nodeStyle.setProperty(s, v);
        prev[s] = v;
      }
    }
    return prev;
  }
  function spread(node, props = {}, isSVG, skipChildren) {
    const prevProps = {};
    if (!skipChildren) {
      createRenderEffect(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
    }
    createRenderEffect(() => typeof props.ref === "function" && use(props.ref, node));
    createRenderEffect(() => assign(node, props, isSVG, true, prevProps, true));
    return prevProps;
  }
  function use(fn, element, arg) {
    return untrack(() => fn(element, arg));
  }
  function insert(parent, accessor, marker, initial) {
    if (marker !== undefined && !initial) initial = [];
    if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
    createRenderEffect(current => insertExpression(parent, accessor(), current, marker), initial);
  }
  function assign(node, props, isSVG, skipChildren, prevProps = {}, skipRef = false) {
    props || (props = {});
    for (const prop in prevProps) {
      if (!(prop in props)) {
        if (prop === "children") continue;
        prevProps[prop] = assignProp(node, prop, null, prevProps[prop], isSVG, skipRef, props);
      }
    }
    for (const prop in props) {
      if (prop === "children") {
        continue;
      }
      const value = props[prop];
      prevProps[prop] = assignProp(node, prop, value, prevProps[prop], isSVG, skipRef, props);
    }
  }
  function toPropertyName(name) {
    return name.toLowerCase().replace(/-([a-z])/g, (_, w) => w.toUpperCase());
  }
  function toggleClassKey(node, key, value) {
    const classNames = key.trim().split(/\s+/);
    for (let i = 0, nameLen = classNames.length; i < nameLen; i++) node.classList.toggle(classNames[i], value);
  }
  function assignProp(node, prop, value, prev, isSVG, skipRef, props) {
    let isCE, isProp, isChildProp, propAlias, forceProp;
    if (prop === "style") return style(node, value, prev);
    if (prop === "classList") return classList(node, value, prev);
    if (value === prev) return prev;
    if (prop === "ref") {
      if (!skipRef) value(node);
    } else if (prop.slice(0, 3) === "on:") {
      const e = prop.slice(3);
      prev && node.removeEventListener(e, prev, typeof prev !== "function" && prev);
      value && node.addEventListener(e, value, typeof value !== "function" && value);
    } else if (prop.slice(0, 10) === "oncapture:") {
      const e = prop.slice(10);
      prev && node.removeEventListener(e, prev, true);
      value && node.addEventListener(e, value, true);
    } else if (prop.slice(0, 2) === "on") {
      const name = prop.slice(2).toLowerCase();
      const delegate = DelegatedEvents.has(name);
      if (!delegate && prev) {
        const h = Array.isArray(prev) ? prev[0] : prev;
        node.removeEventListener(name, h);
      }
      if (delegate || value) {
        addEventListener(node, name, value, delegate);
        delegate && delegateEvents([name]);
      }
    } else if (prop.slice(0, 5) === "attr:") {
      setAttribute(node, prop.slice(5), value);
    } else if (prop.slice(0, 5) === "bool:") {
      setBoolAttribute(node, prop.slice(5), value);
    } else if ((forceProp = prop.slice(0, 5) === "prop:") || (isChildProp = ChildProperties.has(prop)) || !isSVG && ((propAlias = getPropAlias(prop, node.tagName)) || (isProp = Properties.has(prop))) || (isCE = node.nodeName.includes("-") || "is" in props)) {
      if (forceProp) {
        prop = prop.slice(5);
        isProp = true;
      }
      if (prop === "class" || prop === "className") className(node, value);else if (isCE && !isProp && !isChildProp) node[toPropertyName(prop)] = value;else node[propAlias || prop] = value;
    } else {
      const ns = isSVG && prop.indexOf(":") > -1 && SVGNamespace[prop.split(":")[0]];
      if (ns) setAttributeNS(node, ns, prop, value);else setAttribute(node, Aliases[prop] || prop, value);
    }
    return value;
  }
  function eventHandler(e) {
    let node = e.target;
    const key = `$$${e.type}`;
    const oriTarget = e.target;
    const oriCurrentTarget = e.currentTarget;
    const retarget = value => Object.defineProperty(e, "target", {
      configurable: true,
      value
    });
    const handleNode = () => {
      const handler = node[key];
      if (handler && !node.disabled) {
        const data = node[`${key}Data`];
        data !== undefined ? handler.call(node, data, e) : handler.call(node, e);
        if (e.cancelBubble) return;
      }
      node.host && typeof node.host !== "string" && !node.host._$host && node.contains(e.target) && retarget(node.host);
      return true;
    };
    const walkUpTree = () => {
      while (handleNode() && (node = node._$host || node.parentNode || node.host));
    };
    Object.defineProperty(e, "currentTarget", {
      configurable: true,
      get() {
        return node || document;
      }
    });
    if (e.composedPath) {
      const path = e.composedPath();
      retarget(path[0]);
      for (let i = 0; i < path.length - 2; i++) {
        node = path[i];
        if (!handleNode()) break;
        if (node._$host) {
          node = node._$host;
          walkUpTree();
          break;
        }
        if (node.parentNode === oriCurrentTarget) {
          break;
        }
      }
    }
    else walkUpTree();
    retarget(oriTarget);
  }
  function insertExpression(parent, value, current, marker, unwrapArray) {
    while (typeof current === "function") current = current();
    if (value === current) return current;
    const t = typeof value,
      multi = marker !== undefined;
    parent = multi && current[0] && current[0].parentNode || parent;
    if (t === "string" || t === "number") {
      if (t === "number") {
        value = value.toString();
        if (value === current) return current;
      }
      if (multi) {
        let node = current[0];
        if (node && node.nodeType === 3) {
          node.data !== value && (node.data = value);
        } else node = document.createTextNode(value);
        current = cleanChildren(parent, current, marker, node);
      } else {
        if (current !== "" && typeof current === "string") {
          current = parent.firstChild.data = value;
        } else current = parent.textContent = value;
      }
    } else if (value == null || t === "boolean") {
      current = cleanChildren(parent, current, marker);
    } else if (t === "function") {
      createRenderEffect(() => {
        let v = value();
        while (typeof v === "function") v = v();
        current = insertExpression(parent, v, current, marker);
      });
      return () => current;
    } else if (Array.isArray(value)) {
      const array = [];
      const currentArray = current && Array.isArray(current);
      if (normalizeIncomingArray(array, value, current, unwrapArray)) {
        createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
        return () => current;
      }
      if (array.length === 0) {
        current = cleanChildren(parent, current, marker);
        if (multi) return current;
      } else if (currentArray) {
        if (current.length === 0) {
          appendNodes(parent, array, marker);
        } else reconcileArrays(parent, current, array);
      } else {
        current && cleanChildren(parent);
        appendNodes(parent, array);
      }
      current = array;
    } else if (value.nodeType) {
      if (Array.isArray(current)) {
        if (multi) return current = cleanChildren(parent, current, marker, value);
        cleanChildren(parent, current, null, value);
      } else if (current == null || current === "" || !parent.firstChild) {
        parent.appendChild(value);
      } else parent.replaceChild(value, parent.firstChild);
      current = value;
    } else ;
    return current;
  }
  function normalizeIncomingArray(normalized, array, current, unwrap) {
    let dynamic = false;
    for (let i = 0, len = array.length; i < len; i++) {
      let item = array[i],
        prev = current && current[normalized.length],
        t;
      if (item == null || item === true || item === false) ; else if ((t = typeof item) === "object" && item.nodeType) {
        normalized.push(item);
      } else if (Array.isArray(item)) {
        dynamic = normalizeIncomingArray(normalized, item, prev) || dynamic;
      } else if (t === "function") {
        if (unwrap) {
          while (typeof item === "function") item = item();
          dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [item], Array.isArray(prev) ? prev : [prev]) || dynamic;
        } else {
          normalized.push(item);
          dynamic = true;
        }
      } else {
        const value = String(item);
        if (prev && prev.nodeType === 3 && prev.data === value) normalized.push(prev);else normalized.push(document.createTextNode(value));
      }
    }
    return dynamic;
  }
  function appendNodes(parent, array, marker = null) {
    for (let i = 0, len = array.length; i < len; i++) parent.insertBefore(array[i], marker);
  }
  function cleanChildren(parent, current, marker, replacement) {
    if (marker === undefined) return parent.textContent = "";
    const node = replacement || document.createTextNode("");
    if (current.length) {
      let inserted = false;
      for (let i = current.length - 1; i >= 0; i--) {
        const el = current[i];
        if (node !== el) {
          const isParent = el.parentNode === parent;
          if (!inserted && !i) isParent ? parent.replaceChild(node, el) : parent.insertBefore(node, marker);else isParent && el.remove();
        } else inserted = true;
      }
    } else parent.insertBefore(node, marker);
    return [node];
  }
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  function createElement(tagName, isSVG = false) {
    return isSVG ? document.createElementNS(SVG_NAMESPACE, tagName) : document.createElement(tagName);
  }
  function createDynamic(component, props) {
    const cached = createMemo(component);
    return createMemo(() => {
      const component = cached();
      switch (typeof component) {
        case "function":
          return untrack(() => component(props));
        case "string":
          const isSvg = SVGElements.has(component);
          const el = createElement(component, isSvg);
          spread(el, props, isSvg);
          return el;
      }
    });
  }
  function Dynamic(props) {
    const [, others] = splitProps(props, ["component"]);
    return createDynamic(() => props.component, others);
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var events = {exports: {}};

  var hasRequiredEvents;

  function requireEvents () {
  	if (hasRequiredEvents) return events.exports;
  	hasRequiredEvents = 1;

  	var R = typeof Reflect === 'object' ? Reflect : null;
  	var ReflectApply = R && typeof R.apply === 'function'
  	  ? R.apply
  	  : function ReflectApply(target, receiver, args) {
  	    return Function.prototype.apply.call(target, receiver, args);
  	  };

  	var ReflectOwnKeys;
  	if (R && typeof R.ownKeys === 'function') {
  	  ReflectOwnKeys = R.ownKeys;
  	} else if (Object.getOwnPropertySymbols) {
  	  ReflectOwnKeys = function ReflectOwnKeys(target) {
  	    return Object.getOwnPropertyNames(target)
  	      .concat(Object.getOwnPropertySymbols(target));
  	  };
  	} else {
  	  ReflectOwnKeys = function ReflectOwnKeys(target) {
  	    return Object.getOwnPropertyNames(target);
  	  };
  	}

  	function ProcessEmitWarning(warning) {
  	  if (console && console.warn) console.warn(warning);
  	}

  	var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  	  return value !== value;
  	};

  	function EventEmitter() {
  	  EventEmitter.init.call(this);
  	}
  	events.exports = EventEmitter;
  	events.exports.once = once;

  	// Backwards-compat with node 0.10.x
  	EventEmitter.EventEmitter = EventEmitter;

  	EventEmitter.prototype._events = undefined;
  	EventEmitter.prototype._eventsCount = 0;
  	EventEmitter.prototype._maxListeners = undefined;

  	// By default EventEmitters will print a warning if more than 10 listeners are
  	// added to it. This is a useful default which helps finding memory leaks.
  	var defaultMaxListeners = 10;

  	function checkListener(listener) {
  	  if (typeof listener !== 'function') {
  	    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  	  }
  	}

  	Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  	  enumerable: true,
  	  get: function() {
  	    return defaultMaxListeners;
  	  },
  	  set: function(arg) {
  	    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
  	      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
  	    }
  	    defaultMaxListeners = arg;
  	  }
  	});

  	EventEmitter.init = function() {

  	  if (this._events === undefined ||
  	      this._events === Object.getPrototypeOf(this)._events) {
  	    this._events = Object.create(null);
  	    this._eventsCount = 0;
  	  }

  	  this._maxListeners = this._maxListeners || undefined;
  	};

  	// Obviously not all Emitters should be limited to 10. This function allows
  	// that to be increased. Set to zero for unlimited.
  	EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  	  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
  	    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  	  }
  	  this._maxListeners = n;
  	  return this;
  	};

  	function _getMaxListeners(that) {
  	  if (that._maxListeners === undefined)
  	    return EventEmitter.defaultMaxListeners;
  	  return that._maxListeners;
  	}

  	EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  	  return _getMaxListeners(this);
  	};

  	EventEmitter.prototype.emit = function emit(type) {
  	  var args = [];
  	  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  	  var doError = (type === 'error');

  	  var events = this._events;
  	  if (events !== undefined)
  	    doError = (doError && events.error === undefined);
  	  else if (!doError)
  	    return false;

  	  // If there is no 'error' event listener then throw.
  	  if (doError) {
  	    var er;
  	    if (args.length > 0)
  	      er = args[0];
  	    if (er instanceof Error) {
  	      // Note: The comments on the `throw` lines are intentional, they show
  	      // up in Node's output if this results in an unhandled exception.
  	      throw er; // Unhandled 'error' event
  	    }
  	    // At least give some kind of context to the user
  	    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
  	    err.context = er;
  	    throw err; // Unhandled 'error' event
  	  }

  	  var handler = events[type];

  	  if (handler === undefined)
  	    return false;

  	  if (typeof handler === 'function') {
  	    ReflectApply(handler, this, args);
  	  } else {
  	    var len = handler.length;
  	    var listeners = arrayClone(handler, len);
  	    for (var i = 0; i < len; ++i)
  	      ReflectApply(listeners[i], this, args);
  	  }

  	  return true;
  	};

  	function _addListener(target, type, listener, prepend) {
  	  var m;
  	  var events;
  	  var existing;

  	  checkListener(listener);

  	  events = target._events;
  	  if (events === undefined) {
  	    events = target._events = Object.create(null);
  	    target._eventsCount = 0;
  	  } else {
  	    // To avoid recursion in the case that type === "newListener"! Before
  	    // adding it to the listeners, first emit "newListener".
  	    if (events.newListener !== undefined) {
  	      target.emit('newListener', type,
  	                  listener.listener ? listener.listener : listener);

  	      // Re-assign `events` because a newListener handler could have caused the
  	      // this._events to be assigned to a new object
  	      events = target._events;
  	    }
  	    existing = events[type];
  	  }

  	  if (existing === undefined) {
  	    // Optimize the case of one listener. Don't need the extra array object.
  	    existing = events[type] = listener;
  	    ++target._eventsCount;
  	  } else {
  	    if (typeof existing === 'function') {
  	      // Adding the second element, need to change to array.
  	      existing = events[type] =
  	        prepend ? [listener, existing] : [existing, listener];
  	      // If we've already got an array, just append.
  	    } else if (prepend) {
  	      existing.unshift(listener);
  	    } else {
  	      existing.push(listener);
  	    }

  	    // Check for listener leak
  	    m = _getMaxListeners(target);
  	    if (m > 0 && existing.length > m && !existing.warned) {
  	      existing.warned = true;
  	      // No error code for this since it is a Warning
  	      // eslint-disable-next-line no-restricted-syntax
  	      var w = new Error('Possible EventEmitter memory leak detected. ' +
  	                          existing.length + ' ' + String(type) + ' listeners ' +
  	                          'added. Use emitter.setMaxListeners() to ' +
  	                          'increase limit');
  	      w.name = 'MaxListenersExceededWarning';
  	      w.emitter = target;
  	      w.type = type;
  	      w.count = existing.length;
  	      ProcessEmitWarning(w);
  	    }
  	  }

  	  return target;
  	}

  	EventEmitter.prototype.addListener = function addListener(type, listener) {
  	  return _addListener(this, type, listener, false);
  	};

  	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  	EventEmitter.prototype.prependListener =
  	    function prependListener(type, listener) {
  	      return _addListener(this, type, listener, true);
  	    };

  	function onceWrapper() {
  	  if (!this.fired) {
  	    this.target.removeListener(this.type, this.wrapFn);
  	    this.fired = true;
  	    if (arguments.length === 0)
  	      return this.listener.call(this.target);
  	    return this.listener.apply(this.target, arguments);
  	  }
  	}

  	function _onceWrap(target, type, listener) {
  	  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  	  var wrapped = onceWrapper.bind(state);
  	  wrapped.listener = listener;
  	  state.wrapFn = wrapped;
  	  return wrapped;
  	}

  	EventEmitter.prototype.once = function once(type, listener) {
  	  checkListener(listener);
  	  this.on(type, _onceWrap(this, type, listener));
  	  return this;
  	};

  	EventEmitter.prototype.prependOnceListener =
  	    function prependOnceListener(type, listener) {
  	      checkListener(listener);
  	      this.prependListener(type, _onceWrap(this, type, listener));
  	      return this;
  	    };

  	// Emits a 'removeListener' event if and only if the listener was removed.
  	EventEmitter.prototype.removeListener =
  	    function removeListener(type, listener) {
  	      var list, events, position, i, originalListener;

  	      checkListener(listener);

  	      events = this._events;
  	      if (events === undefined)
  	        return this;

  	      list = events[type];
  	      if (list === undefined)
  	        return this;

  	      if (list === listener || list.listener === listener) {
  	        if (--this._eventsCount === 0)
  	          this._events = Object.create(null);
  	        else {
  	          delete events[type];
  	          if (events.removeListener)
  	            this.emit('removeListener', type, list.listener || listener);
  	        }
  	      } else if (typeof list !== 'function') {
  	        position = -1;

  	        for (i = list.length - 1; i >= 0; i--) {
  	          if (list[i] === listener || list[i].listener === listener) {
  	            originalListener = list[i].listener;
  	            position = i;
  	            break;
  	          }
  	        }

  	        if (position < 0)
  	          return this;

  	        if (position === 0)
  	          list.shift();
  	        else {
  	          spliceOne(list, position);
  	        }

  	        if (list.length === 1)
  	          events[type] = list[0];

  	        if (events.removeListener !== undefined)
  	          this.emit('removeListener', type, originalListener || listener);
  	      }

  	      return this;
  	    };

  	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

  	EventEmitter.prototype.removeAllListeners =
  	    function removeAllListeners(type) {
  	      var listeners, events, i;

  	      events = this._events;
  	      if (events === undefined)
  	        return this;

  	      // not listening for removeListener, no need to emit
  	      if (events.removeListener === undefined) {
  	        if (arguments.length === 0) {
  	          this._events = Object.create(null);
  	          this._eventsCount = 0;
  	        } else if (events[type] !== undefined) {
  	          if (--this._eventsCount === 0)
  	            this._events = Object.create(null);
  	          else
  	            delete events[type];
  	        }
  	        return this;
  	      }

  	      // emit removeListener for all listeners on all events
  	      if (arguments.length === 0) {
  	        var keys = Object.keys(events);
  	        var key;
  	        for (i = 0; i < keys.length; ++i) {
  	          key = keys[i];
  	          if (key === 'removeListener') continue;
  	          this.removeAllListeners(key);
  	        }
  	        this.removeAllListeners('removeListener');
  	        this._events = Object.create(null);
  	        this._eventsCount = 0;
  	        return this;
  	      }

  	      listeners = events[type];

  	      if (typeof listeners === 'function') {
  	        this.removeListener(type, listeners);
  	      } else if (listeners !== undefined) {
  	        // LIFO order
  	        for (i = listeners.length - 1; i >= 0; i--) {
  	          this.removeListener(type, listeners[i]);
  	        }
  	      }

  	      return this;
  	    };

  	function _listeners(target, type, unwrap) {
  	  var events = target._events;

  	  if (events === undefined)
  	    return [];

  	  var evlistener = events[type];
  	  if (evlistener === undefined)
  	    return [];

  	  if (typeof evlistener === 'function')
  	    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  	  return unwrap ?
  	    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
  	}

  	EventEmitter.prototype.listeners = function listeners(type) {
  	  return _listeners(this, type, true);
  	};

  	EventEmitter.prototype.rawListeners = function rawListeners(type) {
  	  return _listeners(this, type, false);
  	};

  	EventEmitter.listenerCount = function(emitter, type) {
  	  if (typeof emitter.listenerCount === 'function') {
  	    return emitter.listenerCount(type);
  	  } else {
  	    return listenerCount.call(emitter, type);
  	  }
  	};

  	EventEmitter.prototype.listenerCount = listenerCount;
  	function listenerCount(type) {
  	  var events = this._events;

  	  if (events !== undefined) {
  	    var evlistener = events[type];

  	    if (typeof evlistener === 'function') {
  	      return 1;
  	    } else if (evlistener !== undefined) {
  	      return evlistener.length;
  	    }
  	  }

  	  return 0;
  	}

  	EventEmitter.prototype.eventNames = function eventNames() {
  	  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
  	};

  	function arrayClone(arr, n) {
  	  var copy = new Array(n);
  	  for (var i = 0; i < n; ++i)
  	    copy[i] = arr[i];
  	  return copy;
  	}

  	function spliceOne(list, index) {
  	  for (; index + 1 < list.length; index++)
  	    list[index] = list[index + 1];
  	  list.pop();
  	}

  	function unwrapListeners(arr) {
  	  var ret = new Array(arr.length);
  	  for (var i = 0; i < ret.length; ++i) {
  	    ret[i] = arr[i].listener || arr[i];
  	  }
  	  return ret;
  	}

  	function once(emitter, name) {
  	  return new Promise(function (resolve, reject) {
  	    function errorListener(err) {
  	      emitter.removeListener(name, resolver);
  	      reject(err);
  	    }

  	    function resolver() {
  	      if (typeof emitter.removeListener === 'function') {
  	        emitter.removeListener('error', errorListener);
  	      }
  	      resolve([].slice.call(arguments));
  	    }
  	    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
  	    if (name !== 'error') {
  	      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
  	    }
  	  });
  	}

  	function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  	  if (typeof emitter.on === 'function') {
  	    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  	  }
  	}

  	function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  	  if (typeof emitter.on === 'function') {
  	    if (flags.once) {
  	      emitter.once(name, listener);
  	    } else {
  	      emitter.on(name, listener);
  	    }
  	  } else if (typeof emitter.addEventListener === 'function') {
  	    // EventTarget does not have `error` event semantics like Node
  	    // EventEmitters, we do not listen for `error` events here.
  	    emitter.addEventListener(name, function wrapListener(arg) {
  	      // IE does not have builtin `{ once: true }` support so we
  	      // have to do it manually.
  	      if (flags.once) {
  	        emitter.removeEventListener(name, wrapListener);
  	      }
  	      listener(arg);
  	    });
  	  } else {
  	    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  	  }
  	}
  	return events.exports;
  }

  requireEvents();

  var CabalUserActivityStreamMessages = /* @__PURE__ */ ((CabalUserActivityStreamMessages2) => {
    CabalUserActivityStreamMessages2["userActivityConnected"] = "userActivityConnected";
    CabalUserActivityStreamMessages2["userActivityStreamMessage"] = "userActivityStreamMessage";
    CabalUserActivityStreamMessages2["userActivityPing"] = "userActivityPing";
    CabalUserActivityStreamMessages2["userActivityPong"] = "userActivityPong";
    CabalUserActivityStreamMessages2["userActivityError"] = "userActivityError";
    CabalUserActivityStreamMessages2["tradeStats"] = "tradeStats";
    CabalUserActivityStreamMessages2["txnCb"] = "txnCb";
    return CabalUserActivityStreamMessages2;
  })(CabalUserActivityStreamMessages || {});
  var CabalTradeStreamMessages = /* @__PURE__ */ ((CabalTradeStreamMessages2) => {
    CabalTradeStreamMessages2["tradeConnected"] = "tradeConnected";
    CabalTradeStreamMessages2["tradeDisconnected"] = "tradeDisconnected";
    CabalTradeStreamMessages2["tradeStreamMessage"] = "tradeStreamMessage";
    CabalTradeStreamMessages2["tradePing"] = "tradePing";
    CabalTradeStreamMessages2["tradePong"] = "tradePong";
    CabalTradeStreamMessages2["tradeError"] = "tradeError";
    CabalTradeStreamMessages2["tradeEvent"] = "tradeEvent";
    CabalTradeStreamMessages2["tokenStatus"] = "tokenStatus";
    return CabalTradeStreamMessages2;
  })(CabalTradeStreamMessages || {});

  var CabalMessageType = /* @__PURE__ */ ((CabalMessageType2) => {
    CabalMessageType2["CabalEvent"] = "CABAL_EVENT";
    return CabalMessageType2;
  })(CabalMessageType || {});
  var BackgroundMessages = /* @__PURE__ */ ((BackgroundMessages2) => {
    BackgroundMessages2["SET_STORAGE_TO_DEFAULT"] = "SET_STORAGE_TO_DEFAULT";
    BackgroundMessages2["GET_CONFIG_PROMISE"] = "GET_CONFIG_PROMISE";
    BackgroundMessages2["POPUP_OPEN"] = "POPUP_OPEN";
    BackgroundMessages2["INIT_CABAL"] = "INIT_CABAL";
    BackgroundMessages2["SUBSCRIBE_TOKEN"] = "SUBSCRIBE_TOKEN";
    BackgroundMessages2["SUBSCRIBE_TOKEN_PROMISE"] = "SUBSCRIBE_TOKEN_PROMISE";
    BackgroundMessages2["BUY_MARKET"] = "BUY_MARKET";
    BackgroundMessages2["SELL_MARKET"] = "SELL_MARKET";
    BackgroundMessages2["SET_APIKEY"] = "SET_APIKEY";
    BackgroundMessages2["SET_APIKEY_PROMISE"] = "SET_APIKEY_PROMISE";
    BackgroundMessages2["BUY_SELL_SETTINGS_CHANGE"] = "BUY_SELL_SETTINGS_CHANGE";
    return BackgroundMessages2;
  })(BackgroundMessages || {});
  var CabalCommonMessages = /* @__PURE__ */ ((CabalCommonMessages2) => {
    CabalCommonMessages2["readyStatus"] = "readyStatus";
    CabalCommonMessages2["configChanged"] = "configChanged";
    return CabalCommonMessages2;
  })(CabalCommonMessages || {});

  const $RAW = Symbol("store-raw"),
    $NODE = Symbol("store-node"),
    $HAS = Symbol("store-has"),
    $SELF = Symbol("store-self");
  function wrap$1(value) {
    let p = value[$PROXY];
    if (!p) {
      Object.defineProperty(value, $PROXY, {
        value: p = new Proxy(value, proxyTraps$1)
      });
      if (!Array.isArray(value)) {
        const keys = Object.keys(value),
          desc = Object.getOwnPropertyDescriptors(value);
        for (let i = 0, l = keys.length; i < l; i++) {
          const prop = keys[i];
          if (desc[prop].get) {
            Object.defineProperty(value, prop, {
              enumerable: desc[prop].enumerable,
              get: desc[prop].get.bind(p)
            });
          }
        }
      }
    }
    return p;
  }
  function isWrappable(obj) {
    let proto;
    return obj != null && typeof obj === "object" && (obj[$PROXY] || !(proto = Object.getPrototypeOf(obj)) || proto === Object.prototype || Array.isArray(obj));
  }
  function unwrap(item, set = new Set()) {
    let result, unwrapped, v, prop;
    if (result = item != null && item[$RAW]) return result;
    if (!isWrappable(item) || set.has(item)) return item;
    if (Array.isArray(item)) {
      if (Object.isFrozen(item)) item = item.slice(0);else set.add(item);
      for (let i = 0, l = item.length; i < l; i++) {
        v = item[i];
        if ((unwrapped = unwrap(v, set)) !== v) item[i] = unwrapped;
      }
    } else {
      if (Object.isFrozen(item)) item = Object.assign({}, item);else set.add(item);
      const keys = Object.keys(item),
        desc = Object.getOwnPropertyDescriptors(item);
      for (let i = 0, l = keys.length; i < l; i++) {
        prop = keys[i];
        if (desc[prop].get) continue;
        v = item[prop];
        if ((unwrapped = unwrap(v, set)) !== v) item[prop] = unwrapped;
      }
    }
    return item;
  }
  function getNodes(target, symbol) {
    let nodes = target[symbol];
    if (!nodes) Object.defineProperty(target, symbol, {
      value: nodes = Object.create(null)
    });
    return nodes;
  }
  function getNode(nodes, property, value) {
    if (nodes[property]) return nodes[property];
    const [s, set] = createSignal(value, {
      equals: false,
      internal: true
    });
    s.$ = set;
    return nodes[property] = s;
  }
  function proxyDescriptor$1(target, property) {
    const desc = Reflect.getOwnPropertyDescriptor(target, property);
    if (!desc || desc.get || !desc.configurable || property === $PROXY || property === $NODE) return desc;
    delete desc.value;
    delete desc.writable;
    desc.get = () => target[$PROXY][property];
    return desc;
  }
  function trackSelf(target) {
    getListener() && getNode(getNodes(target, $NODE), $SELF)();
  }
  function ownKeys(target) {
    trackSelf(target);
    return Reflect.ownKeys(target);
  }
  const proxyTraps$1 = {
    get(target, property, receiver) {
      if (property === $RAW) return target;
      if (property === $PROXY) return receiver;
      if (property === $TRACK) {
        trackSelf(target);
        return receiver;
      }
      const nodes = getNodes(target, $NODE);
      const tracked = nodes[property];
      let value = tracked ? tracked() : target[property];
      if (property === $NODE || property === $HAS || property === "__proto__") return value;
      if (!tracked) {
        const desc = Object.getOwnPropertyDescriptor(target, property);
        if (getListener() && (typeof value !== "function" || target.hasOwnProperty(property)) && !(desc && desc.get)) value = getNode(nodes, property, value)();
      }
      return isWrappable(value) ? wrap$1(value) : value;
    },
    has(target, property) {
      if (property === $RAW || property === $PROXY || property === $TRACK || property === $NODE || property === $HAS || property === "__proto__") return true;
      getListener() && getNode(getNodes(target, $HAS), property)();
      return property in target;
    },
    set() {
      return true;
    },
    deleteProperty() {
      return true;
    },
    ownKeys: ownKeys,
    getOwnPropertyDescriptor: proxyDescriptor$1
  };
  function setProperty(state, property, value, deleting = false) {
    if (!deleting && state[property] === value) return;
    const prev = state[property],
      len = state.length;
    if (value === undefined) {
      delete state[property];
      if (state[$HAS] && state[$HAS][property] && prev !== undefined) state[$HAS][property].$();
    } else {
      state[property] = value;
      if (state[$HAS] && state[$HAS][property] && prev === undefined) state[$HAS][property].$();
    }
    let nodes = getNodes(state, $NODE),
      node;
    if (node = getNode(nodes, property, prev)) node.$(() => value);
    if (Array.isArray(state) && state.length !== len) {
      for (let i = state.length; i < len; i++) (node = nodes[i]) && node.$();
      (node = getNode(nodes, "length", len)) && node.$(state.length);
    }
    (node = nodes[$SELF]) && node.$();
  }
  function mergeStoreNode(state, value) {
    const keys = Object.keys(value);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      setProperty(state, key, value[key]);
    }
  }
  function updateArray(current, next) {
    if (typeof next === "function") next = next(current);
    next = unwrap(next);
    if (Array.isArray(next)) {
      if (current === next) return;
      let i = 0,
        len = next.length;
      for (; i < len; i++) {
        const value = next[i];
        if (current[i] !== value) setProperty(current, i, value);
      }
      setProperty(current, "length", len);
    } else mergeStoreNode(current, next);
  }
  function updatePath(current, path, traversed = []) {
    let part,
      prev = current;
    if (path.length > 1) {
      part = path.shift();
      const partType = typeof part,
        isArray = Array.isArray(current);
      if (Array.isArray(part)) {
        for (let i = 0; i < part.length; i++) {
          updatePath(current, [part[i]].concat(path), traversed);
        }
        return;
      } else if (isArray && partType === "function") {
        for (let i = 0; i < current.length; i++) {
          if (part(current[i], i)) updatePath(current, [i].concat(path), traversed);
        }
        return;
      } else if (isArray && partType === "object") {
        const {
          from = 0,
          to = current.length - 1,
          by = 1
        } = part;
        for (let i = from; i <= to; i += by) {
          updatePath(current, [i].concat(path), traversed);
        }
        return;
      } else if (path.length > 1) {
        updatePath(current[part], path, [part].concat(traversed));
        return;
      }
      prev = current[part];
      traversed = [part].concat(traversed);
    }
    let value = path[0];
    if (typeof value === "function") {
      value = value(prev, traversed);
      if (value === prev) return;
    }
    if (part === undefined && value == undefined) return;
    value = unwrap(value);
    if (part === undefined || isWrappable(prev) && isWrappable(value) && !Array.isArray(value)) {
      mergeStoreNode(prev, value);
    } else setProperty(current, part, value);
  }
  function createStore(...[store, options]) {
    const unwrappedStore = unwrap(store || {});
    const isArray = Array.isArray(unwrappedStore);
    const wrappedStore = wrap$1(unwrappedStore);
    function setStore(...args) {
      batch(() => {
        isArray && args.length === 1 ? updateArray(unwrappedStore, args[0]) : updatePath(unwrappedStore, args);
      });
    }
    return [wrappedStore, setStore];
  }

  const initValue$9 = {
    logs: []
  };
  const [logStore, setLogStore] = createStore(initValue$9);
  const addLogRecord = (message) => setLogStore("logs", (prev) => [
    { type: message.eventName, event: message },
    ...prev
  ]);

  const initValue$8 = {
    status: void 0
  };
  const [cabalTradeStream, setCabalTradeStream] = createStore(initValue$8);

  const initValue$7 = {
    status: void 0
  };
  const [cabalUserActivity, setCabalUserActivity] = createStore(initValue$7);

  var TradeDir = /* @__PURE__ */ ((TradeDir2) => {
    TradeDir2["Buy"] = "Buy";
    TradeDir2["Sell"] = "Sell";
    return TradeDir2;
  })(TradeDir || {});
  ({
    calc: chrome.runtime.getURL("assets2/calc.svg")
  });
  const defaultBuyQuicks = [{
    value: "0.0026"
  }, {
    value: "1"
  }, {
    value: "2"
  }, {
    value: "5"
  }];
  const defaultSellQuicks = [{
    value: "10"
  }, {
    value: "25"
  }, {
    value: "40"
  }, {
    value: "75"
  }];

  const initValue$6 = {
    dir: TradeDir.Buy,
    // buy
    buyQuicks: defaultBuyQuicks,
    activeBuyQuickIndex: 0,
    solCount: null,
    buySellButtonLabel: "",
    disablebuySellButton: true,
    buyInputValue: null,
    // sell
    sellQuicks: defaultSellQuicks,
    activeSellQuickIndex: null,
    sellPercents: null,
    sellButtonLabel: "",
    disableSellButton: true,
    sellInputValue: null,
    // external
    tokenStatus: null,
    tradeStats: null,
    lastTradeEvent: null,
    //
    loading: true,
    // Trade Stats
    solBalanceLabel: "",
    labelBuyToken: "",
    labelSellToken: "",
    labelTokenBalance: ""
  };

  const selectBuyQuick = (quickItem) => {
    const activeBuyQuickIndex = tradeWidgetState.buyQuicks.findIndex(
      (item) => item.value === quickItem.value
    );
    setTradeWidgetState("activeBuyQuickIndex", activeBuyQuickIndex);
    setTradeWidgetState(
      "buyInputValue",
      tradeWidgetState.buyQuicks[activeBuyQuickIndex].value
    );
    const solCount = tradeWidgetState.buyQuicks[activeBuyQuickIndex].value;
    setTradeWidgetState("solCount", solCount);
  };

  const stringToFloat = (input) => {
    const num = parseFloat(input);
    return isNaN(num) ? null : num;
  };

  const buyMarket$1 = async () => {
    try {
      if (!tradeWidgetState.solCount) {
        return;
      }
      if (!tradeWidgetState.tokenStatus) {
        return;
      }
      const amount = stringToFloat(tradeWidgetState.solCount);
      const mintValue = tradeWidgetState.tokenStatus.mint;
      if (!amount || !mintValue) {
        return;
      }
      const result = await marketBuy({ amount, mint: mintValue });
      console.log("$$$#", result);
    } catch (error) {
      console.error(error);
    }
  };

  const onBuyInputChange = (value) => {
    if (typeof value !== "string") {
      setTradeWidgetState("buyInputValue", tradeWidgetState.buyInputValue);
    }
    const num = parseFloat(value);
    if (!isNaN(num) && num.toString() === value.trim()) {
      setTradeWidgetState("buyInputValue", value);
      setTradeWidgetState("solCount", String(value));
    } else {
      setTradeWidgetState("buyInputValue", tradeWidgetState.buyInputValue);
    }
  };

  const selectSellQuick = (quickItem) => {
    const activeSellQuickIndex = tradeWidgetState.sellQuicks.findIndex(
      (item) => item.value === quickItem.value
    );
    setTradeWidgetState("activeSellQuickIndex", activeSellQuickIndex);
    setTradeWidgetState(
      "sellInputValue",
      tradeWidgetState.sellQuicks[activeSellQuickIndex].value
    );
    const sellPercents = tradeWidgetState.sellQuicks[activeSellQuickIndex].value;
    setTradeWidgetState("sellPercents", sellPercents);
  };

  const sellMarket$1 = () => {
    try {
      if (!tradeWidgetState.sellPercents) {
        return;
      }
      if (!tradeWidgetState.tokenStatus) {
        return;
      }
      const amount = stringToFloat(tradeWidgetState.sellPercents);
      const mintValue = tradeWidgetState.tokenStatus.mint;
      if (!amount || !mintValue) {
        return;
      }
      const result = marketSell({ mint: mintValue, percents: amount });
      console.log("#$$$#", result);
    } catch (error) {
      console.error(error);
    }
  };

  const onSellInputChange = (value) => {
    if (typeof value !== "string") {
      setTradeWidgetState("sellInputValue", tradeWidgetState.sellInputValue);
    }
    const num = parseFloat(value);
    if (!isNaN(num) && num.toString() === value.trim()) {
      setTradeWidgetState("sellInputValue", value);
      setTradeWidgetState("sellPercents", String(value));
    } else {
      setTradeWidgetState("sellInputValue", tradeWidgetState.sellInputValue);
    }
  };

  const formatLamports = ({
    solBalance,
    tokenDecimals
  }) => Number(Number(solBalance) / Math.pow(10, tokenDecimals)).toFixed(2);

  const setToInit = () => {
    setTradeWidgetState({ ...initValue$6 });
  };

  const [tradeWidgetState, setTradeWidgetState] = createStore(initValue$6);
  createEffect(() => {
    if (!tradeWidgetState.tokenStatus) {
      return;
    }
    if (tradeWidgetState.activeBuyQuickIndex === null) {
      return;
    }
    setTradeWidgetState(
      "buySellButtonLabel",
      `${tradeWidgetState.dir} ${tradeWidgetState.solCount} SOL | ${tradeWidgetState.tokenStatus.ticker}`
    );
    const disablebuySellButton = false;
    setTradeWidgetState("disablebuySellButton", disablebuySellButton);
  });
  createEffect(() => {
    const activeBuyQuickIndex = tradeWidgetState.activeBuyQuickIndex;
    if (activeBuyQuickIndex === null) {
      return;
    }
    setTradeWidgetState(
      "buyInputValue",
      tradeWidgetState.buyQuicks[activeBuyQuickIndex].value
    );
    const solCount = tradeWidgetState.buyQuicks[activeBuyQuickIndex].value;
    setTradeWidgetState("solCount", solCount);
  });
  createEffect(() => {
    if (!tradeWidgetState.tokenStatus) {
      return;
    }
    if (tradeWidgetState.activeSellQuickIndex === null) {
      return;
    }
    setTradeWidgetState(
      "sellButtonLabel",
      `!${tradeWidgetState.dir} ${tradeWidgetState.sellPercents}% | ${tradeWidgetState.tokenStatus.ticker}`
    );
    const disableSellButton = false;
    setTradeWidgetState("disableSellButton", disableSellButton);
  });
  createEffect(() => {
    if (!tradeWidgetState.tradeStats) {
      return;
    }
    const solBalanceLabel = formatLamports({
      solBalance: tradeWidgetState.tradeStats.solBalance,
      tokenDecimals: 9
    });
    const tokenDecimals = tradeWidgetState.tradeStats.tokenDecimals;
    const labelBuyToken = formatLamports({
      solBalance: tradeWidgetState.tradeStats.buyBase,
      tokenDecimals
    });
    const labelSellToken = formatLamports({
      solBalance: tradeWidgetState.tradeStats.sellBase,
      tokenDecimals
    });
    const labelTokenBalance = formatLamports({
      solBalance: tradeWidgetState.tradeStats.tokenBalance,
      tokenDecimals
    });
    setTradeWidgetState("solBalanceLabel", solBalanceLabel);
    setTradeWidgetState("labelBuyToken", labelBuyToken);
    setTradeWidgetState("labelSellToken", labelSellToken);
    setTradeWidgetState("labelTokenBalance", labelTokenBalance);
  });
  const handlers = {
    selectBuyQuick,
    buyMarket: buyMarket$1,
    onBuyInputChange,
    selectSellQuick,
    sellMarket: sellMarket$1,
    onSellInputChange,
    setToInit
  };

  const initValue$5 = {
    tabMint: void 0,
    mint: void 0,
    isReady: false,
    url: "",
    shouldSetApiKey: false,
    apiKeyError: void 0,
    config: null,
    tokenStatus: null,
    tradeStats: null,
    lastTradeEvent: null
  };
  const [contentAppStore, setContentAppStore] = createStore(initValue$5);
  const cleanContentAppStore = () => setContentAppStore({ ...initValue$5 });

  const initValue$4 = {
    items: []
  };
  const [toastStore, setToastStore] = createStore(initValue$4);
  const addToast = (message) => setToastStore("items", (prev) => [
    { type: message.eventName, event: message },
    ...prev
  ]);

  const initValue$3 = {
    config: null
  };
  const [configStore, setConfigStore] = createStore(initValue$3);

  const sendMessage = ({
    payload,
    cb
  }) => {
    console.log("[send message]", payload);
    chrome.runtime.sendMessage(payload, cb);
  };

  const buyMarket = ({
    mint,
    amountSol,
    cb
  }) => {
    const payload = {
      type: BackgroundMessages.BUY_MARKET,
      data: { mint, amountSol }
    };
    sendMessage({ payload, cb });
  };

  const startListnenBackgroundMessages = (messageListener) => chrome.runtime.onMessage.addListener(messageListener);

  const sellMarket = ({
    mint,
    amountBps,
    cb
  }) => {
    const payload = {
      type: BackgroundMessages.SELL_MARKET,
      data: { mint, amountBps }
    };
    sendMessage({ payload, cb });
  };

  const cleanWidget = () => {
    setCabalTradeStream("status", void 0);
    setCabalUserActivity("status", void 0);
    handlers.setToInit();
    cleanContentAppStore();
    setLogStore("logs", []);
  };

  const popupOpen = () => {
    const payload = {
      type: BackgroundMessages.POPUP_OPEN
    };
    const cb = (response) => {
      console.log("### respose", response);
      setContentAppStore("isReady", response.isReady);
      setContentAppStore("shouldSetApiKey", response.shouldSetApiKey);
    };
    sendMessage({ payload, cb });
  };

  const metaToStores = (meta) => {
    setContentAppStore("isReady", meta.isReady);
    setContentAppStore("shouldSetApiKey", meta.shouldSetApiKey);
    setContentAppStore("config", meta.config);
    setConfigStore("config", meta.config);
  };
  const metaToStatus = (message) => {
    metaToStores(message.meta);
  };
  const handleUserActivityConnected = () => setCabalUserActivity("status", { isReady: true, count: "" });
  const handleUserActivityPong = (eventValue) => setCabalUserActivity("status", {
    isReady: eventValue.meta.isReady,
    count: eventValue.data.count
  });
  const handleUserActivityTradeStats = (event) => {
    console.log("!!!!!!!handleUserActivityTradeStats", event);
    setLogStore("logs", (prev) => [...prev, { type: "tokenTradeStats", event }]);
    setTradeWidgetState("tradeStats", event.data);
    setContentAppStore("tradeStats", event.data);
  };
  const handleUserActivityError = () => setCabalUserActivity("status", void 0);
  const handleTradeStreamConnected = () => setCabalTradeStream("status", { isReady: true, count: "" });
  const handleTradeStreamPong = (eventValue) => setCabalTradeStream("status", {
    isReady: eventValue.meta.isReady,
    count: eventValue.data.count
  });
  const handleTradeEvent = (event) => {
    setLogStore("logs", (prev) => [...prev, { type: "tradeEvent", event }]);
    setTradeWidgetState("lastTradeEvent", event.data);
    setContentAppStore("lastTradeEvent", event.data);
  };
  const handleTradeTokenStatus = (event) => {
    setLogStore("logs", (prev) => [...prev, { type: "tokenStatus", event }]);
    setTradeWidgetState("tokenStatus", event.data);
    setContentAppStore("tokenStatus", event.data);
  };
  const handleTradeError = () => setCabalTradeStream("status", void 0);
  const handleReadyStatus = (message) => {
    addLogRecord(message);
    const isReady = message.meta.isReady;
    const status = message.meta.isReady ? { isReady, count: String(Date.now()) } : void 0;
    setCabalUserActivity("status", status);
    setCabalTradeStream("status", status);
  };
  const handleUAtxCB = (message) => {
    addLogRecord(message);
    addToast(message);
  };
  const handleConfigChangedMessageFromBg = (message) => {
    metaToStores(message.meta);
  };
  const messageListener = (message, sender, sendResponse) => {
    if (![
      CabalUserActivityStreamMessages.userActivityPong,
      CabalTradeStreamMessages.tradePong
    ].includes(message?.eventName)) {
      console.log(`received message: name: ${message?.eventName}`, message);
    }
    const messageType = message?.type;
    if (messageType !== CabalMessageType.CabalEvent) {
      sendResponse({ ok: true });
      return;
    }
    const messageEventName = message?.eventName;
    metaToStatus(message);
    switch (messageEventName) {
      case CabalCommonMessages.readyStatus:
        console.log(`%%%% %%% ${CabalCommonMessages.readyStatus}`, message);
        handleReadyStatus(message);
        break;
      case CabalUserActivityStreamMessages.txnCb:
        console.log(`$$$ ${CabalCommonMessages.readyStatus}`, message);
        handleUAtxCB(message);
        break;
      case CabalUserActivityStreamMessages.userActivityConnected:
        handleUserActivityConnected();
        break;
      case CabalUserActivityStreamMessages.userActivityPong:
        handleUserActivityPong(message);
        break;
      case CabalUserActivityStreamMessages.tradeStats:
        handleUserActivityTradeStats(message);
        break;
      case CabalUserActivityStreamMessages.userActivityError:
        handleUserActivityError();
        break;
      // trade streams
      case CabalTradeStreamMessages.tradeConnected:
        handleTradeStreamConnected();
        break;
      case CabalTradeStreamMessages.tradePong:
        handleTradeStreamPong(message);
        break;
      case CabalTradeStreamMessages.tradeEvent:
        handleTradeEvent(message);
        break;
      case CabalTradeStreamMessages.tokenStatus:
        handleTradeTokenStatus(message);
        break;
      case CabalTradeStreamMessages.tradeError:
        handleTradeError();
        break;
      case CabalCommonMessages.configChanged:
        handleConfigChangedMessageFromBg(message);
        break;
      default:
        console.log(`unknown message: ${messageType}`);
    }
    sendResponse({ ok: true });
  };
  const marketBuy = async ({
    amount,
    mint
  }) => {
    buyMarket({
      mint,
      amountSol: amount,
      cb: (response) => {
        console.log("marketBuy", response);
      }
    });
  };
  const marketSell = async ({
    percents,
    mint
  }) => {
    sellMarket({
      mint,
      amountBps: percents,
      cb: (response) => {
        console.log("marketBuy", response);
      }
    });
  };
  const sendApiKey = (apiKey) => {
    const payload = {
      type: BackgroundMessages.SET_APIKEY,
      data: { apiKey }
    };
    if (!apiKey) {
      metaToStores({ isReady: false, shouldSetApiKey: true });
    }
    const cb = (response) => {
      console.log("res", response);
    };
    sendMessage({ payload, cb });
  };
  const sendApiKeyPromise = (apiKey) => {
    const payload = {
      type: BackgroundMessages.SET_APIKEY_PROMISE,
      data: { apiKey }
    };
    const cb = (response) => {
      console.log("res PROMISE", response);
      if (response?.meta) {
        metaToStores(response?.meta);
        if (response?.meta.error) {
          setContentAppStore("apiKeyError", response?.meta.error);
        }
      }
    };
    sendMessage({ payload, cb });
  };
  const getConfig = () => {
    const payload = {
      type: BackgroundMessages.GET_CONFIG_PROMISE
    };
    const cb = (response) => {
      console.log("config", response);
      setConfigStore("config", response.config);
    };
    sendMessage({ payload, cb });
  };
  const resetConfig = () => {
    const payload = {
      type: BackgroundMessages.SET_STORAGE_TO_DEFAULT
    };
    const cb = (response) => {
      console.log("resetConfig response", response);
    };
    sendMessage({ payload, cb });
  };
  const subscribeTokenPromise = ({ mint }) => {
    const payload = {
      type: BackgroundMessages.SUBSCRIBE_TOKEN_PROMISE,
      data: {
        mint
      }
    };
    const cb = (response) => {
      console.log("subscribeTokenPromise response", response);
    };
    sendMessage({ payload, cb });
  };
  const subscribeToken = ({ mint }) => {
    const payload = {
      type: BackgroundMessages.SUBSCRIBE_TOKEN,
      data: { mint }
    };
    const cb = (response) => {
      console.log(`[cabal-content]: response subscribe token`, response);
    };
    sendMessage({ payload, cb });
  };
  const registerTab = ({
    mint,
    locationHref
  }) => {
    const payload = {
      type: BackgroundMessages.INIT_CABAL,
      data: {
        url: locationHref,
        mint
      }
    };
    const cb = (response) => {
      console.log("[cabal-content][registerTab response]:", response);
      setContentAppStore("isReady", response.meta.isReady);
      setContentAppStore("config", response.meta.config);
    };
    sendMessage({ payload, cb });
  };
  const saveBuySellSettings = (value) => {
    const payload = {
      type: BackgroundMessages.BUY_SELL_SETTINGS_CHANGE,
      data: value
    };
    sendMessage({
      payload,
      cb: (response) => {
        console.log(`saveBuySellSettings response`, response);
      }
    });
  };
  function useStartCabalService() {
    return {
      saveBuySellSettings,
      subscribeTokenPromise,
      resetConfig,
      getConfig,
      sendApiKey,
      sendApiKeyPromise,
      popupOpen: popupOpen,
      registerTab,
      subscribeToken,
      marketBuy,
      marketSell,
      startListen: () => startListnenBackgroundMessages(messageListener),
      clean: () => chrome.runtime.onMessage.removeListener(messageListener),
      cleanWidget: cleanWidget
    };
  }

  const isNonNullable = (i) => i != null;
  const filterNonNullable = (arr) => arr.filter(isNonNullable);
  /**
   * Returns a function that will call all functions in the order they were chained with the same arguments.
   */
  function chain(callbacks) {
      return (...args) => {
          for (const callback of callbacks)
              callback && callback(...args);
      };
  }
  /**
   * Accesses the value of a MaybeAccessor
   * @example
   * ```ts
   * access("foo") // => "foo"
   * access(() => "foo") // => "foo"
   * ```
   */
  const access$1 = (v) => typeof v === "function" && !v.length ? v() : v;
  const asArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
  /** If value is a function – call it with a given arguments – otherwise get the value as is */
  function accessWith(valueOrFn, ...args) {
      return typeof valueOrFn === "function" ? valueOrFn(...args) : valueOrFn;
  }
  /**
   * Solid's `onCleanup` that doesn't warn in development if used outside of a component.
   */
  const tryOnCleanup = onCleanup;
  /**
   * Handle items removed and added to the array by diffing it by refference.
   *
   * @param current new array instance
   * @param prev previous array copy
   * @param handleAdded called once for every added item to array
   * @param handleRemoved called once for every removed from array
   */
  function handleDiffArray(current, prev, handleAdded, handleRemoved) {
      const currLength = current.length;
      const prevLength = prev.length;
      let i = 0;
      if (!prevLength) {
          for (; i < currLength; i++)
              handleAdded(current[i]);
          return;
      }
      if (!currLength) {
          for (; i < prevLength; i++)
              handleRemoved(prev[i]);
          return;
      }
      for (; i < prevLength; i++) {
          if (prev[i] !== current[i])
              break;
      }
      let prevEl;
      let currEl;
      prev = prev.slice(i);
      current = current.slice(i);
      for (prevEl of prev) {
          if (!current.includes(prevEl))
              handleRemoved(prevEl);
      }
      for (currEl of current) {
          if (!prev.includes(currEl))
              handleAdded(currEl);
      }
  }

  function makeEventListener(target, type, handler, options) {
      target.addEventListener(type, handler, options);
      return tryOnCleanup(target.removeEventListener.bind(target, type, handler, options));
  }
  function createEventListener(targets, type, handler, options) {
      const attachListeners = () => {
          asArray(access$1(targets)).forEach(el => {
              if (el)
                  asArray(access$1(type)).forEach(type => makeEventListener(el, type, handler, options));
          });
      };
      // if the target is an accessor the listeners will be added on the first effect (onMount)
      // so that when passed a jsx ref it will be availabe
      if (typeof targets === "function")
          createEffect(attachListeners);
      // if the target prop is NOT an accessor, the event listeners can be added right away
      else
          createRenderEffect(attachListeners);
  }
  // // /* TypeCheck */
  // const mouseHandler = (e: MouseEvent) => {};
  // const touchHandler = (e: TouchEvent) => {};
  // const el = document.createElement("div");
  // // dom events
  // createEventListener(window as Window | undefined, "mousemove", mouseHandler);
  // createEventListener(document, "touchstart", touchHandler);
  // createEventListener(el, "mousemove", mouseHandler);
  // createEventListener(() => el, "touchstart", touchHandler);
  // const mouseSignal = createEventSignal(window, "mousemove");
  // const touchSignal = createEventSignal(() => document, "touchstart");
  // // custom events
  // createEventListener<{ test: MouseEvent }>(window, "test", mouseHandler);
  // createEventListener<{ test: Event; custom: MouseEvent }, "custom">(
  //   () => el,
  //   "custom",
  //   mouseHandler
  // );
  // createEventListener<{ test: Event }>(new EventTarget(), "test", () => console.log("test"));
  // const testSignal = createEventSignal<{ test: MouseEvent }>(window, "test");
  // const customSignal = createEventSignal<{ test: Event; custom: MouseEvent }, "custom">(
  //   () => document,
  //   "custom"
  // );
  // // directive
  // eventListener(el, () => ["mousemove", mouseHandler, { passive: true }]);
  // eventListener(el, () => ["custom", e => {}]);

  const extractCSSregex = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
  /**
   * converts inline string styles to object form
   * @example
   * const styles = stringStyleToObject("margin: 24px; border: 1px solid #121212");
   * styles; // { margin: "24px", border: "1px solid #121212" }
   * */
  function stringStyleToObject(style) {
      const object = {};
      let match;
      while ((match = extractCSSregex.exec(style))) {
          object[match[1]] = match[2];
      }
      return object;
  }
  function combineStyle(a, b) {
      if (typeof a === "string") {
          if (typeof b === "string")
              return `${a};${b}`;
          a = stringStyleToObject(a);
      }
      else if (typeof b === "string") {
          b = stringStyleToObject(b);
      }
      return { ...a, ...b };
  }
  // type check
  // const com = combineProps(
  //   {
  //     onSomething: 123,
  //     onWheel: (e: WheelEvent) => 213,
  //     something: "foo",
  //     style: { margin: "24px" },
  //     once: true,
  //     onMount: (fn: VoidFunction) => undefined
  //   },
  //   {
  //     onSomething: [(n: number, s: string) => "fo", 123],
  //     once: "ovv"
  //   },
  //   {
  //     onWheel: false,
  //     onMount: (n: number) => void 0
  //   }
  // );
  // com.onSomething; // (s: string) => void;
  // com.once; // string;
  // com.onWheel; // false;
  // com.onMount; // ((fn: VoidFunction) => undefined) & ((n: number) => undefined);
  // com.something; // string;
  // com.style; // string | JSX.CSSProperties;

  /**
   * Utility for chaining multiple `ref` assignments with `props.ref` forwarding.
   * @param refs list of ref setters. Can be a `props.ref` prop for ref forwarding or a setter to a local variable (`el => ref = el`).
   * @example
   * ```tsx
   * interface ButtonProps {
   *    ref?: Ref<HTMLButtonElement>
   * }
   * function Button (props: ButtonProps) {
   *    let ref: HTMLButtonElement | undefined
   *    onMount(() => {
   *        // use the local ref
   *    })
   *    return <button ref={mergeRefs(props.ref, el => ref = el)} />
   * }
   *
   * // in consumer's component:
   * let ref: HTMLButtonElement | undefined
   * <Button ref={ref} />
   * ```
   */
  function mergeRefs(...refs) {
      return chain(refs);
  }

  // src/array.ts
  function addItemToArray(array, item, index = -1) {
    if (!(index in array)) {
      return [...array, item];
    }
    return [...array.slice(0, index), item, ...array.slice(index)];
  }

  // src/assertion.ts
  function isNumber(value) {
    return typeof value === "number";
  }
  function isString(value) {
    return Object.prototype.toString.call(value) === "[object String]";
  }
  function isFunction(value) {
    return typeof value === "function";
  }

  // src/create-generate-id.ts
  function createGenerateId(baseId) {
    return (suffix) => `${baseId()}-${suffix}`;
  }
  function getDocument(node) {
    return node ? node.ownerDocument || node : document;
  }

  // src/enums.ts
  var EventKey = /* @__PURE__ */ ((EventKey2) => {
    EventKey2["Escape"] = "Escape";
    EventKey2["Enter"] = "Enter";
    EventKey2["Tab"] = "Tab";
    EventKey2["Space"] = " ";
    EventKey2["ArrowDown"] = "ArrowDown";
    EventKey2["ArrowLeft"] = "ArrowLeft";
    EventKey2["ArrowRight"] = "ArrowRight";
    EventKey2["ArrowUp"] = "ArrowUp";
    EventKey2["End"] = "End";
    EventKey2["Home"] = "Home";
    EventKey2["PageDown"] = "PageDown";
    EventKey2["PageUp"] = "PageUp";
    return EventKey2;
  })(EventKey || {});

  // src/platform.ts
  function testUserAgent(re) {
    if (typeof window === "undefined" || window.navigator == null) {
      return false;
    }
    return (
      // @ts-ignore
      window.navigator.userAgentData?.brands.some(
        (brand) => re.test(brand.brand)
      ) || re.test(window.navigator.userAgent)
    );
  }
  function testPlatform(re) {
    return typeof window !== "undefined" && window.navigator != null ? re.test(
      // @ts-ignore
      window.navigator.userAgentData?.platform || window.navigator.platform
    ) : false;
  }
  function isMac() {
    return testPlatform(/^Mac/i);
  }
  function isIPhone() {
    return testPlatform(/^iPhone/i);
  }
  function isIPad() {
    return testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    isMac() && navigator.maxTouchPoints > 1;
  }
  function isIOS() {
    return isIPhone() || isIPad();
  }
  function isAppleDevice() {
    return isMac() || isIOS();
  }
  function isWebKit() {
    return testUserAgent(/AppleWebKit/i) && !isChrome();
  }
  function isChrome() {
    return testUserAgent(/Chrome/i);
  }

  // src/events.ts
  function callHandler(event, handler) {
    if (handler) {
      if (isFunction(handler)) {
        handler(event);
      } else {
        handler[0](handler[1], event);
      }
    }
    return event?.defaultPrevented;
  }
  function composeEventHandlers(handlers) {
    return (event) => {
      for (const handler of handlers) {
        callHandler(event, handler);
      }
    };
  }

  // src/focus-without-scrolling.ts
  function focusWithoutScrolling(element) {
    if (!element) {
      return;
    }
    if (supportsPreventScroll()) {
      element.focus({ preventScroll: true });
    } else {
      const scrollableElements = getScrollableElements(element);
      element.focus();
      restoreScrollPosition(scrollableElements);
    }
  }
  var supportsPreventScrollCached = null;
  function supportsPreventScroll() {
    if (supportsPreventScrollCached == null) {
      supportsPreventScrollCached = false;
      try {
        const focusElem = document.createElement("div");
        focusElem.focus({
          get preventScroll() {
            supportsPreventScrollCached = true;
            return true;
          }
        });
      } catch (e) {
      }
    }
    return supportsPreventScrollCached;
  }
  function getScrollableElements(element) {
    let parent = element.parentNode;
    const scrollableElements = [];
    const rootScrollingElement = document.scrollingElement || document.documentElement;
    while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
      if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
        scrollableElements.push({
          element: parent,
          scrollTop: parent.scrollTop,
          scrollLeft: parent.scrollLeft
        });
      }
      parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) {
      scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
      });
    }
    return scrollableElements;
  }
  function restoreScrollPosition(scrollableElements) {
    for (const { element, scrollTop, scrollLeft } of scrollableElements) {
      element.scrollTop = scrollTop;
      element.scrollLeft = scrollLeft;
    }
  }

  // src/tabbable.ts
  var focusableElements = [
    "input:not([type='hidden']):not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "[tabindex]",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]:not([contenteditable='false'])"
  ];
  var tabbableElements = [
    ...focusableElements,
    '[tabindex]:not([tabindex="-1"]):not([disabled])'
  ];
  var FOCUSABLE_ELEMENT_SELECTOR = `${focusableElements.join(
  ":not([hidden]),"
)},[tabindex]:not([disabled]):not([hidden])`;
  var TABBABLE_ELEMENT_SELECTOR = tabbableElements.join(
    ':not([hidden]):not([tabindex="-1"]),'
  );
  function isElementVisible(element, childElement) {
    return element.nodeName !== "#comment" && isStyleVisible(element) && isAttributeVisible(element, childElement) && (!element.parentElement || isElementVisible(element.parentElement, element));
  }
  function isStyleVisible(element) {
    if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
      return false;
    }
    const { display, visibility } = element.style;
    let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
    if (isVisible) {
      if (!element.ownerDocument.defaultView) {
        return isVisible;
      }
      const { getComputedStyle } = element.ownerDocument.defaultView;
      const { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
      isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
    }
    return isVisible;
  }
  function isAttributeVisible(element, childElement) {
    return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
  }
  function getFocusableTreeWalker(root, opts, scope) {
    const selector = opts?.tabbable ? TABBABLE_ELEMENT_SELECTOR : FOCUSABLE_ELEMENT_SELECTOR;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
      acceptNode(node) {
        if (opts?.from?.contains(node)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (node.matches(selector) && isElementVisible(node) && (true) && (!opts?.accept || opts.accept(node))) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
      }
    });
    if (opts?.from) {
      walker.currentNode = opts.from;
    }
    return walker;
  }
  function snapValueToStep(value, min, max, step) {
    const remainder = (value - (Number.isNaN(min) ? 0 : min)) % step;
    let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
    if (!Number.isNaN(min)) {
      if (snappedValue < min) {
        snappedValue = min;
      } else if (!Number.isNaN(max) && snappedValue > max) {
        snappedValue = min + Math.floor((max - min) / step) * step;
      }
    } else if (!Number.isNaN(max) && snappedValue > max) {
      snappedValue = Math.floor(max / step) * step;
    }
    const string = step.toString();
    const index = string.indexOf(".");
    const precision = index >= 0 ? string.length - index : 0;
    if (precision > 0) {
      const pow = 10 ** precision;
      snappedValue = Math.round(snappedValue * pow) / pow;
    }
    return snappedValue;
  }
  var getPrecision = (n) => {
    let e = 1;
    let precision = 0;
    while (Math.round(n * e) / e !== n) {
      e *= 10;
      precision++;
    }
    return precision;
  };
  function mergeDefaultProps(defaultProps, props) {
    return mergeProps(defaultProps, props);
  }

  // src/run-after-transition.ts
  var transitionsByElement = /* @__PURE__ */ new Map();
  var transitionCallbacks = /* @__PURE__ */ new Set();
  function setupGlobalEvents() {
    if (typeof window === "undefined") {
      return;
    }
    const onTransitionStart = (e) => {
      if (!e.target) {
        return;
      }
      let transitions = transitionsByElement.get(e.target);
      if (!transitions) {
        transitions = /* @__PURE__ */ new Set();
        transitionsByElement.set(e.target, transitions);
        e.target.addEventListener(
          "transitioncancel",
          onTransitionEnd
        );
      }
      transitions.add(e.propertyName);
    };
    const onTransitionEnd = (e) => {
      if (!e.target) {
        return;
      }
      const properties = transitionsByElement.get(e.target);
      if (!properties) {
        return;
      }
      properties.delete(e.propertyName);
      if (properties.size === 0) {
        e.target.removeEventListener(
          "transitioncancel",
          onTransitionEnd
        );
        transitionsByElement.delete(e.target);
      }
      if (transitionsByElement.size === 0) {
        for (const cb of transitionCallbacks) {
          cb();
        }
        transitionCallbacks.clear();
      }
    };
    document.body.addEventListener("transitionrun", onTransitionStart);
    document.body.addEventListener("transitionend", onTransitionEnd);
  }
  if (typeof document !== "undefined") {
    if (document.readyState !== "loading") {
      setupGlobalEvents();
    } else {
      document.addEventListener("DOMContentLoaded", setupGlobalEvents);
    }
  }

  // src/scroll-into-view.ts
  function scrollIntoView(scrollView, element) {
    const offsetX = relativeOffset(scrollView, element, "left");
    const offsetY = relativeOffset(scrollView, element, "top");
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    const maxX = x + scrollView.offsetWidth;
    const maxY = y + scrollView.offsetHeight;
    if (offsetX <= x) {
      x = offsetX;
    } else if (offsetX + width > maxX) {
      x += offsetX + width - maxX;
    }
    if (offsetY <= y) {
      y = offsetY;
    } else if (offsetY + height > maxY) {
      y += offsetY + height - maxY;
    }
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
  }
  function relativeOffset(ancestor, child, axis) {
    const prop = axis === "left" ? "offsetLeft" : "offsetTop";
    let sum = 0;
    while (child.offsetParent) {
      sum += child[prop];
      if (child.offsetParent === ancestor) {
        break;
      }
      if (child.offsetParent.contains(ancestor)) {
        sum -= ancestor[prop];
        break;
      }
      child = child.offsetParent;
    }
    return sum;
  }

  // src/styles.ts
  var visuallyHiddenStyles = {
    border: "0",
    clip: "rect(0 0 0 0)",
    "clip-path": "inset(50%)",
    height: "1px",
    margin: "0 -1px -1px 0",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px",
    "white-space": "nowrap"
  };

  function createTagName(ref, fallback) {
    const [tagName, setTagName] = createSignal(stringOrUndefined(fallback?.()));
    createEffect(() => {
      setTagName(ref()?.tagName.toLowerCase() || stringOrUndefined(fallback?.()));
    });
    return tagName;
  }
  function stringOrUndefined(value) {
    return isString(value) ? value : void 0;
  }

  function Polymorphic(props) {
    const [local, others] = splitProps(props, ["as"]);
    if (!local.as) {
      throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");
    }
    return (
      // @ts-ignore: Props are valid but not worth calculating
      createComponent(Dynamic, mergeProps(others, {
        get component() {
          return local.as;
        }
      }))
    );
  }

  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all) __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
  };

  var button_exports = {};
  __export(button_exports, {
    Button: () => Button$1,
    Root: () => ButtonRoot
  });
  var BUTTON_INPUT_TYPES = ["button", "color", "file", "image", "reset", "submit"];
  function isButton(element) {
    const tagName = element.tagName.toLowerCase();
    if (tagName === "button") {
      return true;
    }
    if (tagName === "input" && element.type) {
      return BUTTON_INPUT_TYPES.indexOf(element.type) !== -1;
    }
    return false;
  }
  function ButtonRoot(props) {
    let ref;
    const mergedProps = mergeDefaultProps({
      type: "button"
    }, props);
    const [local, others] = splitProps(mergedProps, ["ref", "type", "disabled"]);
    const tagName = createTagName(() => ref, () => "button");
    const isNativeButton = createMemo(() => {
      const elementTagName = tagName();
      if (elementTagName == null) {
        return false;
      }
      return isButton({
        tagName: elementTagName,
        type: local.type
      });
    });
    const isNativeInput = createMemo(() => {
      return tagName() === "input";
    });
    const isNativeLink = createMemo(() => {
      return tagName() === "a" && ref?.getAttribute("href") != null;
    });
    return createComponent(Polymorphic, mergeProps({
      as: "button",
      ref(r$) {
        var _ref$ = mergeRefs((el) => ref = el, local.ref);
        typeof _ref$ === "function" && _ref$(r$);
      },
      get type() {
        return isNativeButton() || isNativeInput() ? local.type : void 0;
      },
      get role() {
        return !isNativeButton() && !isNativeLink() ? "button" : void 0;
      },
      get tabIndex() {
        return !isNativeButton() && !isNativeLink() && !local.disabled ? 0 : void 0;
      },
      get disabled() {
        return isNativeButton() || isNativeInput() ? local.disabled : void 0;
      },
      get ["aria-disabled"]() {
        return !isNativeButton() && !isNativeInput() && local.disabled ? true : void 0;
      },
      get ["data-disabled"]() {
        return local.disabled ? "" : void 0;
      }
    }, others));
  }
  var Button$1 = ButtonRoot;

  var classnames = {exports: {}};

  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */

  var hasRequiredClassnames;

  function requireClassnames () {
  	if (hasRequiredClassnames) return classnames.exports;
  	hasRequiredClassnames = 1;
  	(function (module) {
  		/* global define */

  		(function () {

  			var hasOwn = {}.hasOwnProperty;

  			function classNames () {
  				var classes = '';

  				for (var i = 0; i < arguments.length; i++) {
  					var arg = arguments[i];
  					if (arg) {
  						classes = appendClass(classes, parseValue(arg));
  					}
  				}

  				return classes;
  			}

  			function parseValue (arg) {
  				if (typeof arg === 'string' || typeof arg === 'number') {
  					return arg;
  				}

  				if (typeof arg !== 'object') {
  					return '';
  				}

  				if (Array.isArray(arg)) {
  					return classNames.apply(null, arg);
  				}

  				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
  					return arg.toString();
  				}

  				var classes = '';

  				for (var key in arg) {
  					if (hasOwn.call(arg, key) && arg[key]) {
  						classes = appendClass(classes, key);
  					}
  				}

  				return classes;
  			}

  			function appendClass (value, newClass) {
  				if (!newClass) {
  					return value;
  				}
  			
  				if (value) {
  					return value + ' ' + newClass;
  				}
  			
  				return value + newClass;
  			}

  			if (module.exports) {
  				classNames.default = classNames;
  				module.exports = classNames;
  			} else {
  				window.classNames = classNames;
  			}
  		}()); 
  	} (classnames));
  	return classnames.exports;
  }

  var classnamesExports = requireClassnames();
  const cn = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

  var _tmpl$$t = /* @__PURE__ */ template(`<span class="e:w-full e:flex e:px-2 epx2 e:py-1.5 epy1-5 e:items-center"><span class="e:flex-1 e:justify-start"><span></span></span><span class=e:justify-end><span>`);
  var BColor = /* @__PURE__ */ ((BColor2) => {
    BColor2["green"] = "green";
    BColor2["red"] = "red";
    return BColor2;
  })(BColor || {});
  const Button = (props) => {
    const {
      color,
      full,
      clipped,
      cn: cnValue,
      icon,
      children,
      variant,
      ...restProps
    } = props;
    const commonCN = "e:flex";
    const variantCN = {
      "e:border e:border-white ebrdwhite": variant === "outline" /* outline */
    };
    const colorCN = {
      "e:bg-green-100 e:border e:border-green-400 ebrd-green-400": props.color === "green" /* green */ && !props.clipped && props.variant !== "contained" /* contained */,
      "e:bg-green-400 ebggreen400": props.color === "green" /* green */ && props.clipped,
      "e:bg-red-100 ebgred100 e:border e:border-red-500 ebrd-red-500": props.color === "red" /* red */ && !props.clipped,
      "e:bg-red-500 ebgred500": props.color === "red" /* red */ && props.clipped,
      "e:bg-green-500 ebggreen500": props.color === "green" /* green */ && props.variant === "contained" /* contained */
    };
    const hsizeCN = {
      "e:w-full": props.full
    };
    const clippedCN = {
      "e:clip-path-[polygon(0%_0%,100%_0%,100%_70%,80%_100%,0%_100%)]": props.clipped
    };
    const style = props.clipped ? {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 16px 100%, 0% calc(100% - 13px))"
    } : {};
    return createComponent(Button$1, mergeProps({
      style,
      get type() {
        return props.type ?? "button";
      },
      get ["class"]() {
        return cn(commonCN, cnValue, colorCN, hsizeCN, clippedCN, variantCN);
      }
    }, restProps, {
      get children() {
        return [createComponent(Show, {
          when: !icon,
          children
        }), createComponent(Show, {
          when: !!icon,
          get children() {
            var _el$ = _tmpl$$t(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$2.nextSibling, _el$5 = _el$4.firstChild;
            insert(_el$3, children);
            insert(_el$5, icon);
            return _el$;
          }
        })];
      }
    }));
  };

  const IconButton = (props) => {
    const commonCN = "e:text-white";
    return createComponent(Button$1, mergeProps({
      get type() {
        return props.type ?? "button";
      },
      get ["class"]() {
        return cn(commonCN, props.cn);
      }
    }, props, {
      get children() {
        return props.children;
      }
    }));
  };

  var _tmpl$$s = /* @__PURE__ */ template(`<div>`);
  var TextColor = /* @__PURE__ */ ((TextColor2) => {
    TextColor2["white"] = "e:text-white";
    TextColor2["green"] = "e:text-green-500";
    TextColor2["red"] = "e:text-red-500";
    TextColor2["black"] = "e:text-black";
    TextColor2["b200"] = "e:text-black-200";
    TextColor2["b300"] = "e:text-black-300";
    TextColor2["inherit"] = "";
    return TextColor2;
  })(TextColor || {});
  var FontSize = /* @__PURE__ */ ((FontSize2) => {
    FontSize2["xl2"] = "e:text-2xl";
    FontSize2["lg"] = "e:text-lg";
    FontSize2["sm"] = "e:text-sm";
    FontSize2["xs"] = "e:text-xs";
    return FontSize2;
  })(FontSize || {});
  var FW = /* @__PURE__ */ ((FW2) => {
    FW2["semi"] = "e:font-semibold";
    FW2["bold"] = "e:font-bold";
    FW2["normal"] = "e:font-normal";
    FW2["md"] = "e:font-medium";
    return FW2;
  })(FW || {});
  const Typography = (props) => {
    const {
      size = "e:text-xs" /* xs */,
      color = "e:text-white" /* white */,
      weight = "e:font-normal" /* normal */
    } = props;
    const upper = props.upper ? "e:uppercase" : "";
    const commonClasses = "e:font-chakra";
    const nowrap = props.nowrap ? "e:whitespace-nowrap" : "";
    return (() => {
      var _el$ = _tmpl$$s();
      insert(_el$, () => props.children);
      createRenderEffect(() => className(_el$, cn(commonClasses, color, size, weight, upper, nowrap, props.cn)));
      return _el$;
    })();
  };

  var TabsKeyboardDelegate = class {
    collection;
    direction;
    orientation;
    constructor(collection, direction, orientation) {
      this.collection = collection;
      this.direction = direction;
      this.orientation = orientation;
    }
    flipDirection() {
      return this.direction() === "rtl" && this.orientation() === "horizontal";
    }
    getKeyLeftOf(key) {
      if (this.flipDirection()) {
        return this.getNextKey(key);
      }
      if (this.orientation() === "horizontal") {
        return this.getPreviousKey(key);
      }
      return void 0;
    }
    getKeyRightOf(key) {
      if (this.flipDirection()) {
        return this.getPreviousKey(key);
      }
      if (this.orientation() === "horizontal") {
        return this.getNextKey(key);
      }
      return void 0;
    }
    getKeyAbove(key) {
      if (this.orientation() === "vertical") {
        return this.getPreviousKey(key);
      }
      return void 0;
    }
    getKeyBelow(key) {
      if (this.orientation() === "vertical") {
        return this.getNextKey(key);
      }
      return void 0;
    }
    getFirstKey() {
      let key = this.collection().getFirstKey();
      if (key == null) {
        return;
      }
      const item = this.collection().getItem(key);
      if (item?.disabled) {
        key = this.getNextKey(key);
      }
      return key;
    }
    getLastKey() {
      let key = this.collection().getLastKey();
      if (key == null) {
        return;
      }
      const item = this.collection().getItem(key);
      if (item?.disabled) {
        key = this.getPreviousKey(key);
      }
      return key;
    }
    getNextKey(key) {
      let nextKey = key;
      let nextItem;
      do {
        nextKey = this.collection().getKeyAfter(nextKey) ?? this.collection().getFirstKey();
        if (nextKey == null) {
          return;
        }
        nextItem = this.collection().getItem(nextKey);
        if (nextItem == null) {
          return;
        }
      } while (nextItem.disabled);
      return nextKey;
    }
    getPreviousKey(key) {
      let previousKey = key;
      let previousItem;
      do {
        previousKey = this.collection().getKeyBefore(previousKey) ?? this.collection().getLastKey();
        if (previousKey == null) {
          return;
        }
        previousItem = this.collection().getItem(previousKey);
        if (previousItem == null) {
          return;
        }
      } while (previousItem.disabled);
      return previousKey;
    }
  };

  function createControllableSignal(props) {
    const [_value, _setValue] = createSignal(props.defaultValue?.());
    const isControlled = createMemo(() => props.value?.() !== void 0);
    const value = createMemo(() => isControlled() ? props.value?.() : _value());
    const setValue = (next) => {
      untrack(() => {
        const nextValue = accessWith(next, value());
        if (!Object.is(nextValue, value())) {
          if (!isControlled()) {
            _setValue(nextValue);
          }
          props.onChange?.(nextValue);
        }
        return nextValue;
      });
    };
    return [value, setValue];
  }
  function createControllableBooleanSignal(props) {
    const [_value, setValue] = createControllableSignal(props);
    const value = () => _value() ?? false;
    return [value, setValue];
  }
  function createControllableArraySignal(props) {
    const [_value, setValue] = createControllableSignal(props);
    const value = () => _value() ?? [];
    return [value, setValue];
  }

  function createToggleState(props = {}) {
    const [isSelected, _setIsSelected] = createControllableBooleanSignal({
      value: () => access$1(props.isSelected),
      defaultValue: () => !!access$1(props.defaultIsSelected),
      onChange: (value) => props.onSelectedChange?.(value)
    });
    const setIsSelected = (value) => {
      if (!access$1(props.isReadOnly) && !access$1(props.isDisabled)) {
        _setIsSelected(value);
      }
    };
    const toggle = () => {
      if (!access$1(props.isReadOnly) && !access$1(props.isDisabled)) {
        _setIsSelected(!isSelected());
      }
    };
    return {
      isSelected,
      setIsSelected,
      toggle
    };
  }

  var toggle_button_exports = {};
  __export(toggle_button_exports, {
    Root: () => ToggleButtonRoot,
    ToggleButton: () => ToggleButton
  });
  function ToggleButtonRoot(props) {
    const [local, others] = splitProps(props, ["children", "pressed", "defaultPressed", "onChange", "onClick"]);
    const state = createToggleState({
      isSelected: () => local.pressed,
      defaultIsSelected: () => local.defaultPressed,
      onSelectedChange: (selected) => local.onChange?.(selected),
      isDisabled: () => others.disabled
    });
    const onClick = (e) => {
      callHandler(e, local.onClick);
      state.toggle();
    };
    return createComponent(ButtonRoot, mergeProps({
      get ["aria-pressed"]() {
        return state.isSelected();
      },
      get ["data-pressed"]() {
        return state.isSelected() ? "" : void 0;
      },
      onClick
    }, others, {
      get children() {
        return createComponent(ToggleButtonRootChild, {
          get state() {
            return {
              pressed: state.isSelected
            };
          },
          get children() {
            return local.children;
          }
        });
      }
    }));
  }
  function ToggleButtonRootChild(props) {
    const resolvedChildren = children(() => {
      const body = props.children;
      return isFunction(body) ? body(props.state) : body;
    });
    return memo(resolvedChildren);
  }
  var ToggleButton = ToggleButtonRoot;

  function buildNodes(params) {
    let index = params.startIndex ?? 0;
    const level = params.startLevel ?? 0;
    const nodes = [];
    const getKey = (data) => {
      if (data == null) {
        return "";
      }
      const _getKey = params.getKey ?? "key";
      const dataKey = isString(_getKey) ? data[_getKey] : _getKey(data);
      return dataKey != null ? String(dataKey) : "";
    };
    const getTextValue = (data) => {
      if (data == null) {
        return "";
      }
      const _getTextValue = params.getTextValue ?? "textValue";
      const dataTextValue = isString(_getTextValue) ? data[_getTextValue] : _getTextValue(data);
      return dataTextValue != null ? String(dataTextValue) : "";
    };
    const getDisabled = (data) => {
      if (data == null) {
        return false;
      }
      const _getDisabled = params.getDisabled ?? "disabled";
      return (isString(_getDisabled) ? data[_getDisabled] : _getDisabled(data)) ?? false;
    };
    const getSectionChildren = (data) => {
      if (data == null) {
        return void 0;
      }
      if (isString(params.getSectionChildren)) {
        return data[params.getSectionChildren];
      }
      return params.getSectionChildren?.(data);
    };
    for (const data of params.dataSource) {
      if (isString(data) || isNumber(data)) {
        nodes.push({
          type: "item",
          rawValue: data,
          key: String(data),
          textValue: String(data),
          disabled: getDisabled(data),
          level,
          index
        });
        index++;
        continue;
      }
      if (getSectionChildren(data) != null) {
        nodes.push({
          type: "section",
          rawValue: data,
          key: "",
          // not applicable here
          textValue: "",
          // not applicable here
          disabled: false,
          // not applicable here
          level,
          index
        });
        index++;
        const sectionChildren = getSectionChildren(data) ?? [];
        if (sectionChildren.length > 0) {
          const childNodes = buildNodes({
            dataSource: sectionChildren,
            getKey: params.getKey,
            getTextValue: params.getTextValue,
            getDisabled: params.getDisabled,
            getSectionChildren: params.getSectionChildren,
            startIndex: index,
            startLevel: level + 1
          });
          nodes.push(...childNodes);
          index += childNodes.length;
        }
      } else {
        nodes.push({
          type: "item",
          rawValue: data,
          key: getKey(data),
          textValue: getTextValue(data),
          disabled: getDisabled(data),
          level,
          index
        });
        index++;
      }
    }
    return nodes;
  }
  function createCollection(props, deps = []) {
    return createMemo(() => {
      const nodes = buildNodes({
        dataSource: access$1(props.dataSource),
        getKey: access$1(props.getKey),
        getTextValue: access$1(props.getTextValue),
        getDisabled: access$1(props.getDisabled),
        getSectionChildren: access$1(props.getSectionChildren)
      });
      for (let i = 0; i < deps.length; i++) deps[i]();
      return props.factory(nodes);
    });
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ let $488c6ddbf4ef74c2$var$formatterCache = new Map();
  let $488c6ddbf4ef74c2$var$supportsSignDisplay = false;
  try {
      $488c6ddbf4ef74c2$var$supportsSignDisplay = new Intl.NumberFormat('de-DE', {
          signDisplay: 'exceptZero'
      }).resolvedOptions().signDisplay === 'exceptZero';
  // eslint-disable-next-line no-empty
  } catch  {}
  let $488c6ddbf4ef74c2$var$supportsUnit = false;
  try {
      $488c6ddbf4ef74c2$var$supportsUnit = new Intl.NumberFormat('de-DE', {
          style: 'unit',
          unit: 'degree'
      }).resolvedOptions().style === 'unit';
  // eslint-disable-next-line no-empty
  } catch  {}
  // Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
  // Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
  // Values were determined by switching to each locale manually in Chrome.
  const $488c6ddbf4ef74c2$var$UNITS = {
      degree: {
          narrow: {
              default: "\xb0",
              'ja-JP': " \u5EA6",
              'zh-TW': "\u5EA6",
              'sl-SI': " \xb0"
          }
      }
  };
  class $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5 {
      /** Formats a number value as a string, according to the locale and options provided to the constructor. */ format(value) {
          let res = '';
          if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) res = $488c6ddbf4ef74c2$export$711b50b3c525e0f2(this.numberFormatter, this.options.signDisplay, value);
          else res = this.numberFormatter.format(value);
          if (this.options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
              var _UNITS_unit;
              let { unit: unit, unitDisplay: unitDisplay = 'short', locale: locale } = this.resolvedOptions();
              if (!unit) return res;
              let values = (_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay];
              res += values[locale] || values.default;
          }
          return res;
      }
      /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */ formatToParts(value) {
          // TODO: implement signDisplay for formatToParts
          return this.numberFormatter.formatToParts(value);
      }
      /** Formats a number range as a string. */ formatRange(start, end) {
          if (typeof this.numberFormatter.formatRange === 'function') return this.numberFormatter.formatRange(start, end);
          if (end < start) throw new RangeError('End date must be >= start date');
          // Very basic fallback for old browsers.
          return `${this.format(start)} \u{2013} ${this.format(end)}`;
      }
      /** Formats a number range as an array of parts. */ formatRangeToParts(start, end) {
          if (typeof this.numberFormatter.formatRangeToParts === 'function') return this.numberFormatter.formatRangeToParts(start, end);
          if (end < start) throw new RangeError('End date must be >= start date');
          let startParts = this.numberFormatter.formatToParts(start);
          let endParts = this.numberFormatter.formatToParts(end);
          return [
              ...startParts.map((p)=>({
                      ...p,
                      source: 'startRange'
                  })),
              {
                  type: 'literal',
                  value: " \u2013 ",
                  source: 'shared'
              },
              ...endParts.map((p)=>({
                      ...p,
                      source: 'endRange'
                  }))
          ];
      }
      /** Returns the resolved formatting options based on the values passed to the constructor. */ resolvedOptions() {
          let options = this.numberFormatter.resolvedOptions();
          if (!$488c6ddbf4ef74c2$var$supportsSignDisplay && this.options.signDisplay != null) options = {
              ...options,
              signDisplay: this.options.signDisplay
          };
          if (!$488c6ddbf4ef74c2$var$supportsUnit && this.options.style === 'unit') options = {
              ...options,
              style: 'unit',
              unit: this.options.unit,
              unitDisplay: this.options.unitDisplay
          };
          return options;
      }
      constructor(locale, options = {}){
          this.numberFormatter = $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options);
          this.options = options;
      }
  }
  function $488c6ddbf4ef74c2$var$getCachedNumberFormatter(locale, options = {}) {
      let { numberingSystem: numberingSystem } = options;
      if (numberingSystem && locale.includes('-nu-')) {
          if (!locale.includes('-u-')) locale += '-u-';
          locale += `-nu-${numberingSystem}`;
      }
      if (options.style === 'unit' && !$488c6ddbf4ef74c2$var$supportsUnit) {
          var _UNITS_unit;
          let { unit: unit, unitDisplay: unitDisplay = 'short' } = options;
          if (!unit) throw new Error('unit option must be provided with style: "unit"');
          if (!((_UNITS_unit = $488c6ddbf4ef74c2$var$UNITS[unit]) === null || _UNITS_unit === void 0 ? void 0 : _UNITS_unit[unitDisplay])) throw new Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
          options = {
              ...options,
              style: 'decimal'
          };
      }
      let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
      if ($488c6ddbf4ef74c2$var$formatterCache.has(cacheKey)) return $488c6ddbf4ef74c2$var$formatterCache.get(cacheKey);
      let numberFormatter = new Intl.NumberFormat(locale, options);
      $488c6ddbf4ef74c2$var$formatterCache.set(cacheKey, numberFormatter);
      return numberFormatter;
  }
  function $488c6ddbf4ef74c2$export$711b50b3c525e0f2(numberFormat, signDisplay, num) {
      if (signDisplay === 'auto') return numberFormat.format(num);
      else if (signDisplay === 'never') return numberFormat.format(Math.abs(num));
      else {
          let needsPositiveSign = false;
          if (signDisplay === 'always') needsPositiveSign = num > 0 || Object.is(num, 0);
          else if (signDisplay === 'exceptZero') {
              if (Object.is(num, -0) || Object.is(num, 0)) num = Math.abs(num);
              else needsPositiveSign = num > 0;
          }
          if (needsPositiveSign) {
              let negative = numberFormat.format(-num);
              let noSign = numberFormat.format(num);
              // ignore RTL/LTR marker character
              let minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '');
              if ([
                  ...minus
              ].length !== 1) console.warn('@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case');
              let positive = negative.replace(noSign, '!!!').replace(minus, '+').replace('!!!', noSign);
              return positive;
          } else return numberFormat.format(num);
      }
  }

  /*
   * Copyright 2020 Adobe. All rights reserved.
   * This file is licensed to you under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License. You may obtain a copy
   * of the License at http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software distributed under
   * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
   * OF ANY KIND, either express or implied. See the License for the specific language
   * governing permissions and limitations under the License.
   */ 
  const $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX = new RegExp('^.*\\(.*\\).*$');
  const $6c7bd7858deea686$var$NUMBERING_SYSTEMS = [
      'latn',
      'arab',
      'hanidec',
      'deva',
      'beng'
  ];
  class $6c7bd7858deea686$export$cd11ab140839f11d {
      /**
     * Parses the given string to a number. Returns NaN if a valid number could not be parsed.
     */ parse(value) {
          return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).parse(value);
      }
      /**
     * Returns whether the given string could potentially be a valid number. This should be used to
     * validate user input as the user types. If a `minValue` or `maxValue` is provided, the validity
     * of the minus/plus sign characters can be checked.
     */ isValidPartialNumber(value, minValue, maxValue) {
          return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).isValidPartialNumber(value, minValue, maxValue);
      }
      /**
     * Returns a numbering system for which the given string is valid in the current locale.
     * If no numbering system could be detected, the default numbering system for the current
     * locale is returned.
     */ getNumberingSystem(value) {
          return $6c7bd7858deea686$var$getNumberParserImpl(this.locale, this.options, value).options.numberingSystem;
      }
      constructor(locale, options = {}){
          this.locale = locale;
          this.options = options;
      }
  }
  const $6c7bd7858deea686$var$numberParserCache = new Map();
  function $6c7bd7858deea686$var$getNumberParserImpl(locale, options, value) {
      // First try the default numbering system for the provided locale
      let defaultParser = $6c7bd7858deea686$var$getCachedNumberParser(locale, options);
      // If that doesn't match, and the locale doesn't include a hard coded numbering system,
      // try each of the other supported numbering systems until we find one that matches.
      if (!locale.includes('-nu-') && !defaultParser.isValidPartialNumber(value)) {
          for (let numberingSystem of $6c7bd7858deea686$var$NUMBERING_SYSTEMS)if (numberingSystem !== defaultParser.options.numberingSystem) {
              let parser = $6c7bd7858deea686$var$getCachedNumberParser(locale + (locale.includes('-u-') ? '-nu-' : '-u-nu-') + numberingSystem, options);
              if (parser.isValidPartialNumber(value)) return parser;
          }
      }
      return defaultParser;
  }
  function $6c7bd7858deea686$var$getCachedNumberParser(locale, options) {
      let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : '');
      let parser = $6c7bd7858deea686$var$numberParserCache.get(cacheKey);
      if (!parser) {
          parser = new $6c7bd7858deea686$var$NumberParserImpl(locale, options);
          $6c7bd7858deea686$var$numberParserCache.set(cacheKey, parser);
      }
      return parser;
  }
  // The actual number parser implementation. Instances of this class are cached
  // based on the locale, options, and detected numbering system.
  class $6c7bd7858deea686$var$NumberParserImpl {
      parse(value) {
          // to parse the number, we need to remove anything that isn't actually part of the number, for example we want '-10.40' not '-10.40 USD'
          let fullySanitizedValue = this.sanitize(value);
          if (this.symbols.group) // Remove group characters, and replace decimal points and numerals with ASCII values.
          fullySanitizedValue = $6c7bd7858deea686$var$replaceAll(fullySanitizedValue, this.symbols.group, '');
          if (this.symbols.decimal) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.decimal, '.');
          if (this.symbols.minusSign) fullySanitizedValue = fullySanitizedValue.replace(this.symbols.minusSign, '-');
          fullySanitizedValue = fullySanitizedValue.replace(this.symbols.numeral, this.symbols.index);
          if (this.options.style === 'percent') {
              // javascript is bad at dividing by 100 and maintaining the same significant figures, so perform it on the string before parsing
              let isNegative = fullySanitizedValue.indexOf('-');
              fullySanitizedValue = fullySanitizedValue.replace('-', '');
              let index = fullySanitizedValue.indexOf('.');
              if (index === -1) index = fullySanitizedValue.length;
              fullySanitizedValue = fullySanitizedValue.replace('.', '');
              if (index - 2 === 0) fullySanitizedValue = `0.${fullySanitizedValue}`;
              else if (index - 2 === -1) fullySanitizedValue = `0.0${fullySanitizedValue}`;
              else if (index - 2 === -2) fullySanitizedValue = '0.00';
              else fullySanitizedValue = `${fullySanitizedValue.slice(0, index - 2)}.${fullySanitizedValue.slice(index - 2)}`;
              if (isNegative > -1) fullySanitizedValue = `-${fullySanitizedValue}`;
          }
          let newValue = fullySanitizedValue ? +fullySanitizedValue : NaN;
          if (isNaN(newValue)) return NaN;
          if (this.options.style === 'percent') {
              var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
              // extra step for rounding percents to what our formatter would output
              let options = {
                  ...this.options,
                  style: 'decimal',
                  minimumFractionDigits: Math.min(((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) + 2, 20),
                  maximumFractionDigits: Math.min(((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) + 2, 20)
              };
              return new $6c7bd7858deea686$export$cd11ab140839f11d(this.locale, options).parse(new ($488c6ddbf4ef74c2$export$cc77c4ff7e8673c5)(this.locale, options).format(newValue));
          }
          // accounting will always be stripped to a positive number, so if it's accounting and has a () around everything, then we need to make it negative again
          if (this.options.currencySign === 'accounting' && $6c7bd7858deea686$var$CURRENCY_SIGN_REGEX.test(value)) newValue = -1 * newValue;
          return newValue;
      }
      sanitize(value) {
          // Remove literals and whitespace, which are allowed anywhere in the string
          value = value.replace(this.symbols.literals, '');
          // Replace the ASCII minus sign with the minus sign used in the current locale
          // so that both are allowed in case the user's keyboard doesn't have the locale's minus sign.
          if (this.symbols.minusSign) value = value.replace('-', this.symbols.minusSign);
          // In arab numeral system, their decimal character is 1643, but most keyboards don't type that
          // instead they use the , (44) character or apparently the (1548) character.
          if (this.options.numberingSystem === 'arab') {
              if (this.symbols.decimal) {
                  value = value.replace(',', this.symbols.decimal);
                  value = value.replace(String.fromCharCode(1548), this.symbols.decimal);
              }
              if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, '.', this.symbols.group);
          }
          // fr-FR group character is narrow non-breaking space, char code 8239 (U+202F), but that's not a key on the french keyboard,
          // so allow space and non-breaking space as a group char as well
          if (this.options.locale === 'fr-FR' && this.symbols.group) {
              value = $6c7bd7858deea686$var$replaceAll(value, ' ', this.symbols.group);
              value = $6c7bd7858deea686$var$replaceAll(value, /\u00A0/g, this.symbols.group);
          }
          return value;
      }
      isValidPartialNumber(value, minValue = -Infinity, maxValue = Infinity) {
          value = this.sanitize(value);
          // Remove minus or plus sign, which must be at the start of the string.
          if (this.symbols.minusSign && value.startsWith(this.symbols.minusSign) && minValue < 0) value = value.slice(this.symbols.minusSign.length);
          else if (this.symbols.plusSign && value.startsWith(this.symbols.plusSign) && maxValue > 0) value = value.slice(this.symbols.plusSign.length);
          // Numbers cannot start with a group separator
          if (this.symbols.group && value.startsWith(this.symbols.group)) return false;
          // Numbers that can't have any decimal values fail if a decimal character is typed
          if (this.symbols.decimal && value.indexOf(this.symbols.decimal) > -1 && this.options.maximumFractionDigits === 0) return false;
          // Remove numerals, groups, and decimals
          if (this.symbols.group) value = $6c7bd7858deea686$var$replaceAll(value, this.symbols.group, '');
          value = value.replace(this.symbols.numeral, '');
          if (this.symbols.decimal) value = value.replace(this.symbols.decimal, '');
          // The number is valid if there are no remaining characters
          return value.length === 0;
      }
      constructor(locale, options = {}){
          this.locale = locale;
          // see https://tc39.es/ecma402/#sec-setnfdigitoptions, when using roundingIncrement, the maximumFractionDigits and minimumFractionDigits must be equal
          // by default, they are 0 and 3 respectively, so we set them to 0 if neither are set
          if (options.roundingIncrement !== 1 && options.roundingIncrement != null) {
              if (options.maximumFractionDigits == null && options.minimumFractionDigits == null) {
                  options.maximumFractionDigits = 0;
                  options.minimumFractionDigits = 0;
              } else if (options.maximumFractionDigits == null) options.maximumFractionDigits = options.minimumFractionDigits;
              else if (options.minimumFractionDigits == null) options.minimumFractionDigits = options.maximumFractionDigits;
          // if both are specified, let the normal Range Error be thrown
          }
          this.formatter = new Intl.NumberFormat(locale, options);
          this.options = this.formatter.resolvedOptions();
          this.symbols = $6c7bd7858deea686$var$getSymbols(locale, this.formatter, this.options, options);
          var _this_options_minimumFractionDigits, _this_options_maximumFractionDigits;
          if (this.options.style === 'percent' && (((_this_options_minimumFractionDigits = this.options.minimumFractionDigits) !== null && _this_options_minimumFractionDigits !== void 0 ? _this_options_minimumFractionDigits : 0) > 18 || ((_this_options_maximumFractionDigits = this.options.maximumFractionDigits) !== null && _this_options_maximumFractionDigits !== void 0 ? _this_options_maximumFractionDigits : 0) > 18)) console.warn('NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.');
      }
  }
  const $6c7bd7858deea686$var$nonLiteralParts = new Set([
      'decimal',
      'fraction',
      'integer',
      'minusSign',
      'plusSign',
      'group'
  ]);
  // This list is derived from https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html#comparison and includes
  // all unique numbers which we need to check in order to determine all the plural forms for a given locale.
  // See: https://github.com/adobe/react-spectrum/pull/5134/files#r1337037855 for used script
  const $6c7bd7858deea686$var$pluralNumbers = [
      0,
      4,
      2,
      1,
      11,
      20,
      3,
      7,
      100,
      21,
      0.1,
      1.1
  ];
  function $6c7bd7858deea686$var$getSymbols(locale, formatter, intlOptions, originalOptions) {
      var _allParts_find, _posAllParts_find, _decimalParts_find, _allParts_find1;
      // formatter needs access to all decimal places in order to generate the correct literal strings for the plural set
      let symbolFormatter = new Intl.NumberFormat(locale, {
          ...intlOptions,
          // Resets so we get the full range of symbols
          minimumSignificantDigits: 1,
          maximumSignificantDigits: 21,
          roundingIncrement: 1,
          roundingPriority: 'auto',
          roundingMode: 'halfExpand'
      });
      // Note: some locale's don't add a group symbol until there is a ten thousands place
      let allParts = symbolFormatter.formatToParts(-10000.111);
      let posAllParts = symbolFormatter.formatToParts(10000.111);
      let pluralParts = $6c7bd7858deea686$var$pluralNumbers.map((n)=>symbolFormatter.formatToParts(n));
      var _allParts_find_value;
      let minusSign = (_allParts_find_value = (_allParts_find = allParts.find((p)=>p.type === 'minusSign')) === null || _allParts_find === void 0 ? void 0 : _allParts_find.value) !== null && _allParts_find_value !== void 0 ? _allParts_find_value : '-';
      let plusSign = (_posAllParts_find = posAllParts.find((p)=>p.type === 'plusSign')) === null || _posAllParts_find === void 0 ? void 0 : _posAllParts_find.value;
      // Safari does not support the signDisplay option, but our number parser polyfills it.
      // If no plus sign was returned, but the original options contained signDisplay, default to the '+' character.
      if (!plusSign && ((originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'exceptZero' || (originalOptions === null || originalOptions === void 0 ? void 0 : originalOptions.signDisplay) === 'always')) plusSign = '+';
      // If maximumSignificantDigits is 1 (the minimum) then we won't get decimal characters out of the above formatters
      // Percent also defaults to 0 fractionDigits, so we need to make a new one that isn't percent to get an accurate decimal
      let decimalParts = new Intl.NumberFormat(locale, {
          ...intlOptions,
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
      }).formatToParts(0.001);
      let decimal = (_decimalParts_find = decimalParts.find((p)=>p.type === 'decimal')) === null || _decimalParts_find === void 0 ? void 0 : _decimalParts_find.value;
      let group = (_allParts_find1 = allParts.find((p)=>p.type === 'group')) === null || _allParts_find1 === void 0 ? void 0 : _allParts_find1.value;
      // this set is also for a regex, it's all literals that might be in the string we want to eventually parse that
      // don't contribute to the numerical value
      let allPartsLiterals = allParts.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value));
      let pluralPartsLiterals = pluralParts.flatMap((p)=>p.filter((p)=>!$6c7bd7858deea686$var$nonLiteralParts.has(p.type)).map((p)=>$6c7bd7858deea686$var$escapeRegex(p.value)));
      let sortedLiterals = [
          ...new Set([
              ...allPartsLiterals,
              ...pluralPartsLiterals
          ])
      ].sort((a, b)=>b.length - a.length);
      let literals = sortedLiterals.length === 0 ? new RegExp('[\\p{White_Space}]', 'gu') : new RegExp(`${sortedLiterals.join('|')}|[\\p{White_Space}]`, 'gu');
      // These are for replacing non-latn characters with the latn equivalent
      let numerals = [
          ...new Intl.NumberFormat(intlOptions.locale, {
              useGrouping: false
          }).format(9876543210)
      ].reverse();
      let indexes = new Map(numerals.map((d, i)=>[
              d,
              i
          ]));
      let numeral = new RegExp(`[${numerals.join('')}]`, 'g');
      let index = (d)=>String(indexes.get(d));
      return {
          minusSign: minusSign,
          plusSign: plusSign,
          decimal: decimal,
          group: group,
          literals: literals,
          numeral: numeral,
          index: index
      };
  }
  function $6c7bd7858deea686$var$replaceAll(str, find, replace) {
      if (str.replaceAll) return str.replaceAll(find, replace);
      return str.split(find).join(replace);
  }
  function $6c7bd7858deea686$var$escapeRegex(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  var RTL_SCRIPTS = /* @__PURE__ */ new Set(["Avst", "Arab", "Armi", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]);
  var RTL_LANGS = /* @__PURE__ */ new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
  function isRTL(locale) {
    if (Intl.Locale) {
      const script = new Intl.Locale(locale).maximize().script ?? "";
      return RTL_SCRIPTS.has(script);
    }
    const lang = locale.split("-")[0];
    return RTL_LANGS.has(lang);
  }
  function getReadingDirection(locale) {
    return isRTL(locale) ? "rtl" : "ltr";
  }
  function getDefaultLocale() {
    let locale = typeof navigator !== "undefined" && // @ts-ignore
    (navigator.language || navigator.userLanguage) || "en-US";
    try {
      Intl.DateTimeFormat.supportedLocalesOf([locale]);
    } catch (_err) {
      locale = "en-US";
    }
    return {
      locale,
      direction: getReadingDirection(locale)
    };
  }
  var currentLocale = getDefaultLocale();
  var listeners = /* @__PURE__ */ new Set();
  function updateLocale() {
    currentLocale = getDefaultLocale();
    for (const listener of listeners) {
      listener(currentLocale);
    }
  }
  function createDefaultLocale() {
    const [defaultClientLocale, setDefaultClientLocale] = createSignal(currentLocale);
    const defaultLocale = createMemo(() => defaultClientLocale());
    onMount(() => {
      if (listeners.size === 0) {
        window.addEventListener("languagechange", updateLocale);
      }
      listeners.add(setDefaultClientLocale);
      onCleanup(() => {
        listeners.delete(setDefaultClientLocale);
        if (listeners.size === 0) {
          window.removeEventListener("languagechange", updateLocale);
        }
      });
    });
    return {
      locale: () => defaultLocale().locale,
      direction: () => defaultLocale().direction
    };
  }
  var I18nContext = createContext();
  function useLocale() {
    const defaultLocale = createDefaultLocale();
    const context = useContext(I18nContext);
    return context || defaultLocale;
  }

  var Selection = class _Selection extends Set {
    anchorKey;
    currentKey;
    constructor(keys, anchorKey, currentKey) {
      super(keys);
      if (keys instanceof _Selection) {
        this.anchorKey = anchorKey || keys.anchorKey;
        this.currentKey = currentKey || keys.currentKey;
      } else {
        this.anchorKey = anchorKey;
        this.currentKey = currentKey;
      }
    }
  };
  function createControllableSelectionSignal(props) {
    const [_value, setValue] = createControllableSignal(props);
    const value = () => _value() ?? new Selection();
    return [value, setValue];
  }
  function isNonContiguousSelectionModifier(e) {
    return isAppleDevice() ? e.altKey : e.ctrlKey;
  }
  function isCtrlKeyPressed(e) {
    if (isMac()) {
      return e.metaKey;
    }
    return e.ctrlKey;
  }
  function convertSelection(selection) {
    return new Selection(selection);
  }
  function isSameSelection(setA, setB) {
    if (setA.size !== setB.size) {
      return false;
    }
    for (const item of setA) {
      if (!setB.has(item)) {
        return false;
      }
    }
    return true;
  }
  function createMultipleSelectionState(props) {
    const mergedProps = mergeDefaultProps({
      selectionMode: "none",
      selectionBehavior: "toggle"
    }, props);
    const [isFocused, setFocused] = createSignal(false);
    const [focusedKey, setFocusedKey] = createSignal();
    const selectedKeysProp = createMemo(() => {
      const selection = access$1(mergedProps.selectedKeys);
      if (selection != null) {
        return convertSelection(selection);
      }
      return selection;
    });
    const defaultSelectedKeys = createMemo(() => {
      const defaultSelection = access$1(mergedProps.defaultSelectedKeys);
      if (defaultSelection != null) {
        return convertSelection(defaultSelection);
      }
      return new Selection();
    });
    const [selectedKeys, _setSelectedKeys] = createControllableSelectionSignal({
      value: selectedKeysProp,
      defaultValue: defaultSelectedKeys,
      onChange: (value) => mergedProps.onSelectionChange?.(value)
    });
    const [selectionBehavior, setSelectionBehavior] = createSignal(access$1(mergedProps.selectionBehavior));
    const selectionMode = () => access$1(mergedProps.selectionMode);
    const disallowEmptySelection = () => access$1(mergedProps.disallowEmptySelection) ?? false;
    const setSelectedKeys = (keys) => {
      if (access$1(mergedProps.allowDuplicateSelectionEvents) || !isSameSelection(keys, selectedKeys())) {
        _setSelectedKeys(keys);
      }
    };
    createEffect(() => {
      const selection = selectedKeys();
      if (access$1(mergedProps.selectionBehavior) === "replace" && selectionBehavior() === "toggle" && typeof selection === "object" && selection.size === 0) {
        setSelectionBehavior("replace");
      }
    });
    createEffect(() => {
      setSelectionBehavior(access$1(mergedProps.selectionBehavior) ?? "toggle");
    });
    return {
      selectionMode,
      disallowEmptySelection,
      selectionBehavior,
      setSelectionBehavior,
      isFocused,
      setFocused,
      focusedKey,
      setFocusedKey,
      selectedKeys,
      setSelectedKeys
    };
  }
  function createTypeSelect(props) {
    const [search, setSearch] = createSignal("");
    const [timeoutId, setTimeoutId] = createSignal(-1);
    const onKeyDown = (e) => {
      if (access$1(props.isDisabled)) {
        return;
      }
      const delegate = access$1(props.keyboardDelegate);
      const manager = access$1(props.selectionManager);
      if (!delegate.getKeyForSearch) {
        return;
      }
      const character = getStringForKey(e.key);
      if (!character || e.ctrlKey || e.metaKey) {
        return;
      }
      if (character === " " && search().trim().length > 0) {
        e.preventDefault();
        e.stopPropagation();
      }
      let newSearch = setSearch((prev) => prev + character);
      let key = delegate.getKeyForSearch(newSearch, manager.focusedKey()) ?? delegate.getKeyForSearch(newSearch);
      if (key == null && isAllSameLetter(newSearch)) {
        newSearch = newSearch[0];
        key = delegate.getKeyForSearch(newSearch, manager.focusedKey()) ?? delegate.getKeyForSearch(newSearch);
      }
      if (key != null) {
        manager.setFocusedKey(key);
        props.onTypeSelect?.(key);
      }
      clearTimeout(timeoutId());
      setTimeoutId(window.setTimeout(() => setSearch(""), 500));
    };
    return {
      typeSelectHandlers: {
        onKeyDown
      }
    };
  }
  function getStringForKey(key) {
    if (key.length === 1 || !/^[A-Z]/i.test(key)) {
      return key;
    }
    return "";
  }
  function isAllSameLetter(search) {
    return search.split("").every((letter) => letter === search[0]);
  }
  function createSelectableCollection(props, ref, scrollRef) {
    const defaultProps = {
      selectOnFocus: () => access$1(props.selectionManager).selectionBehavior() === "replace"
    };
    const mergedProps = mergeProps(defaultProps, props);
    const finalScrollRef = () => ref();
    const {
      direction
    } = useLocale();
    let scrollPos = {
      top: 0,
      left: 0
    };
    createEventListener(() => !access$1(mergedProps.isVirtualized) ? finalScrollRef() : void 0, "scroll", () => {
      const scrollEl = finalScrollRef();
      if (!scrollEl) {
        return;
      }
      scrollPos = {
        top: scrollEl.scrollTop,
        left: scrollEl.scrollLeft
      };
    });
    const {
      typeSelectHandlers
    } = createTypeSelect({
      isDisabled: () => access$1(mergedProps.disallowTypeAhead),
      keyboardDelegate: () => access$1(mergedProps.keyboardDelegate),
      selectionManager: () => access$1(mergedProps.selectionManager)
    });
    const orientation = () => access$1(mergedProps.orientation) ?? "vertical";
    const onKeyDown = (e) => {
      callHandler(e, typeSelectHandlers.onKeyDown);
      if (e.altKey && e.key === "Tab") {
        e.preventDefault();
      }
      const refEl = ref();
      if (!refEl?.contains(e.target)) {
        return;
      }
      const manager = access$1(mergedProps.selectionManager);
      const selectOnFocus = access$1(mergedProps.selectOnFocus);
      const navigateToKey = (key) => {
        if (key != null) {
          manager.setFocusedKey(key);
          if (e.shiftKey && manager.selectionMode() === "multiple") {
            manager.extendSelection(key);
          } else if (selectOnFocus && !isNonContiguousSelectionModifier(e)) {
            manager.replaceSelection(key);
          }
        }
      };
      const delegate = access$1(mergedProps.keyboardDelegate);
      const shouldFocusWrap = access$1(mergedProps.shouldFocusWrap);
      const focusedKey = manager.focusedKey();
      switch (e.key) {
        case (orientation() === "vertical" ? "ArrowDown" : "ArrowRight"): {
          if (delegate.getKeyBelow) {
            e.preventDefault();
            let nextKey;
            if (focusedKey != null) {
              nextKey = delegate.getKeyBelow(focusedKey);
            } else {
              nextKey = delegate.getFirstKey?.();
            }
            if (nextKey == null && shouldFocusWrap) {
              nextKey = delegate.getFirstKey?.(focusedKey);
            }
            navigateToKey(nextKey);
          }
          break;
        }
        case (orientation() === "vertical" ? "ArrowUp" : "ArrowLeft"): {
          if (delegate.getKeyAbove) {
            e.preventDefault();
            let nextKey;
            if (focusedKey != null) {
              nextKey = delegate.getKeyAbove(focusedKey);
            } else {
              nextKey = delegate.getLastKey?.();
            }
            if (nextKey == null && shouldFocusWrap) {
              nextKey = delegate.getLastKey?.(focusedKey);
            }
            navigateToKey(nextKey);
          }
          break;
        }
        case (orientation() === "vertical" ? "ArrowLeft" : "ArrowUp"): {
          if (delegate.getKeyLeftOf) {
            e.preventDefault();
            const isRTL = direction() === "rtl";
            let nextKey;
            if (focusedKey != null) {
              nextKey = delegate.getKeyLeftOf(focusedKey);
            } else {
              nextKey = isRTL ? delegate.getFirstKey?.() : delegate.getLastKey?.();
            }
            navigateToKey(nextKey);
          }
          break;
        }
        case (orientation() === "vertical" ? "ArrowRight" : "ArrowDown"): {
          if (delegate.getKeyRightOf) {
            e.preventDefault();
            const isRTL = direction() === "rtl";
            let nextKey;
            if (focusedKey != null) {
              nextKey = delegate.getKeyRightOf(focusedKey);
            } else {
              nextKey = isRTL ? delegate.getLastKey?.() : delegate.getFirstKey?.();
            }
            navigateToKey(nextKey);
          }
          break;
        }
        case "Home":
          if (delegate.getFirstKey) {
            e.preventDefault();
            const firstKey = delegate.getFirstKey(focusedKey, isCtrlKeyPressed(e));
            if (firstKey != null) {
              manager.setFocusedKey(firstKey);
              if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") {
                manager.extendSelection(firstKey);
              } else if (selectOnFocus) {
                manager.replaceSelection(firstKey);
              }
            }
          }
          break;
        case "End":
          if (delegate.getLastKey) {
            e.preventDefault();
            const lastKey = delegate.getLastKey(focusedKey, isCtrlKeyPressed(e));
            if (lastKey != null) {
              manager.setFocusedKey(lastKey);
              if (isCtrlKeyPressed(e) && e.shiftKey && manager.selectionMode() === "multiple") {
                manager.extendSelection(lastKey);
              } else if (selectOnFocus) {
                manager.replaceSelection(lastKey);
              }
            }
          }
          break;
        case "PageDown":
          if (delegate.getKeyPageBelow && focusedKey != null) {
            e.preventDefault();
            const nextKey = delegate.getKeyPageBelow(focusedKey);
            navigateToKey(nextKey);
          }
          break;
        case "PageUp":
          if (delegate.getKeyPageAbove && focusedKey != null) {
            e.preventDefault();
            const nextKey = delegate.getKeyPageAbove(focusedKey);
            navigateToKey(nextKey);
          }
          break;
        case "a":
          if (isCtrlKeyPressed(e) && manager.selectionMode() === "multiple" && access$1(mergedProps.disallowSelectAll) !== true) {
            e.preventDefault();
            manager.selectAll();
          }
          break;
        case "Escape":
          if (!e.defaultPrevented) {
            e.preventDefault();
            if (!access$1(mergedProps.disallowEmptySelection)) {
              manager.clearSelection();
            }
          }
          break;
        case "Tab": {
          if (!access$1(mergedProps.allowsTabNavigation)) {
            if (e.shiftKey) {
              refEl.focus();
            } else {
              const walker = getFocusableTreeWalker(refEl, {
                tabbable: true
              });
              let next;
              let last;
              do {
                last = walker.lastChild();
                if (last) {
                  next = last;
                }
              } while (last);
              if (next && !next.contains(document.activeElement)) {
                focusWithoutScrolling(next);
              }
            }
            break;
          }
        }
      }
    };
    const onFocusIn = (e) => {
      const manager = access$1(mergedProps.selectionManager);
      const delegate = access$1(mergedProps.keyboardDelegate);
      const selectOnFocus = access$1(mergedProps.selectOnFocus);
      if (manager.isFocused()) {
        if (!e.currentTarget.contains(e.target)) {
          manager.setFocused(false);
        }
        return;
      }
      if (!e.currentTarget.contains(e.target)) {
        return;
      }
      manager.setFocused(true);
      if (manager.focusedKey() == null) {
        const navigateToFirstKey = (key) => {
          if (key == null) {
            return;
          }
          manager.setFocusedKey(key);
          if (selectOnFocus) {
            manager.replaceSelection(key);
          }
        };
        const relatedTarget = e.relatedTarget;
        if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) {
          navigateToFirstKey(manager.lastSelectedKey() ?? delegate.getLastKey?.());
        } else {
          navigateToFirstKey(manager.firstSelectedKey() ?? delegate.getFirstKey?.());
        }
      } else if (!access$1(mergedProps.isVirtualized)) {
        const scrollEl = finalScrollRef();
        if (scrollEl) {
          scrollEl.scrollTop = scrollPos.top;
          scrollEl.scrollLeft = scrollPos.left;
          const element = scrollEl.querySelector(`[data-key="${manager.focusedKey()}"]`);
          if (element) {
            focusWithoutScrolling(element);
            scrollIntoView(scrollEl, element);
          }
        }
      }
    };
    const onFocusOut = (e) => {
      const manager = access$1(mergedProps.selectionManager);
      if (!e.currentTarget.contains(e.relatedTarget)) {
        manager.setFocused(false);
      }
    };
    const onMouseDown = (e) => {
      if (finalScrollRef() === e.target) {
        e.preventDefault();
      }
    };
    const tryAutoFocus = () => {
      const autoFocus = access$1(mergedProps.autoFocus);
      if (!autoFocus) {
        return;
      }
      const manager = access$1(mergedProps.selectionManager);
      const delegate = access$1(mergedProps.keyboardDelegate);
      let focusedKey;
      if (autoFocus === "first") {
        focusedKey = delegate.getFirstKey?.();
      }
      if (autoFocus === "last") {
        focusedKey = delegate.getLastKey?.();
      }
      const selectedKeys = manager.selectedKeys();
      if (selectedKeys.size) {
        focusedKey = selectedKeys.values().next().value;
      }
      manager.setFocused(true);
      manager.setFocusedKey(focusedKey);
      const refEl = ref();
      if (refEl && focusedKey == null && !access$1(mergedProps.shouldUseVirtualFocus)) {
        focusWithoutScrolling(refEl);
      }
    };
    onMount(() => {
      if (mergedProps.deferAutoFocus) {
        setTimeout(tryAutoFocus, 0);
      } else {
        tryAutoFocus();
      }
    });
    createEffect(on([finalScrollRef, () => access$1(mergedProps.isVirtualized), () => access$1(mergedProps.selectionManager).focusedKey()], (newValue) => {
      const [scrollEl, isVirtualized, focusedKey] = newValue;
      if (isVirtualized) {
        focusedKey && mergedProps.scrollToKey?.(focusedKey);
      } else {
        if (focusedKey && scrollEl) {
          const element = scrollEl.querySelector(`[data-key="${focusedKey}"]`);
          if (element) {
            scrollIntoView(scrollEl, element);
          }
        }
      }
    }));
    const tabIndex = createMemo(() => {
      if (access$1(mergedProps.shouldUseVirtualFocus)) {
        return void 0;
      }
      return access$1(mergedProps.selectionManager).focusedKey() == null ? 0 : -1;
    });
    return {
      tabIndex,
      onKeyDown,
      onMouseDown,
      onFocusIn,
      onFocusOut
    };
  }
  function createSelectableItem(props, ref) {
    const manager = () => access$1(props.selectionManager);
    const key = () => access$1(props.key);
    const shouldUseVirtualFocus = () => access$1(props.shouldUseVirtualFocus);
    const onSelect = (e) => {
      if (manager().selectionMode() === "none") {
        return;
      }
      if (manager().selectionMode() === "single") {
        if (manager().isSelected(key()) && !manager().disallowEmptySelection()) {
          manager().toggleSelection(key());
        } else {
          manager().replaceSelection(key());
        }
      } else if (e?.shiftKey) {
        manager().extendSelection(key());
      } else if (manager().selectionBehavior() === "toggle" || isCtrlKeyPressed(e) || "pointerType" in e && e.pointerType === "touch") {
        manager().toggleSelection(key());
      } else {
        manager().replaceSelection(key());
      }
    };
    const isSelected = () => manager().isSelected(key());
    const isDisabled = () => access$1(props.disabled) || manager().isDisabled(key());
    const allowsSelection = () => !isDisabled() && manager().canSelectItem(key());
    let pointerDownType = null;
    const onPointerDown = (e) => {
      if (!allowsSelection()) {
        return;
      }
      pointerDownType = e.pointerType;
      if (e.pointerType === "mouse" && e.button === 0 && !access$1(props.shouldSelectOnPressUp)) {
        onSelect(e);
      }
    };
    const onPointerUp = (e) => {
      if (!allowsSelection()) {
        return;
      }
      if (e.pointerType === "mouse" && e.button === 0 && access$1(props.shouldSelectOnPressUp) && access$1(props.allowsDifferentPressOrigin)) {
        onSelect(e);
      }
    };
    const onClick = (e) => {
      if (!allowsSelection()) {
        return;
      }
      if (access$1(props.shouldSelectOnPressUp) && !access$1(props.allowsDifferentPressOrigin) || pointerDownType !== "mouse") {
        onSelect(e);
      }
    };
    const onKeyDown = (e) => {
      if (!allowsSelection() || !["Enter", " "].includes(e.key)) {
        return;
      }
      if (isNonContiguousSelectionModifier(e)) {
        manager().toggleSelection(key());
      } else {
        onSelect(e);
      }
    };
    const onMouseDown = (e) => {
      if (isDisabled()) {
        e.preventDefault();
      }
    };
    const onFocus = (e) => {
      const refEl = ref();
      if (shouldUseVirtualFocus() || isDisabled() || !refEl) {
        return;
      }
      if (e.target === refEl) {
        manager().setFocusedKey(key());
      }
    };
    const tabIndex = createMemo(() => {
      if (shouldUseVirtualFocus() || isDisabled()) {
        return void 0;
      }
      return key() === manager().focusedKey() ? 0 : -1;
    });
    const dataKey = createMemo(() => {
      return access$1(props.virtualized) ? void 0 : key();
    });
    createEffect(on([ref, key, shouldUseVirtualFocus, () => manager().focusedKey(), () => manager().isFocused()], ([refEl, key2, shouldUseVirtualFocus2, focusedKey, isFocused]) => {
      if (refEl && key2 === focusedKey && isFocused && !shouldUseVirtualFocus2 && document.activeElement !== refEl) {
        if (props.focus) {
          props.focus();
        } else {
          focusWithoutScrolling(refEl);
        }
      }
    }));
    return {
      isSelected,
      isDisabled,
      allowsSelection,
      tabIndex,
      dataKey,
      onPointerDown,
      onPointerUp,
      onClick,
      onKeyDown,
      onMouseDown,
      onFocus
    };
  }
  var SelectionManager = class {
    collection;
    state;
    constructor(collection, state) {
      this.collection = collection;
      this.state = state;
    }
    /** The type of selection that is allowed in the collection. */
    selectionMode() {
      return this.state.selectionMode();
    }
    /** Whether the collection allows empty selection. */
    disallowEmptySelection() {
      return this.state.disallowEmptySelection();
    }
    /** The selection behavior for the collection. */
    selectionBehavior() {
      return this.state.selectionBehavior();
    }
    /** Sets the selection behavior for the collection. */
    setSelectionBehavior(selectionBehavior) {
      this.state.setSelectionBehavior(selectionBehavior);
    }
    /** Whether the collection is currently focused. */
    isFocused() {
      return this.state.isFocused();
    }
    /** Sets whether the collection is focused. */
    setFocused(isFocused) {
      this.state.setFocused(isFocused);
    }
    /** The current focused key in the collection. */
    focusedKey() {
      return this.state.focusedKey();
    }
    /** Sets the focused key. */
    setFocusedKey(key) {
      if (key == null || this.collection().getItem(key)) {
        this.state.setFocusedKey(key);
      }
    }
    /** The currently selected keys in the collection. */
    selectedKeys() {
      return this.state.selectedKeys();
    }
    /** Returns whether a key is selected. */
    isSelected(key) {
      if (this.state.selectionMode() === "none") {
        return false;
      }
      const retrievedKey = this.getKey(key);
      if (retrievedKey == null) {
        return false;
      }
      return this.state.selectedKeys().has(retrievedKey);
    }
    /** Whether the selection is empty. */
    isEmpty() {
      return this.state.selectedKeys().size === 0;
    }
    /** Whether all items in the collection are selected. */
    isSelectAll() {
      if (this.isEmpty()) {
        return false;
      }
      const selectedKeys = this.state.selectedKeys();
      return this.getAllSelectableKeys().every((k) => selectedKeys.has(k));
    }
    firstSelectedKey() {
      let first;
      for (const key of this.state.selectedKeys()) {
        const item = this.collection().getItem(key);
        const isItemBeforeFirst = item?.index != null && first?.index != null && item.index < first.index;
        if (!first || isItemBeforeFirst) {
          first = item;
        }
      }
      return first?.key;
    }
    lastSelectedKey() {
      let last;
      for (const key of this.state.selectedKeys()) {
        const item = this.collection().getItem(key);
        const isItemAfterLast = item?.index != null && last?.index != null && item.index > last.index;
        if (!last || isItemAfterLast) {
          last = item;
        }
      }
      return last?.key;
    }
    /** Extends the selection to the given key. */
    extendSelection(toKey) {
      if (this.selectionMode() === "none") {
        return;
      }
      if (this.selectionMode() === "single") {
        this.replaceSelection(toKey);
        return;
      }
      const retrievedToKey = this.getKey(toKey);
      if (retrievedToKey == null) {
        return;
      }
      const selectedKeys = this.state.selectedKeys();
      const anchorKey = selectedKeys.anchorKey || retrievedToKey;
      const selection = new Selection(selectedKeys, anchorKey, retrievedToKey);
      for (const key of this.getKeyRange(anchorKey, selectedKeys.currentKey || retrievedToKey)) {
        selection.delete(key);
      }
      for (const key of this.getKeyRange(retrievedToKey, anchorKey)) {
        if (this.canSelectItem(key)) {
          selection.add(key);
        }
      }
      this.state.setSelectedKeys(selection);
    }
    getKeyRange(from, to) {
      const fromItem = this.collection().getItem(from);
      const toItem = this.collection().getItem(to);
      if (fromItem && toItem) {
        if (fromItem.index != null && toItem.index != null && fromItem.index <= toItem.index) {
          return this.getKeyRangeInternal(from, to);
        }
        return this.getKeyRangeInternal(to, from);
      }
      return [];
    }
    getKeyRangeInternal(from, to) {
      const keys = [];
      let key = from;
      while (key != null) {
        const item = this.collection().getItem(key);
        if (item && item.type === "item") {
          keys.push(key);
        }
        if (key === to) {
          return keys;
        }
        key = this.collection().getKeyAfter(key);
      }
      return [];
    }
    getKey(key) {
      const item = this.collection().getItem(key);
      if (!item) {
        return key;
      }
      if (!item || item.type !== "item") {
        return null;
      }
      return item.key;
    }
    /** Toggles whether the given key is selected. */
    toggleSelection(key) {
      if (this.selectionMode() === "none") {
        return;
      }
      if (this.selectionMode() === "single" && !this.isSelected(key)) {
        this.replaceSelection(key);
        return;
      }
      const retrievedKey = this.getKey(key);
      if (retrievedKey == null) {
        return;
      }
      const keys = new Selection(this.state.selectedKeys());
      if (keys.has(retrievedKey)) {
        keys.delete(retrievedKey);
      } else if (this.canSelectItem(retrievedKey)) {
        keys.add(retrievedKey);
        keys.anchorKey = retrievedKey;
        keys.currentKey = retrievedKey;
      }
      if (this.disallowEmptySelection() && keys.size === 0) {
        return;
      }
      this.state.setSelectedKeys(keys);
    }
    /** Replaces the selection with only the given key. */
    replaceSelection(key) {
      if (this.selectionMode() === "none") {
        return;
      }
      const retrievedKey = this.getKey(key);
      if (retrievedKey == null) {
        return;
      }
      const selection = this.canSelectItem(retrievedKey) ? new Selection([retrievedKey], retrievedKey, retrievedKey) : new Selection();
      this.state.setSelectedKeys(selection);
    }
    /** Replaces the selection with the given keys. */
    setSelectedKeys(keys) {
      if (this.selectionMode() === "none") {
        return;
      }
      const selection = new Selection();
      for (const key of keys) {
        const retrievedKey = this.getKey(key);
        if (retrievedKey != null) {
          selection.add(retrievedKey);
          if (this.selectionMode() === "single") {
            break;
          }
        }
      }
      this.state.setSelectedKeys(selection);
    }
    /** Selects all items in the collection. */
    selectAll() {
      if (this.selectionMode() === "multiple") {
        this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()));
      }
    }
    /**
     * Removes all keys from the selection.
     */
    clearSelection() {
      const selectedKeys = this.state.selectedKeys();
      if (!this.disallowEmptySelection() && selectedKeys.size > 0) {
        this.state.setSelectedKeys(new Selection());
      }
    }
    /**
     * Toggles between select all and an empty selection.
     */
    toggleSelectAll() {
      if (this.isSelectAll()) {
        this.clearSelection();
      } else {
        this.selectAll();
      }
    }
    select(key, e) {
      if (this.selectionMode() === "none") {
        return;
      }
      if (this.selectionMode() === "single") {
        if (this.isSelected(key) && !this.disallowEmptySelection()) {
          this.toggleSelection(key);
        } else {
          this.replaceSelection(key);
        }
      } else if (this.selectionBehavior() === "toggle" || e && e.pointerType === "touch") {
        this.toggleSelection(key);
      } else {
        this.replaceSelection(key);
      }
    }
    /** Returns whether the current selection is equal to the given selection. */
    isSelectionEqual(selection) {
      if (selection === this.state.selectedKeys()) {
        return true;
      }
      const selectedKeys = this.selectedKeys();
      if (selection.size !== selectedKeys.size) {
        return false;
      }
      for (const key of selection) {
        if (!selectedKeys.has(key)) {
          return false;
        }
      }
      for (const key of selectedKeys) {
        if (!selection.has(key)) {
          return false;
        }
      }
      return true;
    }
    canSelectItem(key) {
      if (this.state.selectionMode() === "none") {
        return false;
      }
      const item = this.collection().getItem(key);
      return item != null && !item.disabled;
    }
    isDisabled(key) {
      const item = this.collection().getItem(key);
      return !item || item.disabled;
    }
    getAllSelectableKeys() {
      const keys = [];
      const addKeys = (key) => {
        while (key != null) {
          if (this.canSelectItem(key)) {
            const item = this.collection().getItem(key);
            if (!item) {
              continue;
            }
            if (item.type === "item") {
              keys.push(key);
            }
          }
          key = this.collection().getKeyAfter(key);
        }
      };
      addKeys(this.collection().getFirstKey());
      return keys;
    }
  };
  var ListCollection = class {
    keyMap = /* @__PURE__ */ new Map();
    iterable;
    firstKey;
    lastKey;
    constructor(nodes) {
      this.iterable = nodes;
      for (const node of nodes) {
        this.keyMap.set(node.key, node);
      }
      if (this.keyMap.size === 0) {
        return;
      }
      let last;
      let index = 0;
      for (const [key, node] of this.keyMap) {
        if (last) {
          last.nextKey = key;
          node.prevKey = last.key;
        } else {
          this.firstKey = key;
          node.prevKey = void 0;
        }
        if (node.type === "item") {
          node.index = index++;
        }
        last = node;
        last.nextKey = void 0;
      }
      this.lastKey = last.key;
    }
    *[Symbol.iterator]() {
      yield* this.iterable;
    }
    getSize() {
      return this.keyMap.size;
    }
    getKeys() {
      return this.keyMap.keys();
    }
    getKeyBefore(key) {
      return this.keyMap.get(key)?.prevKey;
    }
    getKeyAfter(key) {
      return this.keyMap.get(key)?.nextKey;
    }
    getFirstKey() {
      return this.firstKey;
    }
    getLastKey() {
      return this.lastKey;
    }
    getItem(key) {
      return this.keyMap.get(key);
    }
    at(idx) {
      const keys = [...this.getKeys()];
      return this.getItem(keys[idx]);
    }
  };
  function createListState(props) {
    const selectionState = createMultipleSelectionState(props);
    const factory = (nodes) => {
      return props.filter ? new ListCollection(props.filter(nodes)) : new ListCollection(nodes);
    };
    const collection = createCollection({
      dataSource: () => access$1(props.dataSource),
      getKey: () => access$1(props.getKey),
      getTextValue: () => access$1(props.getTextValue),
      getDisabled: () => access$1(props.getDisabled),
      getSectionChildren: () => access$1(props.getSectionChildren),
      factory
    }, [() => props.filter]);
    const selectionManager = new SelectionManager(collection, selectionState);
    createComputed(() => {
      const focusedKey = selectionState.focusedKey();
      if (focusedKey != null && !collection().getItem(focusedKey)) {
        selectionState.setFocusedKey(void 0);
      }
    });
    return {
      collection,
      selectionManager: () => selectionManager
    };
  }

  var DomCollectionContext = createContext();
  function useOptionalDomCollectionContext() {
    return useContext(DomCollectionContext);
  }
  function useDomCollectionContext() {
    const context = useOptionalDomCollectionContext();
    if (context === void 0) {
      throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");
    }
    return context;
  }
  function isElementPreceding(a, b) {
    return Boolean(b.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_PRECEDING);
  }
  function findDOMIndex(items, item) {
    const itemEl = item.ref();
    if (!itemEl) {
      return -1;
    }
    let length = items.length;
    if (!length) {
      return -1;
    }
    while (length--) {
      const currentItemEl = items[length]?.ref();
      if (!currentItemEl) {
        continue;
      }
      if (isElementPreceding(currentItemEl, itemEl)) {
        return length + 1;
      }
    }
    return 0;
  }
  function sortBasedOnDOMPosition(items) {
    const pairs = items.map((item, index) => [index, item]);
    let isOrderDifferent = false;
    pairs.sort(([indexA, a], [indexB, b]) => {
      const elementA = a.ref();
      const elementB = b.ref();
      if (elementA === elementB) {
        return 0;
      }
      if (!elementA || !elementB) {
        return 0;
      }
      if (isElementPreceding(elementA, elementB)) {
        if (indexA > indexB) {
          isOrderDifferent = true;
        }
        return -1;
      }
      if (indexA < indexB) {
        isOrderDifferent = true;
      }
      return 1;
    });
    if (isOrderDifferent) {
      return pairs.map(([_, item]) => item);
    }
    return items;
  }
  function setItemsBasedOnDOMPosition(items, setItems) {
    const sortedItems = sortBasedOnDOMPosition(items);
    if (items !== sortedItems) {
      setItems(sortedItems);
    }
  }
  function getCommonParent(items) {
    const firstItem = items[0];
    const lastItemEl = items[items.length - 1]?.ref();
    let parentEl = firstItem?.ref()?.parentElement;
    while (parentEl) {
      if (lastItemEl && parentEl.contains(lastItemEl)) {
        return parentEl;
      }
      parentEl = parentEl.parentElement;
    }
    return getDocument(parentEl).body;
  }
  function createTimeoutObserver(items, setItems) {
    createEffect(() => {
      const timeout = setTimeout(() => {
        setItemsBasedOnDOMPosition(items(), setItems);
      });
      onCleanup(() => clearTimeout(timeout));
    });
  }
  function createSortBasedOnDOMPosition(items, setItems) {
    if (typeof IntersectionObserver !== "function") {
      createTimeoutObserver(items, setItems);
      return;
    }
    let previousItems = [];
    createEffect(() => {
      const callback = () => {
        const hasPreviousItems = !!previousItems.length;
        previousItems = items();
        if (!hasPreviousItems) {
          return;
        }
        setItemsBasedOnDOMPosition(items(), setItems);
      };
      const root = getCommonParent(items());
      const observer = new IntersectionObserver(callback, {
        root
      });
      for (const item of items()) {
        const itemEl = item.ref();
        if (itemEl) {
          observer.observe(itemEl);
        }
      }
      onCleanup(() => observer.disconnect());
    });
  }
  function createDomCollection(props = {}) {
    const [items, setItems] = createControllableArraySignal({
      value: () => access$1(props.items),
      onChange: (value) => props.onItemsChange?.(value)
    });
    createSortBasedOnDOMPosition(items, setItems);
    const registerItem = (item) => {
      setItems((prevItems) => {
        const index = findDOMIndex(prevItems, item);
        return addItemToArray(prevItems, item, index);
      });
      return () => {
        setItems((prevItems) => {
          const nextItems = prevItems.filter((prevItem) => prevItem.ref() !== item.ref());
          if (prevItems.length === nextItems.length) {
            return prevItems;
          }
          return nextItems;
        });
      };
    };
    const DomCollectionProvider = (props2) => {
      return createComponent(DomCollectionContext.Provider, {
        value: {
          registerItem
        },
        get children() {
          return props2.children;
        }
      });
    };
    return {
      DomCollectionProvider
    };
  }
  function createDomCollectionItem(props) {
    const context = useDomCollectionContext();
    const mergedProps = mergeDefaultProps({
      shouldRegisterItem: true
    }, props);
    createEffect(() => {
      if (!mergedProps.shouldRegisterItem) {
        return;
      }
      const unregister = context.registerItem(mergedProps.getItem());
      onCleanup(unregister);
    });
  }

  var toggle_group_exports = {};
  __export(toggle_group_exports, {
    Item: () => ToggleGroupItem,
    Root: () => ToggleGroup,
    ToggleGroup: () => ToggleGroup2
  });
  var ToggleGroupContext = createContext();
  function useToggleGroupContext() {
    const context = useContext(ToggleGroupContext);
    if (context === void 0) {
      throw new Error("[kobalte]: `useToggleGroupContext` must be used within a `ToggleGroup` component");
    }
    return context;
  }
  function ToggleGroupItem(props) {
    let ref;
    const rootContext = useToggleGroupContext();
    const defaultID = rootContext.generateId(`item-${createUniqueId()}`);
    const mergedProps = mergeDefaultProps({
      id: defaultID
    }, props);
    const [local, others] = splitProps(mergedProps, ["ref", "value", "disabled", "onPointerDown", "onPointerUp", "onClick", "onKeyDown", "onMouseDown", "onFocus"]);
    const selectionManager = () => rootContext.listState().selectionManager();
    const isDisabled = () => rootContext.isDisabled() || local.disabled;
    createDomCollectionItem({
      getItem: () => ({
        ref: () => ref,
        type: "item",
        key: local.value,
        textValue: "",
        disabled: local.disabled || rootContext.isDisabled()
      })
    });
    const selectableItem = createSelectableItem({
      key: () => local.value,
      selectionManager,
      disabled: local.disabled || rootContext.isDisabled()
    }, () => ref);
    const onKeyDown = (e) => {
      if (["Enter", " "].includes(e.key)) {
        e.preventDefault();
      }
      callHandler(e, local.onKeyDown);
      callHandler(e, selectableItem.onKeyDown);
    };
    return createComponent(ToggleButtonRoot, mergeProps({
      ref(r$) {
        var _ref$ = mergeRefs((el) => ref = el, local.ref);
        typeof _ref$ === "function" && _ref$(r$);
      },
      get pressed() {
        return selectionManager().isSelected(local.value);
      },
      get tabIndex() {
        return selectableItem.tabIndex();
      },
      get ["data-orientation"]() {
        return rootContext.orientation();
      },
      get disabled() {
        return isDisabled();
      },
      get onPointerDown() {
        return composeEventHandlers([local.onPointerDown, selectableItem.onPointerDown]);
      },
      get onPointerUp() {
        return composeEventHandlers([local.onPointerUp, selectableItem.onPointerUp]);
      },
      get onClick() {
        return composeEventHandlers([local.onClick, selectableItem.onClick]);
      },
      onKeyDown,
      get onMouseDown() {
        return composeEventHandlers([local.onMouseDown, selectableItem.onMouseDown]);
      },
      get onFocus() {
        return composeEventHandlers([local.onFocus, selectableItem.onFocus]);
      }
    }, others));
  }
  function ToggleGroupBase(props) {
    let ref;
    const defaultId = `group-${createUniqueId()}`;
    const mergedProps = mergeDefaultProps({
      id: defaultId,
      selectionMode: "single",
      orientation: "horizontal"
    }, props);
    const [local, others] = splitProps(mergedProps, ["ref", "value", "defaultValue", "disabled", "orientation", "selectionMode", "onChange", "onKeyDown", "onMouseDown", "onFocusIn", "onFocusOut"]);
    const [items, setItems] = createSignal([]);
    const {
      DomCollectionProvider
    } = createDomCollection({
      items,
      onItemsChange: setItems
    });
    const listState = createListState({
      selectedKeys: () => local.value,
      defaultSelectedKeys: () => local.defaultValue,
      onSelectionChange: (key) => local.onChange?.(Array.from(key)),
      disallowEmptySelection: false,
      selectionMode: () => local.selectionMode,
      dataSource: items
    });
    const {
      direction
    } = useLocale();
    const delegate = new TabsKeyboardDelegate(() => context.listState().collection(), direction, () => local.orientation);
    const selectableList = createSelectableCollection({
      selectionManager: () => listState.selectionManager(),
      keyboardDelegate: () => delegate,
      disallowEmptySelection: () => listState.selectionManager().disallowEmptySelection(),
      disallowTypeAhead: true
    }, () => ref);
    const context = {
      listState: () => listState,
      isDisabled: () => local.disabled ?? false,
      isMultiple: () => local.selectionMode === "multiple",
      generateId: createGenerateId(() => others.id),
      orientation: () => local.orientation
    };
    return createComponent(DomCollectionProvider, {
      get children() {
        return createComponent(ToggleGroupContext.Provider, {
          value: context,
          get children() {
            return createComponent(Polymorphic, mergeProps({
              as: "div",
              role: "group",
              ref(r$) {
                var _ref$2 = mergeRefs((el) => ref = el, local.ref);
                typeof _ref$2 === "function" && _ref$2(r$);
              },
              get tabIndex() {
                return memo(() => !!!local.disabled)() ? selectableList.tabIndex() : void 0;
              },
              get ["data-orientation"]() {
                return local.orientation;
              },
              get onKeyDown() {
                return composeEventHandlers([local.onKeyDown, selectableList.onKeyDown]);
              },
              get onMouseDown() {
                return composeEventHandlers([local.onMouseDown, selectableList.onMouseDown]);
              },
              get onFocusIn() {
                return composeEventHandlers([local.onFocusIn, selectableList.onFocusIn]);
              },
              get onFocusOut() {
                return composeEventHandlers([local.onFocusOut, selectableList.onFocusOut]);
              }
            }, others));
          }
        });
      }
    });
  }
  function ToggleGroup(props) {
    const [local, others] = splitProps(props, ["value", "defaultValue", "onChange", "multiple"]);
    const value = createMemo(() => {
      if (local.value != null) {
        return local.multiple ? local.value : [local.value];
      }
      return local.value;
    });
    const defaultValue = createMemo(() => {
      if (local.defaultValue != null) {
        return local.multiple ? local.defaultValue : [local.defaultValue];
      }
      return local.defaultValue;
    });
    const onChange = (value2) => {
      if (local.multiple) {
        local.onChange?.(value2);
      } else {
        local.onChange?.(value2[0] ?? null);
      }
    };
    return createComponent(ToggleGroupBase, mergeProps({
      get value() {
        return value();
      },
      get defaultValue() {
        return defaultValue();
      },
      onChange,
      get selectionMode() {
        return local.multiple ? "multiple" : "single";
      }
    }, others));
  }
  var ToggleGroup2 = Object.assign(ToggleGroup, {
    Item: ToggleGroupItem
  });

  const BtnGroup = (props) => {
    const groupClass = "e:flex e:bg-black e:border e:border-black-300 e:divide-x e:divide-black-300 e:overflow-hidden";
    const commonClass = "e:text-white e:outline-none e:flex e:justify-center e:items-center ui-pressed:e:bg-black-300 ui-pressed:e:text-black ";
    return createComponent(ToggleGroup2, {
      get value() {
        return props.value;
      },
      get onChange() {
        return props.onChange;
      },
      get ["class"]() {
        return cn(groupClass);
      },
      get children() {
        return createComponent(For, {
          get each() {
            return props.items;
          },
          children: (item) => {
            return createComponent(ToggleGroup2.Item, {
              get ["class"]() {
                return cn(commonClass, props.itemCN);
              },
              get value() {
                return item.value;
              },
              get ["aria-label"]() {
                return item.value;
              },
              get children() {
                return createComponent(Typography, {
                  get color() {
                    return TextColor.inherit;
                  },
                  get children() {
                    return item.label;
                  }
                });
              }
            });
          }
        });
      }
    });
  };

  var IColor = /* @__PURE__ */ ((IColor2) => {
    IColor2["green"] = "green";
    IColor2["red"] = "red";
    IColor2["grey"] = "grey";
    return IColor2;
  })(IColor || {});
  var PaperColor = /* @__PURE__ */ ((PaperColor2) => {
    PaperColor2["black"] = "black";
    PaperColor2["green"] = "green";
    PaperColor2["red"] = "red";
    return PaperColor2;
  })(PaperColor || {});

  var _tmpl$$r = /* @__PURE__ */ template(`<div>`);
  const Paper = (props) => {
    const commonClasses = "e:border";
    const color = {
      ["e:bg-black ebrd-black-100 e:border-black-100"]: props.color === PaperColor.black || !props.color,
      ["e:bg-green-50 e:border-green-200 ebrd-green-200"]: props.color === PaperColor.green,
      ["e:bg-red-50 e:border-red-200 ebrd-red-200"]: props.color === PaperColor.red
    };
    const p = {
      "e:px-8 e:py-8": !props.p,
      [`e:px-${props.p} e:py-${props.p} epx${props.p} epy${props.p}`]: props.p
    };
    return (() => {
      var _el$ = _tmpl$$r();
      insert(_el$, () => props.children);
      createRenderEffect(() => className(_el$, cn(commonClasses, p, color, props.cn)));
      return _el$;
    })();
  };

  var LIVEREGION_TIMEOUT_DELAY = 7e3;
  var liveAnnouncer = null;
  function announce(message, assertiveness = "assertive", timeout = LIVEREGION_TIMEOUT_DELAY) {
    if (!liveAnnouncer) {
      liveAnnouncer = new LiveAnnouncer();
    }
    liveAnnouncer.announce(message, assertiveness, timeout);
  }
  function clearAnnouncer(assertiveness) {
    if (liveAnnouncer) {
      liveAnnouncer.clear(assertiveness);
    }
  }
  var LiveAnnouncer = class {
    node;
    assertiveLog;
    politeLog;
    constructor() {
      this.node = document.createElement("div");
      this.node.dataset.liveAnnouncer = "true";
      Object.assign(this.node.style, visuallyHiddenStyles);
      this.assertiveLog = this.createLog("assertive");
      this.node.appendChild(this.assertiveLog);
      this.politeLog = this.createLog("polite");
      this.node.appendChild(this.politeLog);
      document.body.prepend(this.node);
    }
    createLog(ariaLive) {
      const node = document.createElement("div");
      node.setAttribute("role", "log");
      node.setAttribute("aria-live", ariaLive);
      node.setAttribute("aria-relevant", "additions");
      return node;
    }
    destroy() {
      if (!this.node) {
        return;
      }
      document.body.removeChild(this.node);
      this.node = null;
    }
    announce(message, assertiveness = "assertive", timeout = LIVEREGION_TIMEOUT_DELAY) {
      if (!this.node) {
        return;
      }
      const node = document.createElement("div");
      node.textContent = message;
      if (assertiveness === "assertive") {
        this.assertiveLog.appendChild(node);
      } else {
        this.politeLog.appendChild(node);
      }
      if (message !== "") {
        setTimeout(() => {
          node.remove();
        }, timeout);
      }
    }
    clear(assertiveness) {
      if (!this.node) {
        return;
      }
      if (!assertiveness || assertiveness === "assertive") {
        this.assertiveLog.innerHTML = "";
      }
      if (!assertiveness || assertiveness === "polite") {
        this.politeLog.innerHTML = "";
      }
    }
  };

  var SPIN_BUTTON_INTL_TRANSLATIONS = {
    // Used for voice over when text value is empty
    empty: "Empty"
  };
  function SpinButtonRoot(props) {
    const mergedProps = mergeDefaultProps({
      translations: SPIN_BUTTON_INTL_TRANSLATIONS
    }, props);
    const [local, others] = splitProps(mergedProps, ["style", "translations", "value", "textValue", "minValue", "maxValue", "validationState", "onIncrement", "onIncrementPage", "onDecrement", "onDecrementPage", "onDecrementToMin", "onIncrementToMax", "onKeyDown", "onFocus", "onBlur"]);
    let isFocused = false;
    const textValue = createMemo(() => {
      if (local.textValue === "") {
        return local.translations?.empty;
      }
      return (local.textValue || `${local.value}`).replace("-", "−");
    });
    const onKeyDown = (e) => {
      callHandler(e, local.onKeyDown);
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || props.readOnly) {
        return;
      }
      switch (e.key) {
        case "PageUp":
          if (local.onIncrementPage) {
            e.preventDefault();
            local.onIncrementPage();
            break;
          }
        case "ArrowUp":
        case "Up":
          if (local.onIncrement) {
            e.preventDefault();
            local.onIncrement();
          }
          break;
        case "PageDown":
          if (local.onDecrementPage) {
            e.preventDefault();
            local.onDecrementPage();
            break;
          }
        case "ArrowDown":
        case "Down":
          if (local.onDecrement) {
            e.preventDefault();
            local.onDecrement();
          }
          break;
        case "Home":
          if (local.onDecrementToMin) {
            e.preventDefault();
            local.onDecrementToMin();
          }
          break;
        case "End":
          if (local.onIncrementToMax) {
            e.preventDefault();
            local.onIncrementToMax();
          }
          break;
      }
    };
    const onFocus = (e) => {
      callHandler(e, local.onFocus);
      isFocused = true;
    };
    const onBlur = (e) => {
      callHandler(e, local.onBlur);
      isFocused = false;
    };
    createEffect(on(textValue, (textValue2) => {
      if (isFocused) {
        clearAnnouncer("assertive");
        announce(textValue2 ?? "", "assertive");
      }
    }));
    return createComponent(Polymorphic, mergeProps({
      as: "div",
      role: "spinbutton",
      get style() {
        return combineStyle({
          "touch-action": "none"
        }, local.style);
      },
      get ["aria-valuenow"]() {
        return local.value != null && !Number.isNaN(local.value) ? local.value : void 0;
      },
      get ["aria-valuetext"]() {
        return textValue();
      },
      get ["aria-valuemin"]() {
        return local.minValue;
      },
      get ["aria-valuemax"]() {
        return local.maxValue;
      },
      get ["aria-required"]() {
        return props.required || void 0;
      },
      get ["aria-disabled"]() {
        return props.disabled || void 0;
      },
      get ["aria-readonly"]() {
        return props.readOnly || void 0;
      },
      get ["aria-invalid"]() {
        return local.validationState === "invalid" || void 0;
      },
      onKeyDown,
      onFocus,
      onBlur
    }, others));
  }

  function createRegisterId(setter) {
    return (id) => {
      setter(id);
      return () => setter(void 0);
    };
  }

  var FORM_CONTROL_PROP_NAMES = ["id", "name", "validationState", "required", "disabled", "readOnly"];
  function createFormControl(props) {
    const defaultId = `form-control-${createUniqueId()}`;
    const mergedProps = mergeDefaultProps({
      id: defaultId
    }, props);
    const [labelId, setLabelId] = createSignal();
    const [fieldId, setFieldId] = createSignal();
    const [descriptionId, setDescriptionId] = createSignal();
    const [errorMessageId, setErrorMessageId] = createSignal();
    const getAriaLabelledBy = (fieldId2, fieldAriaLabel, fieldAriaLabelledBy) => {
      const hasAriaLabelledBy = fieldAriaLabelledBy != null || labelId() != null;
      return [
        fieldAriaLabelledBy,
        labelId(),
        // If there is both an aria-label and aria-labelledby, add the field itself has an aria-labelledby
        hasAriaLabelledBy && fieldAriaLabel != null ? fieldId2 : void 0
      ].filter(Boolean).join(" ") || void 0;
    };
    const getAriaDescribedBy = (fieldAriaDescribedBy) => {
      return [
        descriptionId(),
        // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA.
        // See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
        errorMessageId(),
        fieldAriaDescribedBy
      ].filter(Boolean).join(" ") || void 0;
    };
    const dataset = createMemo(() => ({
      "data-valid": access$1(mergedProps.validationState) === "valid" ? "" : void 0,
      "data-invalid": access$1(mergedProps.validationState) === "invalid" ? "" : void 0,
      "data-required": access$1(mergedProps.required) ? "" : void 0,
      "data-disabled": access$1(mergedProps.disabled) ? "" : void 0,
      "data-readonly": access$1(mergedProps.readOnly) ? "" : void 0
    }));
    const formControlContext = {
      name: () => access$1(mergedProps.name) ?? access$1(mergedProps.id),
      dataset,
      validationState: () => access$1(mergedProps.validationState),
      isRequired: () => access$1(mergedProps.required),
      isDisabled: () => access$1(mergedProps.disabled),
      isReadOnly: () => access$1(mergedProps.readOnly),
      labelId,
      fieldId,
      descriptionId,
      errorMessageId,
      getAriaLabelledBy,
      getAriaDescribedBy,
      generateId: createGenerateId(() => access$1(mergedProps.id)),
      registerLabel: createRegisterId(setLabelId),
      registerField: createRegisterId(setFieldId),
      registerDescription: createRegisterId(setDescriptionId),
      registerErrorMessage: createRegisterId(setErrorMessageId)
    };
    return {
      formControlContext
    };
  }
  var FormControlContext = createContext();
  function useFormControlContext() {
    const context = useContext(FormControlContext);
    if (context === void 0) {
      throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");
    }
    return context;
  }
  function FormControlDescription(props) {
    const context = useFormControlContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("description")
    }, props);
    createEffect(() => onCleanup(context.registerDescription(mergedProps.id)));
    return createComponent(Polymorphic, mergeProps({
      as: "div"
    }, () => context.dataset(), mergedProps));
  }

  var FORM_CONTROL_FIELD_PROP_NAMES = ["id", "aria-label", "aria-labelledby", "aria-describedby"];
  function createFormControlField(props) {
    const context = useFormControlContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("field")
    }, props);
    createEffect(() => onCleanup(context.registerField(access$1(mergedProps.id))));
    return {
      fieldProps: {
        id: () => access$1(mergedProps.id),
        ariaLabel: () => access$1(mergedProps["aria-label"]),
        ariaLabelledBy: () => context.getAriaLabelledBy(access$1(mergedProps.id), access$1(mergedProps["aria-label"]), access$1(mergedProps["aria-labelledby"])),
        ariaDescribedBy: () => context.getAriaDescribedBy(access$1(mergedProps["aria-describedby"]))
      }
    };
  }

  function FormControlLabel(props) {
    let ref;
    const context = useFormControlContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("label")
    }, props);
    const [local, others] = splitProps(mergedProps, ["ref"]);
    const tagName = createTagName(() => ref, () => "label");
    createEffect(() => onCleanup(context.registerLabel(others.id)));
    return createComponent(Polymorphic, mergeProps({
      as: "label",
      ref(r$) {
        var _ref$ = mergeRefs((el) => ref = el, local.ref);
        typeof _ref$ === "function" && _ref$(r$);
      },
      get ["for"]() {
        return memo(() => tagName() === "label")() ? context.fieldId() : void 0;
      }
    }, () => context.dataset(), others));
  }

  function createFormResetListener(element, handler) {
    createEffect(on(element, (element2) => {
      if (element2 == null) {
        return;
      }
      const form = getClosestForm(element2);
      if (form == null) {
        return;
      }
      form.addEventListener("reset", handler, {
        passive: true
      });
      onCleanup(() => {
        form.removeEventListener("reset", handler);
      });
    }));
  }
  function getClosestForm(element) {
    return isFormElement(element) ? element.form : element.closest("form");
  }
  function isFormElement(element) {
    return element.matches("textarea, input, select, button");
  }

  function FormControlErrorMessage(props) {
    const context = useFormControlContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("error-message")
    }, props);
    const [local, others] = splitProps(mergedProps, ["forceMount"]);
    const isInvalid = () => context.validationState() === "invalid";
    createEffect(() => {
      if (!isInvalid()) {
        return;
      }
      onCleanup(context.registerErrorMessage(others.id));
    });
    return createComponent(Show, {
      get when() {
        return local.forceMount || isInvalid();
      },
      get children() {
        return createComponent(Polymorphic, mergeProps({
          as: "div"
        }, () => context.dataset(), others));
      }
    });
  }

  var _tmpl$$q = /* @__PURE__ */ template(`<div aria-hidden=true><input type=text tabindex=-1>`);
  var number_field_exports = {};
  __export(number_field_exports, {
    DecrementTrigger: () => NumberFieldDecrementTrigger,
    Description: () => FormControlDescription,
    ErrorMessage: () => FormControlErrorMessage,
    HiddenInput: () => NumberFieldHiddenInput,
    IncrementTrigger: () => NumberFieldIncrementTrigger,
    Input: () => NumberFieldInput,
    Label: () => FormControlLabel,
    NumberField: () => NumberField,
    Root: () => NumberFieldRoot
  });
  var NumberFieldContext = createContext();
  function useNumberFieldContext() {
    const context = useContext(NumberFieldContext);
    if (context === void 0) {
      throw new Error("[kobalte]: `useNumberFieldContext` must be used within a `NumberField` component");
    }
    return context;
  }
  function NumberFieldVaryTrigger(props) {
    const formControlContext = useFormControlContext();
    const context = useNumberFieldContext();
    const [local, others] = splitProps(props, ["numberFieldVaryType", "onClick"]);
    return createComponent(ButtonRoot, mergeProps({
      tabIndex: -1,
      get disabled() {
        return formControlContext.isDisabled() || context.rawValue() === (local.numberFieldVaryType === "increment" ? context.maxValue() : context.minValue());
      },
      get ["aria-controls"]() {
        return formControlContext.fieldId();
      },
      onClick: (e) => {
        callHandler(e, local.onClick);
        context.varyValue(context.step() * (local.numberFieldVaryType === "increment" ? 1 : -1));
        context.inputRef()?.focus();
      }
    }, others));
  }
  function NumberFieldDecrementTrigger(props) {
    return createComponent(NumberFieldVaryTrigger, mergeProps({
      numberFieldVaryType: "decrement"
    }, props));
  }
  function NumberFieldHiddenInput(props) {
    const context = useNumberFieldContext();
    const [local, others] = splitProps(props, ["ref", "onChange"]);
    const formControlContext = useFormControlContext();
    return (() => {
      var _el$ = _tmpl$$q(), _el$2 = _el$.firstChild;
      _el$2.addEventListener("change", (e) => {
        callHandler(e, local.onChange);
        batch(() => {
          context.setValue(e.target.value);
          context.format();
        });
      });
      var _ref$ = mergeRefs(context.setHiddenInputRef, local.ref);
      typeof _ref$ === "function" && use(_ref$, _el$2);
      _el$2.style.setProperty("font-size", "16px");
      spread(_el$2, mergeProps({
        get name() {
          return formControlContext.name();
        },
        get value() {
          return memo(() => !!Number.isNaN(context.rawValue()))() ? "" : context.rawValue();
        },
        get required() {
          return formControlContext.isRequired();
        },
        get disabled() {
          return formControlContext.isDisabled();
        },
        get readOnly() {
          return formControlContext.isReadOnly();
        }
      }, others), false, false);
      createRenderEffect((_$p) => style(_el$, visuallyHiddenStyles, _$p));
      return _el$;
    })();
  }
  function NumberFieldIncrementTrigger(props) {
    return createComponent(NumberFieldVaryTrigger, mergeProps({
      numberFieldVaryType: "increment"
    }, props));
  }
  function NumberFieldInput(props) {
    const formControlContext = useFormControlContext();
    const context = useNumberFieldContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("input"),
      inputMode: "decimal",
      autocomplete: "off",
      autocorrect: "off",
      spellcheck: false
    }, props);
    const [local, formControlFieldProps, others] = splitProps(mergedProps, ["ref", "onInput", "onChange", "onWheel", "as"], FORM_CONTROL_FIELD_PROP_NAMES);
    const {
      fieldProps
    } = createFormControlField(formControlFieldProps);
    return createComponent(SpinButtonRoot, mergeProps({
      type: "text",
      get id() {
        return fieldProps.id();
      },
      ref(r$) {
        var _ref$2 = mergeRefs(context.setInputRef, local.ref);
        typeof _ref$2 === "function" && _ref$2(r$);
      },
      get value() {
        return context.value();
      },
      get validationState() {
        return formControlContext.validationState();
      },
      get required() {
        return formControlContext.isRequired();
      },
      get disabled() {
        return formControlContext.isDisabled();
      },
      get readOnly() {
        return formControlContext.isReadOnly();
      },
      get textValue() {
        return context.textValue();
      },
      get minValue() {
        return context.minValue();
      },
      get maxValue() {
        return context.maxValue();
      },
      onIncrement: () => {
        context.varyValue(context.step());
      },
      onIncrementPage: () => {
        context.varyValue(context.largeStep());
      },
      onIncrementToMax: () => {
        context.setValue(context.maxValue());
        context.format();
      },
      onDecrement: () => {
        context.varyValue(-context.step());
      },
      onDecrementPage: () => {
        context.varyValue(-context.largeStep());
      },
      onDecrementToMin: () => {
        context.setValue(context.minValue());
        context.format();
      },
      get translations() {
        return context.translations();
      },
      onChange: (e) => {
        callHandler(e, local.onChange);
        context.format();
      },
      onWheel: (e) => {
        callHandler(e, local.onWheel);
        if (!context.changeOnWheel() || document.activeElement !== context.inputRef()) return;
        e.preventDefault();
        if (e.deltaY < 0) context.varyValue(context.step());
        else context.varyValue(-context.step());
      },
      get onInput() {
        return composeEventHandlers([local.onInput, context.onInput]);
      },
      get ["aria-label"]() {
        return fieldProps.ariaLabel();
      },
      get ["aria-labelledby"]() {
        return fieldProps.ariaLabelledBy();
      },
      get ["aria-describedby"]() {
        return fieldProps.ariaDescribedBy();
      }
    }, () => formControlContext.dataset(), {
      as: (props2) => createComponent(Polymorphic, mergeProps({
        get as() {
          return local.as || "input";
        },
        get value() {
          return memo(() => !!(Number.isNaN(context.rawValue()) || context.value() === void 0))() ? "" : context.formatNumber(context.rawValue());
        },
        get required() {
          return formControlContext.isRequired();
        },
        get disabled() {
          return formControlContext.isDisabled();
        },
        get readOnly() {
          return formControlContext.isReadOnly();
        }
      }, props2, others))
    }));
  }
  function NumberFieldRoot(props) {
    let ref;
    const defaultId = `NumberField-${createUniqueId()}`;
    const mergedProps = mergeDefaultProps({
      id: defaultId,
      format: true,
      minValue: Number.MIN_SAFE_INTEGER,
      maxValue: Number.MAX_SAFE_INTEGER,
      step: 1,
      changeOnWheel: true
    }, props);
    const [local, formControlProps, others] = splitProps(mergedProps, ["ref", "value", "defaultValue", "onChange", "rawValue", "onRawValueChange", "translations", "format", "formatOptions", "textValue", "minValue", "maxValue", "step", "largeStep", "changeOnWheel", "translations", "allowedInput"], FORM_CONTROL_PROP_NAMES);
    const {
      locale
    } = useLocale();
    const numberParser = createMemo(() => {
      return new $6c7bd7858deea686$export$cd11ab140839f11d(locale(), local.formatOptions);
    });
    const numberFormatter = createMemo(() => {
      return new $488c6ddbf4ef74c2$export$cc77c4ff7e8673c5(locale(), local.formatOptions);
    });
    const formatNumber = (number) => local.format ? numberFormatter().format(number) : number.toString();
    const parseRawValue = (value2) => local.format && typeof value2 !== "number" ? numberParser().parse(value2 ?? "") : Number(value2 ?? "");
    const isValidPartialValue = (value2) => local.format && typeof value2 !== "number" ? numberParser().isValidPartialNumber(value2 ?? "", mergedProps.minValue, mergedProps.maxValue) : !Number.isNaN(Number(value2));
    const [value, setValue] = createControllableSignal({
      value: () => local.value,
      defaultValue: () => local.defaultValue ?? local.rawValue,
      onChange: (value2) => {
        local.onChange?.(typeof value2 === "number" ? formatNumber(value2) : value2);
        local.onRawValueChange?.(parseRawValue(value2));
      }
    });
    if (value() !== void 0) local.onRawValueChange?.(parseRawValue(value()));
    function isAllowedInput(char) {
      if (local.allowedInput !== void 0) return local.allowedInput.test(char);
      return true;
    }
    const {
      formControlContext
    } = createFormControl(formControlProps);
    createFormResetListener(() => ref, () => {
      setValue(local.defaultValue ?? "");
    });
    const [inputRef, setInputRef] = createSignal();
    const [hiddenInputRef, setHiddenInputRef] = createSignal();
    const onInput = (e) => {
      if (formControlContext.isReadOnly() || formControlContext.isDisabled()) {
        return;
      }
      const target = e.target;
      let cursorPosition = target.selectionStart;
      if (isValidPartialValue(target.value)) {
        if (e.inputType !== "insertText" || isAllowedInput(e.data || "")) {
          setValue(target.value);
        }
      } else {
        if (e.inputType === "deleteContentBackward") {
          if (cursorPosition !== null) cursorPosition += 1;
        }
      }
      const v = value();
      if (v !== target.value) {
        target.value = String(v ?? "");
        if (cursorPosition !== null) {
          target.selectionStart = cursorPosition;
          target.selectionEnd = cursorPosition;
        }
      }
    };
    const context = {
      value,
      setValue,
      rawValue: () => parseRawValue(value()),
      generateId: createGenerateId(() => access$1(formControlProps.id)),
      formatNumber,
      format: () => {
        if (!local.format) return;
        let rawValue = context.rawValue();
        if (Number.isNaN(rawValue)) {
          if (hiddenInputRef()) hiddenInputRef().value = "";
          local.onRawValueChange?.(rawValue);
          return;
        }
        if (context.minValue()) rawValue = Math.max(rawValue, context.minValue());
        if (context.maxValue()) rawValue = Math.min(rawValue, context.maxValue());
        const formattedValue = context.formatNumber(rawValue);
        if (value() != formattedValue) setValue(formattedValue);
        if (inputRef()) inputRef().value = formattedValue;
        if (hiddenInputRef()) hiddenInputRef().value = String(rawValue);
      },
      onInput,
      textValue: () => local.textValue,
      minValue: () => local.minValue,
      maxValue: () => local.maxValue,
      step: () => local.step,
      largeStep: () => local.largeStep ?? local.step * 10,
      changeOnWheel: () => local.changeOnWheel,
      translations: () => local.translations,
      inputRef,
      setInputRef,
      hiddenInputRef,
      setHiddenInputRef,
      varyValue: (offset) => {
        let rawValue = context.rawValue() ?? 0;
        if (Number.isNaN(rawValue)) rawValue = 0;
        batch(() => {
          let newValue = rawValue;
          const operation = offset > 0 ? "+" : "-";
          const localStep = Math.abs(offset);
          const min = props.minValue === void 0 ? Number.NaN : context.minValue();
          const max = props.maxValue === void 0 ? Number.NaN : context.maxValue();
          newValue = snapValueToStep(rawValue, min, max, localStep);
          if (!(operation === "+" && newValue > rawValue || operation === "-" && newValue < rawValue)) {
            newValue = snapValueToStep(handleDecimalOperation(operation, rawValue, localStep), min, max, localStep);
          }
          context.setValue(newValue);
          context.format();
        });
      }
    };
    createEffect(on(() => local.rawValue, (rawValue) => {
      if (rawValue !== context.rawValue()) {
        if (Number.isNaN(rawValue)) return;
        batch(() => {
          setValue(rawValue ?? "");
          context.format();
        });
      }
    }, {
      defer: true
    }));
    return createComponent(FormControlContext.Provider, {
      value: formControlContext,
      get children() {
        return createComponent(NumberFieldContext.Provider, {
          value: context,
          get children() {
            return createComponent(Polymorphic, mergeProps({
              as: "div",
              ref(r$) {
                var _ref$3 = mergeRefs((el) => ref = el, local.ref);
                typeof _ref$3 === "function" && _ref$3(r$);
              },
              role: "group",
              get id() {
                return access$1(formControlProps.id);
              }
            }, () => formControlContext.dataset(), others));
          }
        });
      }
    });
  }
  function handleDecimalOperation(operator, value1, value2) {
    let result = operator === "+" ? value1 + value2 : value1 - value2;
    if (Number.isFinite(value1) && Number.isFinite(value2) && (value2 % 1 !== 0 || value1 % 1 !== 0)) {
      const offsetPrecision = getPrecision(value2);
      const valuePrecision = getPrecision(value1);
      const multiplier = 10 ** Math.max(offsetPrecision, valuePrecision);
      const multipliedOffset = Math.round(value2 * multiplier);
      const multipliedValue = Math.round(value1 * multiplier);
      const next = operator === "+" ? multipliedValue + multipliedOffset : multipliedValue - multipliedOffset;
      result = next / multiplier;
    }
    return result;
  }
  var NumberField = Object.assign(NumberFieldRoot, {
    Description: FormControlDescription,
    ErrorMessage: FormControlErrorMessage,
    HiddenInput: NumberFieldHiddenInput,
    Input: NumberFieldInput,
    IncrementTrigger: NumberFieldIncrementTrigger,
    DecrementTrigger: NumberFieldDecrementTrigger,
    Label: FormControlLabel
  });

  const common = "e:flex e:items-center e:justify-center";

  var _tmpl$$p = /* @__PURE__ */ template(`<div><img alt=cabal>`);
  const cabal = chrome.runtime.getURL("assets2/cabal_logo_sign.svg");
  const CabalIcon = (props) => {
    return (() => {
      var _el$ = _tmpl$$p(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", cabal);
      createRenderEffect(() => className(_el$, cn(common, props.cn, {
        [`e:size-${props.size}`]: !!props.size
      })));
      return _el$;
    })();
  };

  var _tmpl$$o = /* @__PURE__ */ template(`<div><img alt=logo>`);
  const logo = chrome.runtime.getURL("assets2/logo_cabal_horizontal.svg");
  const CabalLogoIcon = (props) => {
    return (() => {
      var _el$ = _tmpl$$o(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", logo);
      createRenderEffect(() => className(_el$, cn(common, props.cn, {
        [`e:size-${props.size}`]: !!props.size
      })));
      return _el$;
    })();
  };

  var _tmpl$$n = /* @__PURE__ */ template(`<div><img alt=docs>`);
  const docs = chrome.runtime.getURL("assets2/docs.svg");
  const DocsIcon = (props) => {
    return (() => {
      var _el$ = _tmpl$$n(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", docs);
      createRenderEffect(() => className(_el$, cn(common, props.cn, {
        [`e:size-${props.size}`]: !!props.size
      })));
      return _el$;
    })();
  };

  chrome.runtime.getURL("assets2/logout.svg");

  var _tmpl$$m = /* @__PURE__ */ template(`<div class=e:size-5><img alt=mode>`);
  const mode = chrome.runtime.getURL("assets2/mode.svg");
  const ModeIcon = () => (() => {
    var _el$ = _tmpl$$m(), _el$2 = _el$.firstChild;
    setAttribute(_el$2, "src", mode);
    return _el$;
  })();

  chrome.runtime.getURL("assets2/min.svg");

  chrome.runtime.getURL("assets2/pin.svg");

  chrome.runtime.getURL("assets2/preferences.svg");

  chrome.runtime.getURL("assets2/share_icon.svg");

  chrome.runtime.getURL("assets2/sol_cut.svg");

  var _tmpl$$l = /* @__PURE__ */ template(`<div><img alt=sol>`);
  const sol = chrome.runtime.getURL("assets2/sol.svg");
  const SolIcon = (props) => {
    const common = props.noStyles ? "" : "e:w-6 e:h-4";
    return (() => {
      var _el$ = _tmpl$$l(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", sol);
      createRenderEffect(() => className(_el$, cn(common, props.cn)));
      return _el$;
    })();
  };

  var _tmpl$$k = /* @__PURE__ */ template(`<div class=e:size-4.5><img alt=tooltip>`);
  const tooltip = chrome.runtime.getURL("assets2/tooltip.svg");
  const TooltipIcon = () => (() => {
    var _el$ = _tmpl$$k(), _el$2 = _el$.firstChild;
    setAttribute(_el$2, "src", tooltip);
    return _el$;
  })();

  var _tmpl$$j = /* @__PURE__ */ template(`<div><img alt=telegram>`);
  const telegram = chrome.runtime.getURL("assets2/telegram.svg");
  const TelegramIcon = (props) => {
    return (() => {
      var _el$ = _tmpl$$j(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", telegram);
      createRenderEffect(() => className(_el$, cn(common, props.cn, {
        [`e:size-${props.size}`]: !!props.size
      })));
      return _el$;
    })();
  };

  var _tmpl$$i = /* @__PURE__ */ template(`<div><img alt=trash>`);
  const trash = chrome.runtime.getURL("assets2/trash_icon.svg");
  const TrashIcon = (props) => {
    return (() => {
      var _el$ = _tmpl$$i(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", trash);
      createRenderEffect(() => className(_el$, cn(common, props.cn, {
        [`e:size-${props.size}`]: !!props.size
      })));
      return _el$;
    })();
  };

  chrome.runtime.getURL("assets2/wallet.svg");

  var _tmpl$$h = /* @__PURE__ */ template(`<div><img alt=x>`);
  const x = chrome.runtime.getURL("assets2/x.svg");
  const XIcon = (props) => {
    return (() => {
      var _el$ = _tmpl$$h(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", x);
      createRenderEffect(() => className(_el$, cn(common, props.cn, {
        [`e:size-${props.size}`]: !!props.size
      })));
      return _el$;
    })();
  };

  var _tmpl$$g = /* @__PURE__ */ template(`<div class="e:w-6 e:h-4">`), _tmpl$2$a = /* @__PURE__ */ template(`<div>`);
  var IIcon = /* @__PURE__ */ ((IIcon2) => {
    IIcon2["sol"] = "sol";
    IIcon2["perc"] = "perc";
    return IIcon2;
  })(IIcon || {});
  const NumberInput = (props) => {
    const commonInputCN = "e:font-chakra e:text-sm e:w-full e:text-white e:leading-none e:outline-none";
    const inputColor = {
      "e:bg-green-100": props.color === IColor.green,
      "e:bg-red-100": props.color === IColor.red,
      "e:bg-black-100": props.color === IColor.grey
    };
    const size = {
      "e:py-[11px]": !props.size,
      "e:py-[7px]": props.size === "sm" /* sm */
    };
    const fieldContainer = "e:flex  e:items-center e:pr-3 e:border  e:pl-4";
    const containerColor = {
      "e:bg-green-100 e:border-green-500 ebrd-green-500": props.color === IColor.green,
      "e:bg-red-100 e:border-red-500 ebrd-red-500": props.color === IColor.red,
      "e:bg-black-100 e:border-black-200 ebrd-black-200": props.color === IColor.grey
    };
    return createComponent(NumberField, {
      "class": "number-field",
      get value() {
        return props.value;
      },
      formatOptions: {
        maximumFractionDigits: 10
        // Максимальное количество знаков после запятой
      },
      get onChange() {
        return props.onChange;
      },
      get children() {
        return [createComponent(Show, {
          get when() {
            return !!props.label;
          },
          get children() {
            return createComponent(NumberField.Label, {
              "class": "e:text-white e:text-[8px]",
              get children() {
                return createComponent(Typography, {
                  cn: "e:mb-2",
                  get size() {
                    return FontSize.sm;
                  },
                  nowrap: true,
                  get children() {
                    return props.label;
                  }
                });
              }
            });
          }
        }), (() => {
          var _el$ = _tmpl$2$a();
          insert(_el$, createComponent(NumberField.Input, {
            get placeholder() {
              return props.placeholder;
            },
            get ["class"]() {
              return cn(commonInputCN, inputColor, props.cn);
            }
          }), null);
          insert(_el$, createComponent(Show, {
            get when() {
              return props.icon === "sol" /* sol */;
            },
            get children() {
              return createComponent(SolIcon, {});
            }
          }), null);
          insert(_el$, createComponent(Show, {
            get when() {
              return props.icon === "perc" /* perc */;
            },
            get children() {
              var _el$2 = _tmpl$$g();
              insert(_el$2, createComponent(Typography, {
                get color() {
                  return TextColor.b300;
                },
                get weight() {
                  return FW.md;
                },
                children: "%"
              }));
              return _el$2;
            }
          }), null);
          createRenderEffect(() => className(_el$, cn(fieldContainer, size, containerColor)));
          return _el$;
        })()];
      }
    });
  };

  var switch_exports = {};
  __export(switch_exports, {
    Control: () => SwitchControl,
    Description: () => SwitchDescription,
    ErrorMessage: () => SwitchErrorMessage,
    Input: () => SwitchInput$1,
    Label: () => SwitchLabel,
    Root: () => SwitchRoot,
    Switch: () => Switch,
    Thumb: () => SwitchThumb
  });
  var SwitchContext = createContext();
  function useSwitchContext() {
    const context = useContext(SwitchContext);
    if (context === void 0) {
      throw new Error("[kobalte]: `useSwitchContext` must be used within a `Switch` component");
    }
    return context;
  }
  function SwitchControl(props) {
    const formControlContext = useFormControlContext();
    const context = useSwitchContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("control")
    }, props);
    const [local, others] = splitProps(mergedProps, ["onClick", "onKeyDown"]);
    const onClick = (e) => {
      callHandler(e, local.onClick);
      context.toggle();
      context.inputRef()?.focus();
    };
    const onKeyDown = (e) => {
      callHandler(e, local.onKeyDown);
      if (e.key === EventKey.Space) {
        context.toggle();
        context.inputRef()?.focus();
      }
    };
    return createComponent(Polymorphic, mergeProps({
      as: "div",
      onClick,
      onKeyDown
    }, () => formControlContext.dataset(), () => context.dataset(), others));
  }
  function SwitchDescription(props) {
    const context = useSwitchContext();
    return createComponent(FormControlDescription, mergeProps(() => context.dataset(), props));
  }
  function SwitchErrorMessage(props) {
    const context = useSwitchContext();
    return createComponent(FormControlErrorMessage, mergeProps(() => context.dataset(), props));
  }
  function SwitchInput$1(props) {
    const formControlContext = useFormControlContext();
    const context = useSwitchContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("input")
    }, props);
    const [local, formControlFieldProps, others] = splitProps(mergedProps, ["ref", "style", "onChange", "onFocus", "onBlur"], FORM_CONTROL_FIELD_PROP_NAMES);
    const {
      fieldProps
    } = createFormControlField(formControlFieldProps);
    const onChange = (e) => {
      callHandler(e, local.onChange);
      e.stopPropagation();
      const target = e.target;
      context.setIsChecked(target.checked);
      target.checked = context.checked();
    };
    const onFocus = (e) => {
      callHandler(e, local.onFocus);
      context.setIsFocused(true);
    };
    const onBlur = (e) => {
      callHandler(e, local.onBlur);
      context.setIsFocused(false);
    };
    return createComponent(Polymorphic, mergeProps({
      as: "input",
      ref(r$) {
        var _ref$ = mergeRefs(context.setInputRef, local.ref);
        typeof _ref$ === "function" && _ref$(r$);
      },
      type: "checkbox",
      role: "switch",
      get id() {
        return fieldProps.id();
      },
      get name() {
        return formControlContext.name();
      },
      get value() {
        return context.value();
      },
      get checked() {
        return context.checked();
      },
      get required() {
        return formControlContext.isRequired();
      },
      get disabled() {
        return formControlContext.isDisabled();
      },
      get readonly() {
        return formControlContext.isReadOnly();
      },
      get style() {
        return combineStyle({
          ...visuallyHiddenStyles
        }, local.style);
      },
      get ["aria-checked"]() {
        return context.checked();
      },
      get ["aria-label"]() {
        return fieldProps.ariaLabel();
      },
      get ["aria-labelledby"]() {
        return fieldProps.ariaLabelledBy();
      },
      get ["aria-describedby"]() {
        return fieldProps.ariaDescribedBy();
      },
      get ["aria-invalid"]() {
        return formControlContext.validationState() === "invalid" || void 0;
      },
      get ["aria-required"]() {
        return formControlContext.isRequired() || void 0;
      },
      get ["aria-disabled"]() {
        return formControlContext.isDisabled() || void 0;
      },
      get ["aria-readonly"]() {
        return formControlContext.isReadOnly() || void 0;
      },
      onChange,
      onFocus,
      onBlur
    }, () => formControlContext.dataset(), () => context.dataset(), others));
  }
  function SwitchLabel(props) {
    const context = useSwitchContext();
    return createComponent(FormControlLabel, mergeProps(() => context.dataset(), props));
  }
  function SwitchRoot(props) {
    let ref;
    const defaultId = `switch-${createUniqueId()}`;
    const mergedProps = mergeDefaultProps({
      value: "on",
      id: defaultId
    }, props);
    const [local, formControlProps, others] = splitProps(mergedProps, ["ref", "children", "value", "checked", "defaultChecked", "onChange", "onPointerDown"], FORM_CONTROL_PROP_NAMES);
    const [inputRef, setInputRef] = createSignal();
    const [isFocused, setIsFocused] = createSignal(false);
    const {
      formControlContext
    } = createFormControl(formControlProps);
    const state = createToggleState({
      isSelected: () => local.checked,
      defaultIsSelected: () => local.defaultChecked,
      onSelectedChange: (selected) => local.onChange?.(selected),
      isDisabled: () => formControlContext.isDisabled(),
      isReadOnly: () => formControlContext.isReadOnly()
    });
    createFormResetListener(() => ref, () => state.setIsSelected(local.defaultChecked ?? false));
    const onPointerDown = (e) => {
      callHandler(e, local.onPointerDown);
      if (isFocused()) {
        e.preventDefault();
      }
    };
    const dataset = createMemo(() => ({
      "data-checked": state.isSelected() ? "" : void 0
    }));
    const context = {
      value: () => local.value,
      dataset,
      checked: () => state.isSelected(),
      inputRef,
      generateId: createGenerateId(() => access$1(formControlProps.id)),
      toggle: () => state.toggle(),
      setIsChecked: (isChecked) => state.setIsSelected(isChecked),
      setIsFocused,
      setInputRef
    };
    return createComponent(FormControlContext.Provider, {
      value: formControlContext,
      get children() {
        return createComponent(SwitchContext.Provider, {
          value: context,
          get children() {
            return createComponent(Polymorphic, mergeProps({
              as: "div",
              ref(r$) {
                var _ref$2 = mergeRefs((el) => ref = el, local.ref);
                typeof _ref$2 === "function" && _ref$2(r$);
              },
              role: "group",
              get id() {
                return access$1(formControlProps.id);
              },
              onPointerDown
            }, () => formControlContext.dataset(), dataset, others, {
              get children() {
                return createComponent(SwitchRootChild, {
                  state: context,
                  get children() {
                    return local.children;
                  }
                });
              }
            }));
          }
        });
      }
    });
  }
  function SwitchRootChild(props) {
    const resolvedChildren = children(() => {
      const body = props.children;
      return isFunction(body) ? body(props.state) : body;
    });
    return memo(resolvedChildren);
  }
  function SwitchThumb(props) {
    const formControlContext = useFormControlContext();
    const context = useSwitchContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("thumb")
    }, props);
    return createComponent(Polymorphic, mergeProps({
      as: "div"
    }, () => formControlContext.dataset(), () => context.dataset(), mergedProps));
  }
  var Switch = Object.assign(SwitchRoot, {
    Control: SwitchControl,
    Description: SwitchDescription,
    ErrorMessage: SwitchErrorMessage,
    Input: SwitchInput$1,
    Label: SwitchLabel,
    Thumb: SwitchThumb
  });

  var _tmpl$$f = /* @__PURE__ */ template(`<div class=e:relative>`);
  const SwitchInput = (props) => {
    return createComponent(Switch, {
      "class": "e:flex e:items-center e:gap-2",
      get children() {
        return [createComponent(Switch.Label, {
          "class": "e:flex-1",
          get children() {
            return createComponent(Typography, {
              get size() {
                return FontSize.lg;
              },
              get weight() {
                return FW.semi;
              },
              get children() {
                return props.item.label;
              }
            });
          }
        }), createComponent(Switch.Description, {}), createComponent(Switch.ErrorMessage, {}), (() => {
          var _el$ = _tmpl$$f();
          insert(_el$, createComponent(Switch.Input, {}), null);
          insert(_el$, createComponent(Switch.Control, {
            "class": "e:py-0.5 e:px-0.5 e:w-11 e:h-5 e:rounded-full e:bg-black-100 e:transition-colors e:duration-200 e:relative e:outline-none ui-checked:e:bg-green-800 ui-disabled:e:opacity-50 e:cursor-pointer e:block",
            get children() {
              return createComponent(Switch.Thumb, {
                "class": "e:size-4 e:bg-black-400 e:rounded-[10px] e:transition-transform e:duration-200 e:transform ui-checked:e:translate-x-6 ui-checked:e:bg-green-500"
              });
            }
          }), null);
          return _el$;
        })()];
      }
    });
  };

  var _tmpl$$e = /* @__PURE__ */ template(`<div class="e:flex e:gap-1">`), _tmpl$2$9 = /* @__PURE__ */ template(`<div class=e:mb-8>`), _tmpl$3$2 = /* @__PURE__ */ template(`<div>`), _tmpl$4$1 = /* @__PURE__ */ template(`<div class="e:flex e:gap-5 e:mb-8">`);
  var Dir = /* @__PURE__ */ ((Dir2) => {
    Dir2["buy"] = "buy";
    Dir2["sell"] = "sell";
    return Dir2;
  })(Dir || {});
  const CHeading = (props) => {
    return (() => {
      var _el$ = _tmpl$$e();
      insert(_el$, createComponent(Typography, {
        get size() {
          return FontSize.lg;
        },
        get color() {
          return props.dir === "buy" /* buy */ ? TextColor.green : TextColor.red;
        },
        get weight() {
          return FW.bold;
        },
        cn: "e:text-lg",
        get children() {
          return props.left;
        }
      }), null);
      insert(_el$, createComponent(Typography, {
        get size() {
          return FontSize.lg;
        },
        get weight() {
          return FW.bold;
        },
        cn: "e:text-lg",
        get children() {
          return props.right;
        }
      }), null);
      return _el$;
    })();
  };
  const Header = (props) => {
    return (() => {
      var _el$2 = _tmpl$2$9();
      insert(_el$2, createComponent(Typography, {
        get size() {
          return FontSize.xl2;
        },
        get children() {
          return props.label;
        }
      }));
      return _el$2;
    })();
  };
  const Content$1 = (props) => {
    return (() => {
      var _el$3 = _tmpl$3$2();
      insert(_el$3, () => props.children);
      return _el$3;
    })();
  };
  const Row = (props) => {
    return (() => {
      var _el$4 = _tmpl$4$1();
      insert(_el$4, () => props.children);
      return _el$4;
    })();
  };
  const Left = (props) => {
    return (() => {
      var _el$5 = _tmpl$3$2();
      insert(_el$5, () => props.children);
      createRenderEffect(() => className(_el$5, cn(props.cn)));
      return _el$5;
    })();
  };
  const Right = (props) => {
    return (() => {
      var _el$6 = _tmpl$3$2();
      insert(_el$6, () => props.children);
      createRenderEffect(() => className(_el$6, cn(props.cn)));
      return _el$6;
    })();
  };
  const Box = (props) => {
    const mb = {
      [`e:mb-${props.mb}`]: !!props.mb
    };
    return (() => {
      var _el$7 = _tmpl$3$2();
      insert(_el$7, () => props.children);
      createRenderEffect(() => className(_el$7, cn(props.cn, mb)));
      return _el$7;
    })();
  };

  var _tmpl$$d = /* @__PURE__ */ template(`<div><div class="e:flex e:gap-3"><div></div><div></div></div><div class="e:flex e:gap-3 e:mt-2"><div></div><div>`);
  const SellPresetsSol = (props) => {
    const [store, setStore] = createStore({
      values: props.value
    });
    createEffect(() => {
      props.onChange(store.values);
    });
    return (() => {
      var _el$ = _tmpl$$d(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$2.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling;
      insert(_el$3, createComponent(NumberInput, {
        get value() {
          return store.values[0];
        },
        get color() {
          return IColor.red;
        },
        get icon() {
          return IIcon.sol;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[0] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$4, createComponent(NumberInput, {
        get value() {
          return store.values[1];
        },
        get color() {
          return IColor.red;
        },
        get icon() {
          return IIcon.sol;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[1] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$6, createComponent(NumberInput, {
        get value() {
          return store.values[2];
        },
        get color() {
          return IColor.red;
        },
        get icon() {
          return IIcon.sol;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[2] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$7, createComponent(NumberInput, {
        get value() {
          return store.values[3];
        },
        get color() {
          return IColor.red;
        },
        get icon() {
          return IIcon.sol;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[3] = value;
          setStore("values", newValues);
        }
      }));
      return _el$;
    })();
  };

  var _tmpl$$c = /* @__PURE__ */ template(`<div><div class="e:flex e:gap-3"><div></div><div></div></div><div class="e:flex e:gap-3 e:mt-2"><div></div><div>`);
  const SellPresetsPerc = (props) => {
    const [store, setStore] = createStore({
      values: props.value
    });
    createEffect(() => {
      props.onChange(store.values);
    });
    return (() => {
      var _el$ = _tmpl$$c(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$2.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling;
      insert(_el$3, createComponent(NumberInput, {
        get value() {
          return store.values[0];
        },
        get color() {
          return IColor.red;
        },
        get icon() {
          return IIcon.perc;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[0] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$4, createComponent(NumberInput, {
        get value() {
          return store.values[1];
        },
        get color() {
          return IColor.red;
        },
        get icon() {
          return IIcon.perc;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[1] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$6, createComponent(NumberInput, {
        get value() {
          return store.values[2];
        },
        get color() {
          return IColor.red;
        },
        get icon() {
          return IIcon.perc;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[2] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$7, createComponent(NumberInput, {
        get value() {
          return store.values[3];
        },
        get color() {
          return IColor.red;
        },
        get icon() {
          return IIcon.perc;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[3] = value;
          setStore("values", newValues);
        }
      }));
      return _el$;
    })();
  };

  var _tmpl$$b = /* @__PURE__ */ template(`<div><div class="e:flex e:gap-3"><div></div><div></div></div><div class="e:flex e:gap-3 e:mt-2"><div></div><div>`);
  const BuyPresets = (props) => {
    const [store, setStore] = createStore({
      values: props.value
    });
    createEffect(() => {
      props.onChange(store.values);
    });
    return (() => {
      var _el$ = _tmpl$$b(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$2.nextSibling, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling;
      insert(_el$3, createComponent(NumberInput, {
        get value() {
          return store.values[0];
        },
        get color() {
          return IColor.green;
        },
        get icon() {
          return IIcon.sol;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[0] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$4, createComponent(NumberInput, {
        get value() {
          return store.values[1];
        },
        get color() {
          return IColor.green;
        },
        get icon() {
          return IIcon.sol;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[1] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$6, createComponent(NumberInput, {
        get value() {
          return store.values[2];
        },
        get color() {
          return IColor.green;
        },
        get icon() {
          return IIcon.sol;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[2] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$7, createComponent(NumberInput, {
        get value() {
          return store.values[3];
        },
        get color() {
          return IColor.green;
        },
        get icon() {
          return IIcon.sol;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[3] = value;
          setStore("values", newValues);
        }
      }));
      return _el$;
    })();
  };

  const SaveButton = (props) => {
    return createComponent(Button, mergeProps(props, {
      get color() {
        return BColor.green;
      },
      cn: "e:py-1",
      full: true,
      clipped: true,
      get children() {
        return createComponent(Typography, {
          get weight() {
            return FW.semi;
          },
          get size() {
            return FontSize.lg;
          },
          get color() {
            return TextColor.black;
          },
          children: "Save Settings"
        });
      }
    }));
  };

  const initValue$2 = {
    buyPresets: ["0.5", "1", "2", "5"],
    sellPresetsSol: ["0.25", "0.5", "0.2", "0.3"],
    sellPresetsPerc: ["10", "20", "40", "80"],
    buyTip: "0.005",
    sellTip: "0.006",
    buyPriorityFee: "0.0003",
    sellPriorityFee: "0.0004",
    buySlippage: "25",
    sellSlippage: "35"
  };
  const createBuySellSettingsStore = (initialValue) => {
    const [store, setStore] = createStore(initialValue);
    return { store, setStore };
  };

  var _tmpl$$a = /* @__PURE__ */ template(`<div class=e:mb-3>`), _tmpl$2$8 = /* @__PURE__ */ template(`<div>`);
  const BuySellSettingsForm = (props) => {
    const {
      store: settingsBSStore,
      setStore: setbSettingsBSStore
    } = createBuySellSettingsStore(props.state.value());
    const [isSolMode, setIsSolMode] = createSignal(true);
    createEffect(() => {
      console.log("()()()()()", settingsBSStore.buyPresets);
    });
    createEffect(() => {
      console.log("!!!! how often");
      setbSettingsBSStore(props.state.value());
    });
    const handleChangeBuyPresets = (newValues) => setbSettingsBSStore("buyPresets", newValues);
    const handleChangeSellPresetsSol = (newValues) => setbSettingsBSStore("sellPresetsSol", newValues);
    const handleChangeSellPresetsPerc = (newValues) => setbSettingsBSStore("sellPresetsPerc", newValues);
    const handleBuyTipChange = (newValue) => setbSettingsBSStore("buyTip", newValue);
    const handleSellTipChange = (newValue) => setbSettingsBSStore("sellTip", newValue);
    const handleBuyPriorityFeeChange = (newValue) => setbSettingsBSStore("buyPriorityFee", newValue);
    const handleSellPriorityFeeChange = (newValue) => setbSettingsBSStore("sellPriorityFee", newValue);
    const handleBuySlippageChange = (newValue) => setbSettingsBSStore("buySlippage", newValue);
    const handleSellSlippageChange = (newValue) => setbSettingsBSStore("sellSlippage", newValue);
    const handleSave = () => {
      props.state.onSubmit(settingsBSStore);
    };
    return createComponent(Paper, {
      cn: "e:bg-black e:w-[422px]",
      get children() {
        return [createComponent(Header, {
          label: "Buy/Sell Settings"
        }), createComponent(Content$1, {
          get children() {
            return [createComponent(Row, {
              get children() {
                return [createComponent(Left, {
                  get children() {
                    return createComponent(Box, {
                      get children() {
                        return [(() => {
                          var _el$ = _tmpl$$a();
                          insert(_el$, createComponent(CHeading, {
                            get dir() {
                              return Dir.buy;
                            },
                            left: "Buy",
                            right: "Presets"
                          }));
                          return _el$;
                        })(), createComponent(BuyPresets, {
                          get value() {
                            return settingsBSStore.buyPresets;
                          },
                          onChange: handleChangeBuyPresets
                        })];
                      }
                    });
                  }
                }), createComponent(Right, {
                  get children() {
                    return [createComponent(Box, {
                      cn: "e:flex e:mb-3 e:items-center",
                      get children() {
                        return [createComponent(Left, {
                          cn: "e:flex-1",
                          get children() {
                            return createComponent(CHeading, {
                              left: "Sell",
                              right: "Presets"
                            });
                          }
                        }), createComponent(Right, {
                          get children() {
                            return createComponent(IconButton, {
                              onClick: () => setIsSolMode((prev) => !prev),
                              get children() {
                                return createComponent(ModeIcon, {});
                              }
                            });
                          }
                        })];
                      }
                    }), createComponent(Show, {
                      get when() {
                        return isSolMode();
                      },
                      get children() {
                        return createComponent(SellPresetsSol, {
                          get value() {
                            return settingsBSStore.sellPresetsSol;
                          },
                          onChange: handleChangeSellPresetsSol
                        });
                      }
                    }), createComponent(Show, {
                      get when() {
                        return !isSolMode();
                      },
                      get children() {
                        return createComponent(SellPresetsPerc, {
                          get value() {
                            return settingsBSStore.sellPresetsPerc;
                          },
                          onChange: handleChangeSellPresetsPerc
                        });
                      }
                    })];
                  }
                })];
              }
            }), createComponent(Row, {
              get children() {
                return [createComponent(Left, {
                  get children() {
                    return [createComponent(Box, {
                      cn: "e:mb-3",
                      get children() {
                        return createComponent(CHeading, {
                          get dir() {
                            return Dir.buy;
                          },
                          left: "Buy",
                          right: "Tip"
                        });
                      }
                    }), createComponent(Box, {
                      get children() {
                        return createComponent(NumberInput, {
                          get value() {
                            return settingsBSStore.buyTip;
                          },
                          get color() {
                            return IColor.grey;
                          },
                          get icon() {
                            return IIcon.sol;
                          },
                          onChange: handleBuyTipChange
                        });
                      }
                    })];
                  }
                }), createComponent(Right, {
                  get children() {
                    return [(() => {
                      var _el$2 = _tmpl$$a();
                      insert(_el$2, createComponent(CHeading, {
                        left: "Sell",
                        right: "Tip"
                      }));
                      return _el$2;
                    })(), (() => {
                      var _el$3 = _tmpl$2$8();
                      insert(_el$3, createComponent(NumberInput, {
                        get value() {
                          return settingsBSStore.sellTip;
                        },
                        get color() {
                          return IColor.grey;
                        },
                        get icon() {
                          return IIcon.sol;
                        },
                        onChange: handleSellTipChange
                      }));
                      return _el$3;
                    })()];
                  }
                })];
              }
            }), createComponent(Row, {
              get children() {
                return [createComponent(Left, {
                  get children() {
                    return [createComponent(Box, {
                      mb: "3",
                      get children() {
                        return createComponent(CHeading, {
                          get dir() {
                            return Dir.buy;
                          },
                          left: "Buy",
                          right: "Priority Fee"
                        });
                      }
                    }), createComponent(Box, {
                      get children() {
                        return createComponent(NumberInput, {
                          get value() {
                            return settingsBSStore.buyPriorityFee;
                          },
                          get color() {
                            return IColor.grey;
                          },
                          get icon() {
                            return IIcon.sol;
                          },
                          onChange: handleBuyPriorityFeeChange
                        });
                      }
                    })];
                  }
                }), createComponent(Right, {
                  get children() {
                    return [createComponent(Box, {
                      mb: "3",
                      get children() {
                        return createComponent(CHeading, {
                          left: "Sell",
                          right: "Priority Fee"
                        });
                      }
                    }), createComponent(Box, {
                      get children() {
                        return createComponent(NumberInput, {
                          get value() {
                            return settingsBSStore.sellPriorityFee;
                          },
                          get color() {
                            return IColor.grey;
                          },
                          get icon() {
                            return IIcon.sol;
                          },
                          onChange: handleSellPriorityFeeChange
                        });
                      }
                    })];
                  }
                })];
              }
            }), createComponent(Row, {
              get children() {
                return [createComponent(Left, {
                  get children() {
                    return [createComponent(Box, {
                      mb: "3",
                      get children() {
                        return createComponent(CHeading, {
                          get dir() {
                            return Dir.buy;
                          },
                          left: "Buy",
                          right: "Slippage"
                        });
                      }
                    }), createComponent(Box, {
                      get children() {
                        return createComponent(NumberInput, {
                          get value() {
                            return settingsBSStore.buySlippage;
                          },
                          get color() {
                            return IColor.grey;
                          },
                          get icon() {
                            return IIcon.perc;
                          },
                          onChange: handleBuySlippageChange
                        });
                      }
                    })];
                  }
                }), createComponent(Right, {
                  get children() {
                    return [createComponent(Box, {
                      mb: "3",
                      get children() {
                        return createComponent(CHeading, {
                          left: "Sell",
                          right: "Slippage"
                        });
                      }
                    }), createComponent(Box, {
                      get children() {
                        return createComponent(NumberInput, {
                          get value() {
                            return settingsBSStore.sellSlippage;
                          },
                          get color() {
                            return IColor.grey;
                          },
                          get icon() {
                            return IIcon.perc;
                          },
                          onChange: handleSellSlippageChange
                        });
                      }
                    })];
                  }
                })];
              }
            })];
          }
        }), createComponent(SaveButton, {
          onClick: handleSave
        })];
      }
    });
  };

  var _tmpl$$9 = /* @__PURE__ */ template(`<table class=e:w-full><thead><tr></tr></thead><tbody>`), _tmpl$2$7 = /* @__PURE__ */ template(`<th class=e:text-left>`), _tmpl$3$1 = /* @__PURE__ */ template(`<tr><td></td><td></td><td></td><td></td><td></td><td></td><td>`);
  const cols = [{
    label: "Limit type"
  }, {
    label: "Priority Fee"
  }, {
    label: "TIP"
  }, {
    label: "Slippage"
  }, {
    label: "Position"
  }, {
    label: "Profit"
  }, {
    label: "A"
  }];
  const rows = [{
    type: "TakeProfit Trailing",
    priorityFee: "0.0005",
    tip: "0.005",
    slippage: "25",
    position: "50",
    profit: "100"
  }, {
    type: "TakeProfit Trailing",
    priorityFee: "0.0005",
    tip: "0.005",
    slippage: "25",
    position: "50",
    profit: "100"
  }, {
    type: "TakeProfit Trailing",
    priorityFee: "0.0005",
    tip: "0.005",
    slippage: "25",
    position: "50",
    profit: "100"
  }];
  const AutoLimitTableInput = () => {
    return (() => {
      var _el$ = _tmpl$$9(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$2.nextSibling;
      insert(_el$3, createComponent(For, {
        each: cols,
        children: (col) => {
          return (() => {
            var _el$5 = _tmpl$2$7();
            insert(_el$5, createComponent(Typography, {
              get children() {
                return col.label;
              }
            }));
            return _el$5;
          })();
        }
      }));
      insert(_el$4, createComponent(For, {
        each: rows,
        children: (row) => {
          return (() => {
            var _el$6 = _tmpl$3$1(), _el$7 = _el$6.firstChild, _el$8 = _el$7.nextSibling, _el$9 = _el$8.nextSibling, _el$0 = _el$9.nextSibling, _el$1 = _el$0.nextSibling, _el$10 = _el$1.nextSibling, _el$11 = _el$10.nextSibling;
            insert(_el$7, createComponent(Typography, {
              get children() {
                return row.type;
              }
            }));
            insert(_el$8, createComponent(NumberInput, {
              get value() {
                return row.priorityFee;
              },
              get color() {
                return IColor.grey;
              },
              get icon() {
                return IIcon.sol;
              },
              onChange: (value) => {
                console.log(value);
              }
            }));
            insert(_el$9, createComponent(NumberInput, {
              get value() {
                return row.tip;
              },
              get color() {
                return IColor.grey;
              },
              get icon() {
                return IIcon.sol;
              },
              onChange: (value) => {
                console.log(value);
              }
            }));
            insert(_el$0, createComponent(NumberInput, {
              get value() {
                return row.slippage;
              },
              get color() {
                return IColor.grey;
              },
              get icon() {
                return IIcon.perc;
              },
              onChange: (value) => {
                console.log(value);
              }
            }));
            insert(_el$1, createComponent(NumberInput, {
              get value() {
                return row.position;
              },
              get color() {
                return IColor.grey;
              },
              get icon() {
                return IIcon.perc;
              },
              onChange: (value) => {
                console.log(value);
              }
            }));
            insert(_el$10, createComponent(NumberInput, {
              get value() {
                return row.profit;
              },
              get color() {
                return IColor.grey;
              },
              get icon() {
                return IIcon.perc;
              },
              onChange: (value) => {
                console.log(value);
              }
            }));
            insert(_el$11, createComponent(IconButton, {
              get children() {
                return createComponent(TrashIcon, {});
              }
            }));
            return _el$6;
          })();
        }
      }));
      return _el$;
    })();
  };

  var _tmpl$$8 = /* @__PURE__ */ template(`<div class=e:flex>`), _tmpl$2$6 = /* @__PURE__ */ template(`<div>`), _tmpl$3 = /* @__PURE__ */ template(`<div class=e:relative>`), _tmpl$4 = /* @__PURE__ */ template(`<div class="e:flex e:gap-1"><div></div><div>`);
  const items$1 = [{
    value: "1",
    label: "Preset 1"
  }, {
    value: "2",
    label: "Preset 2"
  }, {
    value: "3",
    label: "Preset 3"
  }];
  const AutoLimitsSettingsForm = () => {
    const [value, setValue] = createSignal(items$1[0].value);
    createEffect(() => {
      console.log(value());
    });
    return createComponent(Paper, {
      cn: "e:bg-black e:w-[764px]",
      get children() {
        return [createComponent(Header, {
          label: "AutoLimits Settings"
        }), createComponent(Row, {
          get children() {
            return [createComponent(Left, {
              cn: "e:flex-1",
              get children() {
                var _el$ = _tmpl$$8();
                insert(_el$, createComponent(BtnGroup, {
                  itemCN: "e:px-3 e:py-2",
                  items: items$1,
                  get value() {
                    return value();
                  },
                  onChange: setValue
                }));
                return _el$;
              }
            }), createComponent(Right, {
              cn: "e:flex e:gap-1",
              get children() {
                return [(() => {
                  var _el$2 = _tmpl$2$6();
                  insert(_el$2, createComponent(TooltipIcon, {}));
                  return _el$2;
                })(), (() => {
                  var _el$3 = _tmpl$2$6();
                  insert(_el$3, createComponent(Switch, {
                    "class": "e:flex e:items-center e:gap-2",
                    get children() {
                      return [createComponent(Switch.Label, {
                        get children() {
                          return createComponent(Typography, {
                            get weight() {
                              return FW.semi;
                            },
                            upper: true,
                            children: "Set AutoLimits if I trade"
                          });
                        }
                      }), createComponent(Switch.Description, {}), createComponent(Switch.ErrorMessage, {}), (() => {
                        var _el$4 = _tmpl$3();
                        insert(_el$4, createComponent(Switch.Input, {}), null);
                        insert(_el$4, createComponent(Switch.Control, {
                          "class": "e:py-0.5 e:px-0.5 e:w-11 e:h-5 e:rounded-full e:bg-black-100 e:transition-colors e:duration-200 e:relative e:outline-none ui-checked:e:bg-green-800 ui-disabled:e:opacity-50 e:cursor-pointer e:block",
                          get children() {
                            return createComponent(Switch.Thumb, {
                              "class": "e:size-4 e:bg-black-400 e:rounded-[10px] e:transition-transform e:duration-200 e:transform ui-checked:e:translate-x-6 ui-checked:e:bg-green-500"
                            });
                          }
                        }), null);
                        return _el$4;
                      })()];
                    }
                  }));
                  return _el$3;
                })(), _tmpl$2$6()];
              }
            })];
          }
        }), createComponent(Row, {
          get children() {
            var _el$6 = _tmpl$4(), _el$7 = _el$6.firstChild, _el$8 = _el$7.nextSibling;
            insert(_el$7, createComponent(CHeading, {
              left: "Sell",
              right: "Limits Orders"
            }));
            insert(_el$8, createComponent(TooltipIcon, {}));
            return _el$6;
          }
        }), createComponent(Row, {
          get children() {
            return createComponent(AutoLimitTableInput, {});
          }
        }), createComponent(Row, {
          get children() {
            var _el$9 = _tmpl$4(), _el$0 = _el$9.firstChild, _el$1 = _el$0.nextSibling;
            insert(_el$0, createComponent(CHeading, {
              get dir() {
                return Dir.buy;
              },
              left: "Buy",
              right: "Limits Orders"
            }));
            insert(_el$1, createComponent(TooltipIcon, {}));
            return _el$9;
          }
        }), createComponent(Row, {
          get children() {
            return createComponent(AutoLimitTableInput, {});
          }
        }), createComponent(SaveButton, {})];
      }
    });
  };

  var _tmpl$$7 = /* @__PURE__ */ template(`<div class=e:mb-8>`), _tmpl$2$5 = /* @__PURE__ */ template(`<div><div class="e:flex e:gap-5 e:mb-8"><div><div class=e:mb-3></div><div></div></div><div><div class=e:mb-3></div><div></div></div></div><div class="e:flex e:gap-5 e:mb-8"><div><div class=e:mb-3></div><div></div></div><div><div class=e:mb-3></div><div></div></div></div><div class="e:flex e:gap-5 e:mb-8"><div><div class=e:mb-3></div><div></div></div><div><div class=e:mb-3></div><div></div></div></div><div class="e:flex e:gap-5 e:mb-8"><div><div class=e:mb-3></div><div></div></div><div><div class=e:mb-3></div><div>`);
  const initValue$1 = {
    buyAmount: "0.01",
    sellAmount: "30",
    buyTip: "0.005",
    sellTip: "0.006",
    buyPriorityFee: "0.0003",
    sellPriorityFee: "0.0004",
    buySlippage: "25",
    sellSlippage: "35"
  };
  const [settingsBSStore$1, setbSettingsBSStore$1] = createStore(initValue$1);
  const MigrationSnipeSettingsForm = () => {
    createSignal(true);
    const handleChangeBuyAmount = (newValues) => setbSettingsBSStore$1("buyAmount", newValues);
    const handleChangeSellAmount = (newValues) => setbSettingsBSStore$1("sellAmount", newValues);
    const handleBuyTipChange = (newValue) => setbSettingsBSStore$1("buyTip", newValue);
    const handleSellTipChange = (newValue) => setbSettingsBSStore$1("sellTip", newValue);
    const handleBuyPriorityFeeChange = (newValue) => setbSettingsBSStore$1("buyPriorityFee", newValue);
    const handleSellPriorityFeeChange = (newValue) => setbSettingsBSStore$1("sellPriorityFee", newValue);
    const handleBuySlippageChange = (newValue) => setbSettingsBSStore$1("buySlippage", newValue);
    const handleSellSlippageChange = (newValue) => setbSettingsBSStore$1("sellSlippage", newValue);
    return createComponent(Paper, {
      cn: "e:bg-black e:w-[422px]",
      get children() {
        return [(() => {
          var _el$ = _tmpl$$7();
          insert(_el$, createComponent(Typography, {
            get size() {
              return FontSize.xl2;
            },
            children: "Migration Snipe Settings"
          }));
          return _el$;
        })(), (() => {
          var _el$2 = _tmpl$2$5(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$4.nextSibling, _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, _el$0 = _el$3.nextSibling, _el$1 = _el$0.firstChild, _el$10 = _el$1.firstChild, _el$11 = _el$10.nextSibling, _el$12 = _el$1.nextSibling, _el$13 = _el$12.firstChild, _el$14 = _el$13.nextSibling, _el$15 = _el$0.nextSibling, _el$16 = _el$15.firstChild, _el$17 = _el$16.firstChild, _el$18 = _el$17.nextSibling, _el$19 = _el$16.nextSibling, _el$20 = _el$19.firstChild, _el$21 = _el$20.nextSibling, _el$22 = _el$15.nextSibling, _el$23 = _el$22.firstChild, _el$24 = _el$23.firstChild, _el$25 = _el$24.nextSibling, _el$26 = _el$23.nextSibling, _el$27 = _el$26.firstChild, _el$28 = _el$27.nextSibling;
          insert(_el$5, createComponent(CHeading, {
            get dir() {
              return Dir.buy;
            },
            left: "Buy",
            right: "Amount"
          }));
          insert(_el$6, createComponent(NumberInput, {
            get value() {
              return settingsBSStore$1.buyAmount;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.sol;
            },
            onChange: handleChangeBuyAmount
          }));
          insert(_el$8, createComponent(CHeading, {
            left: "Sell",
            right: "Amount"
          }));
          insert(_el$9, createComponent(NumberInput, {
            get value() {
              return settingsBSStore$1.sellAmount;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.perc;
            },
            onChange: handleChangeSellAmount
          }));
          insert(_el$10, createComponent(CHeading, {
            get dir() {
              return Dir.buy;
            },
            left: "Buy",
            right: "Tip"
          }));
          insert(_el$11, createComponent(NumberInput, {
            get value() {
              return settingsBSStore$1.buyTip;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.sol;
            },
            onChange: handleBuyTipChange
          }));
          insert(_el$13, createComponent(CHeading, {
            left: "Sell",
            right: "Tip"
          }));
          insert(_el$14, createComponent(NumberInput, {
            get value() {
              return settingsBSStore$1.sellTip;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.sol;
            },
            onChange: handleSellTipChange
          }));
          insert(_el$17, createComponent(CHeading, {
            get dir() {
              return Dir.buy;
            },
            left: "Buy",
            right: "Priority Fee"
          }));
          insert(_el$18, createComponent(NumberInput, {
            get value() {
              return settingsBSStore$1.buyPriorityFee;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.sol;
            },
            onChange: handleBuyPriorityFeeChange
          }));
          insert(_el$20, createComponent(CHeading, {
            left: "Sell",
            right: "Priority Fee"
          }));
          insert(_el$21, createComponent(NumberInput, {
            get value() {
              return settingsBSStore$1.sellPriorityFee;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.sol;
            },
            onChange: handleSellPriorityFeeChange
          }));
          insert(_el$24, createComponent(CHeading, {
            get dir() {
              return Dir.buy;
            },
            left: "Buy",
            right: "Slippage"
          }));
          insert(_el$25, createComponent(NumberInput, {
            get value() {
              return settingsBSStore$1.buySlippage;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.perc;
            },
            onChange: handleBuySlippageChange
          }));
          insert(_el$27, createComponent(CHeading, {
            left: "Sell",
            right: "Slippage"
          }));
          insert(_el$28, createComponent(NumberInput, {
            get value() {
              return settingsBSStore$1.sellSlippage;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.perc;
            },
            onChange: handleSellSlippageChange
          }));
          return _el$2;
        })(), createComponent(SaveButton, {})];
      }
    });
  };

  var _tmpl$$6 = /* @__PURE__ */ template(`<div class="e:flex e:flex-col e:flex-1"><div class="e:mb-3 e:flex-1"></div><div class="e:flex e:w-full e:gap-3"><div></div><div></div><div></div><div></div><div>`);
  const McParamsInput = (props) => {
    const [store, setStore] = createStore({
      values: ["-100", "-50", "0", "50", "100"]
    });
    createEffect(() => {
      props.onChange(store.values);
    });
    return (() => {
      var _el$ = _tmpl$$6(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling, _el$6 = _el$5.nextSibling, _el$7 = _el$6.nextSibling, _el$8 = _el$7.nextSibling;
      insert(_el$2, createComponent(Typography, {
        get size() {
          return FontSize.lg;
        },
        get weight() {
          return FW.bold;
        },
        cn: "e:text-lg",
        children: "MC % parameters"
      }));
      insert(_el$4, createComponent(NumberInput, {
        get value() {
          return store.values[0];
        },
        get color() {
          return IColor.grey;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[0] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$5, createComponent(NumberInput, {
        get value() {
          return store.values[1];
        },
        get color() {
          return IColor.grey;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[1] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$6, createComponent(NumberInput, {
        get value() {
          return store.values[2];
        },
        get color() {
          return IColor.grey;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[2] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$7, createComponent(NumberInput, {
        get value() {
          return store.values[3];
        },
        get color() {
          return IColor.grey;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[3] = value;
          setStore("values", newValues);
        }
      }));
      insert(_el$8, createComponent(NumberInput, {
        get value() {
          return store.values[4];
        },
        get color() {
          return IColor.grey;
        },
        onChange: (value) => {
          const newValues = [...store.values];
          newValues[4] = value;
          setStore("values", newValues);
        }
      }));
      return _el$;
    })();
  };

  var _tmpl$$5 = /* @__PURE__ */ template(`<div class=e:mb-8>`), _tmpl$2$4 = /* @__PURE__ */ template(`<div><div class="e:flex e:gap-5 e:mb-8"><div><div class=e:mb-3></div><div></div></div><div><div class=e:mb-3></div><div></div></div></div><div class="e:flex e:gap-5 e:mb-8"><div><div class=e:mb-3></div><div></div></div><div><div class=e:mb-3></div><div></div></div></div><div class="e:flex e:gap-5 e:mb-8"><div><div class=e:mb-3></div><div></div></div><div><div class=e:mb-3></div><div></div></div></div><div class="e:flex e:mb-8">`);
  const initValue = {
    buyTip: "0.005",
    sellTip: "0.006",
    buyPriorityFee: "0.0003",
    sellPriorityFee: "0.0004",
    buySlippage: "25",
    sellSlippage: "35",
    mcParams: ["-100", "-50", "0", "50", "100"]
  };
  const [settingsBSStore, setbSettingsBSStore] = createStore(initValue);
  const handleChangeMcParams = (newValues) => setbSettingsBSStore("mcParams", newValues);
  const LimitSettingsForm = () => {
    const handleBuyTipChange = (newValue) => setbSettingsBSStore("buyTip", newValue);
    const handleSellTipChange = (newValue) => setbSettingsBSStore("sellTip", newValue);
    const handleBuyPriorityFeeChange = (newValue) => setbSettingsBSStore("buyPriorityFee", newValue);
    const handleSellPriorityFeeChange = (newValue) => setbSettingsBSStore("sellPriorityFee", newValue);
    const handleBuySlippageChange = (newValue) => setbSettingsBSStore("buySlippage", newValue);
    const handleSellSlippageChange = (newValue) => setbSettingsBSStore("sellSlippage", newValue);
    return createComponent(Paper, {
      cn: "e:bg-black e:w-[422px]",
      get children() {
        return [(() => {
          var _el$ = _tmpl$$5();
          insert(_el$, createComponent(Typography, {
            get size() {
              return FontSize.xl2;
            },
            children: "Limit Settings"
          }));
          return _el$;
        })(), (() => {
          var _el$2 = _tmpl$2$4(), _el$3 = _el$2.firstChild, _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$4.nextSibling, _el$8 = _el$7.firstChild, _el$9 = _el$8.nextSibling, _el$0 = _el$3.nextSibling, _el$1 = _el$0.firstChild, _el$10 = _el$1.firstChild, _el$11 = _el$10.nextSibling, _el$12 = _el$1.nextSibling, _el$13 = _el$12.firstChild, _el$14 = _el$13.nextSibling, _el$15 = _el$0.nextSibling, _el$16 = _el$15.firstChild, _el$17 = _el$16.firstChild, _el$18 = _el$17.nextSibling, _el$19 = _el$16.nextSibling, _el$20 = _el$19.firstChild, _el$21 = _el$20.nextSibling, _el$22 = _el$15.nextSibling;
          insert(_el$5, createComponent(CHeading, {
            get dir() {
              return Dir.buy;
            },
            left: "Buy",
            right: "Tip"
          }));
          insert(_el$6, createComponent(NumberInput, {
            get value() {
              return settingsBSStore.buyTip;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.sol;
            },
            onChange: handleBuyTipChange
          }));
          insert(_el$8, createComponent(CHeading, {
            left: "Sell",
            right: "Tip"
          }));
          insert(_el$9, createComponent(NumberInput, {
            get value() {
              return settingsBSStore.sellTip;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.sol;
            },
            onChange: handleSellTipChange
          }));
          insert(_el$10, createComponent(CHeading, {
            get dir() {
              return Dir.buy;
            },
            left: "Buy",
            right: "Priority Fee"
          }));
          insert(_el$11, createComponent(NumberInput, {
            get value() {
              return settingsBSStore.buyPriorityFee;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.sol;
            },
            onChange: handleBuyPriorityFeeChange
          }));
          insert(_el$13, createComponent(CHeading, {
            left: "Sell",
            right: "Priority Fee"
          }));
          insert(_el$14, createComponent(NumberInput, {
            get value() {
              return settingsBSStore.sellPriorityFee;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.sol;
            },
            onChange: handleSellPriorityFeeChange
          }));
          insert(_el$17, createComponent(CHeading, {
            get dir() {
              return Dir.buy;
            },
            left: "Buy",
            right: "Slippage"
          }));
          insert(_el$18, createComponent(NumberInput, {
            get value() {
              return settingsBSStore.buySlippage;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.perc;
            },
            onChange: handleBuySlippageChange
          }));
          insert(_el$20, createComponent(CHeading, {
            left: "Sell",
            right: "Slippage"
          }));
          insert(_el$21, createComponent(NumberInput, {
            get value() {
              return settingsBSStore.sellSlippage;
            },
            get color() {
              return IColor.grey;
            },
            get icon() {
              return IIcon.perc;
            },
            onChange: handleSellSlippageChange
          }));
          insert(_el$22, createComponent(McParamsInput, {
            onChange: handleChangeMcParams
          }));
          return _el$2;
        })(), createComponent(SaveButton, {})];
      }
    });
  };

  var _tmpl$$4 = /* @__PURE__ */ template(`<div class="e:flex e:mb-5"><div>`), _tmpl$2$3 = /* @__PURE__ */ template(`<div class="e:flex e:flex-col e:gap-5 e:mb-5">`);
  const items = [{
    value: "1",
    label: "Cabal Provider"
  }, {
    value: "2",
    label: "Nozomi"
  }, {
    value: "3",
    label: "AstraIris"
  }, {
    value: "4",
    label: "JitoValidators"
  }, {
    value: "5",
    label: "BloxRoute"
  }, {
    value: "6",
    label: "NextBlock"
  }, {
    value: "7",
    label: "0slot_trade"
  }];
  const TxProcessorsForm = () => {
    const [value, setValue] = createSignal(items[0].value);
    createEffect(() => {
      console.log(value());
    });
    return createComponent(Paper, {
      cn: "e:bg-black e:w-[422px]",
      get children() {
        return [(() => {
          var _el$ = _tmpl$$4(), _el$2 = _el$.firstChild;
          insert(_el$2, createComponent(Typography, {
            get size() {
              return FontSize.xl2;
            },
            children: "AutoLimits Settings"
          }));
          return _el$;
        })(), (() => {
          var _el$3 = _tmpl$2$3();
          insert(_el$3, createComponent(For, {
            each: items,
            children: (item) => {
              return createComponent(SwitchInput, {
                item
              });
            }
          }));
          return _el$3;
        })(), createComponent(SaveButton, {})];
      }
    });
  };

  var _tmpl$$3 = /* @__PURE__ */ template(`<div class="e:flex e:justify-center e:items-center e:gap-7 e:pt-7"><div class=e:flex></div><div class="e:flex e:gap-4">`), _tmpl$2$2 = /* @__PURE__ */ template(`<div><a><div class="e:flex e:gap-1"><div></div><div>`);
  const footerItems = [{
    label: "Bot",
    href: "https://cabalbot.ai/",
    icon: createComponent(CabalIcon, {})
  }, {
    label: "Hub",
    href: "https://t.me/cabalsolana_portal",
    icon: createComponent(TelegramIcon, {})
  }, {
    label: "Docs",
    href: "https://cabalbot-1.gitbook.io/cabalbot-docs",
    icon: createComponent(DocsIcon, {})
  }, {
    label: "Twitter",
    href: "https://x.com/CabalSolana_bot",
    icon: createComponent(XIcon, {})
  }];
  const SettingsFooter = () => {
    return (() => {
      var _el$ = _tmpl$$3(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
      insert(_el$2, createComponent(CabalLogoIcon, {}));
      insert(_el$3, createComponent(For, {
        each: footerItems,
        children: (footerItem) => {
          return (() => {
            var _el$4 = _tmpl$2$2(), _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.firstChild, _el$8 = _el$7.nextSibling;
            insert(_el$7, () => footerItem.icon);
            insert(_el$8, createComponent(Typography, {
              get children() {
                return footerItem.label;
              }
            }));
            createRenderEffect(() => setAttribute(_el$5, "href", footerItem.href));
            return _el$4;
          })();
        }
      }));
      return _el$;
    })();
  };

  var TabNames = /* @__PURE__ */ ((TabNames2) => {
    TabNames2["buysell"] = "buysell";
    TabNames2["autolimits"] = "autolimits";
    TabNames2["migrationsnipe"] = "migrationsnipe";
    TabNames2["limit"] = "limit";
    TabNames2["txproc"] = "txproc";
    TabNames2["others"] = "others";
    return TabNames2;
  })(TabNames || {});
  const navItems = [
    { label: "Buy/Sell Settings", value: "buysell" /* buysell */ },
    { label: "AutoLimits Settings", value: "autolimits" /* autolimits */ },
    { label: "Migration Snipe Settings", value: "migrationsnipe" /* migrationsnipe */ },
    { label: "Limit Settings", value: "limit" /* limit */ },
    { label: "Transaction processors", value: "txproc" /* txproc */ },
    { label: "Others", value: "others" /* others */ }
  ];

  const parseBSConfig = (value) => {
    if (!value) {
      return;
    }
    return {
      buyPresets: value.buyPresetsSol.map((value2) => String(value2)),
      sellPresetsSol: value.sellPresetsSol.map((value2) => String(value2)),
      // buyPresetsPerc: value.buyPresetsPerc.map((value) => String(value)),
      sellPresetsPerc: value.sellPresetsPerc.map((value2) => String(value2)),
      buyTip: String(value.buyTip),
      sellTip: String(value.sellTip),
      buyPriorityFee: String(value.buyPriorityFee),
      sellPriorityFee: String(value.sellPriorityFee),
      buySlippage: String(value.buySlippage),
      sellSlippage: String(value.sellSlippage)
    };
  };
  const useSettingsStore = ({
    saveBSConfig,
    handlers
  }) => {
    const [selectedTab, setSelectedTab] = createSignal(TabNames.buysell);
    const [bsValue, setBSValue] = createSignal(
      parseBSConfig(configStore.config?.buySell) || initValue$2
    );
    const handleSubmitBuySell = (value) => {
      console.log("### # # #### # #. ####", value);
      const result = {
        buyPresetsSol: value.buyPresets.map((value2) => Number(value2)),
        sellPresetsSol: value.sellPresetsSol.map((value2) => Number(value2)),
        buyPresetsPerc: [1, 10, 15, 20],
        sellPresetsPerc: value.sellPresetsPerc.map((value2) => Number(value2)),
        buyTip: Number(value.buyTip),
        sellTip: Number(value.sellTip),
        buyPriorityFee: Number(value.buyPriorityFee),
        sellPriorityFee: Number(value.sellPriorityFee),
        buySlippage: Number(value.buySlippage),
        sellSlippage: Number(value.sellSlippage)
      };
      console.log(result);
      saveBSConfig(result);
      setBSValue(value);
    };
    const handleSetStorageToDefault = () => {
      console.log("!handleSetStorageToDefault");
      handlers.onReset();
    };
    return {
      selectedTab,
      setSelectedTab,
      bsState: {
        value: bsValue,
        onSubmit: handleSubmitBuySell
      },
      others: {
        onSetStorageToDefault: handleSetStorageToDefault
      }
    };
  };

  var access = (v) => typeof v === "function" ? v() : v;

  var createPresence = (props) => {
    const refStyles = createMemo(() => {
      const element = access(props.element);
      if (!element) return;
      return getComputedStyle(element);
    });
    const getAnimationName = () => {
      return refStyles()?.animationName ?? "none";
    };
    const [presentState, setPresentState] = createSignal(access(props.show) ? "present" : "hidden");
    let animationName = "none";
    createEffect((prevShow) => {
      const show = access(props.show);
      untrack(() => {
        if (prevShow === show) return show;
        const prevAnimationName = animationName;
        const currentAnimationName = getAnimationName();
        if (show) {
          setPresentState("present");
        } else if (currentAnimationName === "none" || refStyles()?.display === "none") {
          setPresentState("hidden");
        } else {
          const isAnimating = prevAnimationName !== currentAnimationName;
          if (prevShow === true && isAnimating) {
            setPresentState("hiding");
          } else {
            setPresentState("hidden");
          }
        }
      });
      return show;
    });
    createEffect(() => {
      const element = access(props.element);
      if (!element) return;
      const handleAnimationStart = (event) => {
        if (event.target === element) {
          animationName = getAnimationName();
        }
      };
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName();
        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
        if (event.target === element && isCurrentAnimation && presentState() === "hiding") {
          setPresentState("hidden");
        }
      };
      element.addEventListener("animationstart", handleAnimationStart);
      element.addEventListener("animationcancel", handleAnimationEnd);
      element.addEventListener("animationend", handleAnimationEnd);
      onCleanup(() => {
        element.removeEventListener("animationstart", handleAnimationStart);
        element.removeEventListener("animationcancel", handleAnimationEnd);
        element.removeEventListener("animationend", handleAnimationEnd);
      });
    });
    return {
      present: () => presentState() === "present" || presentState() === "hiding",
      state: presentState,
      setState: setPresentState
    };
  };
  var presence_default = createPresence;
  var src_default = presence_default;

  /**
   * Instantiate a new ResizeObserver that automatically get's disposed on cleanup.
   *
   * @param callback handler called once element size changes
   * @param options ResizeObserver options
   * @returns `observe` and `unobserve` functions
   */
  function makeResizeObserver(callback, options) {
      const observer = new ResizeObserver(callback);
      onCleanup(observer.disconnect.bind(observer));
      return {
          observe: ref => observer.observe(ref, options),
          unobserve: observer.unobserve.bind(observer),
      };
  }
  /**
   * Create resize observer instance, listening for changes to size of the reactive {@link targets} array.
   *
   * @param targets Elements to be observed. Can be a reactive signal or store top-level array.
   * @param onResize - Function handler to trigger on element resize
   *
   * @example
   * ```tsx
   * let ref
   * createResizeObserver(() => ref, ({ width, height }, el) => {
   *   if (el === ref) console.log(width, height)
   * });
   * <div ref={ref}/>
   * ```
   */
  function createResizeObserver(targets, onResize, options) {
      const previousMap = new WeakMap(), { observe, unobserve } = makeResizeObserver(entries => {
          for (const entry of entries) {
              const { contentRect, target } = entry, width = Math.round(contentRect.width), height = Math.round(contentRect.height), previous = previousMap.get(target);
              if (!previous || previous.width !== width || previous.height !== height) {
                  onResize(contentRect, target, entry);
                  previousMap.set(target, { width, height });
              }
          }
      }, options);
      createEffect((prev) => {
          const refs = filterNonNullable(asArray(access$1(targets)));
          handleDiffArray(refs, prev, observe, unobserve);
          return refs;
      }, []);
  }

  var tabs_exports = {};
  __export(tabs_exports, {
    Content: () => TabsContent,
    Indicator: () => TabsIndicator,
    List: () => TabsList,
    Root: () => TabsRoot,
    Tabs: () => Tabs,
    Trigger: () => TabsTrigger
  });
  var TabsContext = createContext();
  function useTabsContext() {
    const context = useContext(TabsContext);
    if (context === void 0) {
      throw new Error("[kobalte]: `useTabsContext` must be used within a `Tabs` component");
    }
    return context;
  }
  function TabsContent(props) {
    const [ref, setRef] = createSignal();
    const context = useTabsContext();
    const [local, others] = splitProps(props, ["ref", "id", "value", "forceMount"]);
    const [tabIndex, setTabIndex] = createSignal(0);
    const id = () => local.id ?? context.generateContentId(local.value);
    const isSelected = () => context.listState().selectedKey() === local.value;
    const {
      present
    } = src_default({
      show: () => local.forceMount || isSelected(),
      element: () => ref() ?? null
    });
    createEffect(on([() => ref(), () => present()], ([ref2, isPresent]) => {
      if (ref2 == null || !isPresent) {
        return;
      }
      const updateTabIndex = () => {
        const walker = getFocusableTreeWalker(ref2, {
          tabbable: true
        });
        setTabIndex(walker.nextNode() ? void 0 : 0);
      };
      updateTabIndex();
      const observer = new MutationObserver(updateTabIndex);
      observer.observe(ref2, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["tabindex", "disabled"]
      });
      onCleanup(() => {
        observer.disconnect();
      });
    }));
    createEffect(on([() => local.value, id], ([value, id2]) => {
      context.contentIdsMap().set(value, id2);
    }));
    return createComponent(Show, {
      get when() {
        return present();
      },
      get children() {
        return createComponent(Polymorphic, mergeProps({
          as: "div",
          ref(r$) {
            var _ref$ = mergeRefs(setRef, local.ref);
            typeof _ref$ === "function" && _ref$(r$);
          },
          get id() {
            return id();
          },
          role: "tabpanel",
          get tabIndex() {
            return tabIndex();
          },
          get ["aria-labelledby"]() {
            return context.triggerIdsMap().get(local.value);
          },
          get ["data-orientation"]() {
            return context.orientation();
          },
          get ["data-selected"]() {
            return isSelected() ? "" : void 0;
          }
        }, others));
      }
    });
  }
  function TabsIndicator(props) {
    const context = useTabsContext();
    const [local, others] = splitProps(props, ["style"]);
    const [style, setStyle] = createSignal({
      width: void 0,
      height: void 0
    });
    const {
      direction
    } = useLocale();
    const computeStyle = () => {
      const selectedTab = context.selectedTab();
      if (selectedTab == null) {
        return;
      }
      const styleObj = {
        transform: void 0,
        width: void 0,
        height: void 0
      };
      const offset = direction() === "rtl" ? -1 * (selectedTab.offsetParent?.offsetWidth - selectedTab.offsetWidth - selectedTab.offsetLeft) : selectedTab.offsetLeft;
      styleObj.transform = context.orientation() === "vertical" ? `translateY(${selectedTab.offsetTop}px)` : `translateX(${offset}px)`;
      if (context.orientation() === "horizontal") {
        styleObj.width = `${selectedTab.offsetWidth}px`;
      } else {
        styleObj.height = `${selectedTab.offsetHeight}px`;
      }
      setStyle(styleObj);
    };
    onMount(() => {
      queueMicrotask(() => {
        computeStyle();
      });
    });
    createEffect(on([context.selectedTab, context.orientation, direction], () => {
      computeStyle();
    }, {
      defer: true
    }));
    const [resizing, setResizing] = createSignal(false);
    let timeout = null;
    let prevTarget = null;
    createResizeObserver(context.selectedTab, (_, t) => {
      if (prevTarget !== t) {
        prevTarget = t;
        return;
      }
      setResizing(true);
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        setResizing(false);
      }, 1);
      computeStyle();
    });
    return createComponent(Polymorphic, mergeProps({
      as: "div",
      role: "presentation",
      get style() {
        return combineStyle(style(), local.style);
      },
      get ["data-orientation"]() {
        return context.orientation();
      },
      get ["data-resizing"]() {
        return resizing();
      }
    }, others));
  }
  function TabsList(props) {
    let ref;
    const context = useTabsContext();
    const [local, others] = splitProps(props, ["ref", "onKeyDown", "onMouseDown", "onFocusIn", "onFocusOut"]);
    const {
      direction
    } = useLocale();
    const delegate = new TabsKeyboardDelegate(() => context.listState().collection(), direction, context.orientation);
    const selectableCollection = createSelectableCollection({
      selectionManager: () => context.listState().selectionManager(),
      keyboardDelegate: () => delegate,
      selectOnFocus: () => context.activationMode() === "automatic",
      shouldFocusWrap: false,
      // handled by the keyboard delegate
      disallowEmptySelection: true
    }, () => ref);
    createEffect(() => {
      if (ref == null) {
        return;
      }
      const selectedTab = ref.querySelector(`[data-key="${context.listState().selectedKey()}"]`);
      if (selectedTab != null) {
        context.setSelectedTab(selectedTab);
      }
    });
    return createComponent(Polymorphic, mergeProps({
      as: "div",
      ref(r$) {
        var _ref$2 = mergeRefs((el) => ref = el, local.ref);
        typeof _ref$2 === "function" && _ref$2(r$);
      },
      role: "tablist",
      get ["aria-orientation"]() {
        return context.orientation();
      },
      get ["data-orientation"]() {
        return context.orientation();
      },
      get onKeyDown() {
        return composeEventHandlers([local.onKeyDown, selectableCollection.onKeyDown]);
      },
      get onMouseDown() {
        return composeEventHandlers([local.onMouseDown, selectableCollection.onMouseDown]);
      },
      get onFocusIn() {
        return composeEventHandlers([local.onFocusIn, selectableCollection.onFocusIn]);
      },
      get onFocusOut() {
        return composeEventHandlers([local.onFocusOut, selectableCollection.onFocusOut]);
      }
    }, others));
  }
  function createSingleSelectListState(props) {
    const [selectedKey, setSelectedKey] = createControllableSignal({
      value: () => access$1(props.selectedKey),
      defaultValue: () => access$1(props.defaultSelectedKey),
      onChange: (value) => props.onSelectionChange?.(value)
    });
    const selectedKeys = createMemo(() => {
      const selection = selectedKey();
      return selection != null ? [selection] : [];
    });
    const [, defaultCreateListStateProps] = splitProps(props, ["onSelectionChange"]);
    const createListStateProps = mergeProps(defaultCreateListStateProps, {
      selectionMode: "single",
      disallowEmptySelection: true,
      allowDuplicateSelectionEvents: true,
      selectedKeys,
      onSelectionChange: (keys) => {
        const key = keys.values().next().value;
        if (key === selectedKey()) {
          props.onSelectionChange?.(key);
        }
        setSelectedKey(key);
      }
    });
    const {
      collection,
      selectionManager
    } = createListState(createListStateProps);
    const selectedItem = createMemo(() => {
      const selection = selectedKey();
      return selection != null ? collection().getItem(selection) : void 0;
    });
    return {
      collection,
      selectionManager,
      selectedKey,
      setSelectedKey,
      selectedItem
    };
  }
  function TabsRoot(props) {
    const defaultId = `tabs-${createUniqueId()}`;
    const mergedProps = mergeDefaultProps({
      id: defaultId,
      orientation: "horizontal",
      activationMode: "automatic"
    }, props);
    const [local, others] = splitProps(mergedProps, ["value", "defaultValue", "onChange", "orientation", "activationMode", "disabled"]);
    const [items, setItems] = createSignal([]);
    const [selectedTab, setSelectedTab] = createSignal();
    const {
      DomCollectionProvider
    } = createDomCollection({
      items,
      onItemsChange: setItems
    });
    const listState = createSingleSelectListState({
      selectedKey: () => local.value,
      defaultSelectedKey: () => local.defaultValue,
      onSelectionChange: (key) => local.onChange?.(String(key)),
      dataSource: items
    });
    let lastSelectedKey = listState.selectedKey();
    createEffect(on([() => listState.selectionManager(), () => listState.collection(), () => listState.selectedKey()], ([selectionManager, collection, currentSelectedKey]) => {
      let selectedKey = currentSelectedKey;
      if (selectionManager.isEmpty() || selectedKey == null || !collection.getItem(selectedKey)) {
        selectedKey = collection.getFirstKey();
        let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : void 0;
        while (selectedItem?.disabled && selectedItem.key !== collection.getLastKey()) {
          selectedKey = collection.getKeyAfter(selectedItem.key);
          selectedItem = selectedKey != null ? collection.getItem(selectedKey) : void 0;
        }
        if (selectedItem?.disabled && selectedKey === collection.getLastKey()) {
          selectedKey = collection.getFirstKey();
        }
        if (selectedKey != null) {
          selectionManager.setSelectedKeys([selectedKey]);
        }
      }
      if (selectionManager.focusedKey() == null || !selectionManager.isFocused() && selectedKey !== lastSelectedKey) {
        selectionManager.setFocusedKey(selectedKey);
      }
      lastSelectedKey = selectedKey;
    }));
    const triggerIdsMap = /* @__PURE__ */ new Map();
    const contentIdsMap = /* @__PURE__ */ new Map();
    const context = {
      isDisabled: () => local.disabled ?? false,
      orientation: () => local.orientation,
      activationMode: () => local.activationMode,
      triggerIdsMap: () => triggerIdsMap,
      contentIdsMap: () => contentIdsMap,
      listState: () => listState,
      selectedTab,
      setSelectedTab,
      generateTriggerId: (value) => `${others.id}-trigger-${value}`,
      generateContentId: (value) => `${others.id}-content-${value}`
    };
    return createComponent(DomCollectionProvider, {
      get children() {
        return createComponent(TabsContext.Provider, {
          value: context,
          get children() {
            return createComponent(Polymorphic, mergeProps({
              as: "div",
              get ["data-orientation"]() {
                return context.orientation();
              }
            }, others));
          }
        });
      }
    });
  }
  function TabsTrigger(props) {
    let ref;
    const context = useTabsContext();
    const mergedProps = mergeDefaultProps({
      type: "button"
    }, props);
    const [local, others] = splitProps(mergedProps, ["ref", "id", "value", "disabled", "onPointerDown", "onPointerUp", "onClick", "onKeyDown", "onMouseDown", "onFocus"]);
    const id = () => local.id ?? context.generateTriggerId(local.value);
    const isHighlighted = () => context.listState().selectionManager().focusedKey() === local.value;
    const isDisabled = () => local.disabled || context.isDisabled();
    const contentId = () => context.contentIdsMap().get(local.value);
    createDomCollectionItem({
      getItem: () => ({
        ref: () => ref,
        type: "item",
        key: local.value,
        textValue: "",
        // not applicable here
        disabled: isDisabled()
      })
    });
    const selectableItem = createSelectableItem({
      key: () => local.value,
      selectionManager: () => context.listState().selectionManager(),
      disabled: isDisabled
    }, () => ref);
    const onClick = (e) => {
      if (isWebKit()) {
        focusWithoutScrolling(e.currentTarget);
      }
    };
    createEffect(on([() => local.value, id], ([value, id2]) => {
      context.triggerIdsMap().set(value, id2);
    }));
    return createComponent(Polymorphic, mergeProps({
      as: "button",
      ref(r$) {
        var _ref$3 = mergeRefs((el) => ref = el, local.ref);
        typeof _ref$3 === "function" && _ref$3(r$);
      },
      get id() {
        return id();
      },
      role: "tab",
      get tabIndex() {
        return memo(() => !!!isDisabled())() ? selectableItem.tabIndex() : void 0;
      },
      get disabled() {
        return isDisabled();
      },
      get ["aria-selected"]() {
        return selectableItem.isSelected();
      },
      get ["aria-disabled"]() {
        return isDisabled() || void 0;
      },
      get ["aria-controls"]() {
        return memo(() => !!selectableItem.isSelected())() ? contentId() : void 0;
      },
      get ["data-key"]() {
        return selectableItem.dataKey();
      },
      get ["data-orientation"]() {
        return context.orientation();
      },
      get ["data-selected"]() {
        return selectableItem.isSelected() ? "" : void 0;
      },
      get ["data-highlighted"]() {
        return isHighlighted() ? "" : void 0;
      },
      get ["data-disabled"]() {
        return isDisabled() ? "" : void 0;
      },
      get onPointerDown() {
        return composeEventHandlers([local.onPointerDown, selectableItem.onPointerDown]);
      },
      get onPointerUp() {
        return composeEventHandlers([local.onPointerUp, selectableItem.onPointerUp]);
      },
      get onClick() {
        return composeEventHandlers([local.onClick, selectableItem.onClick, onClick]);
      },
      get onKeyDown() {
        return composeEventHandlers([local.onKeyDown, selectableItem.onKeyDown]);
      },
      get onMouseDown() {
        return composeEventHandlers([local.onMouseDown, selectableItem.onMouseDown]);
      },
      get onFocus() {
        return composeEventHandlers([local.onFocus, selectableItem.onFocus]);
      }
    }, others));
  }
  var Tabs = Object.assign(TabsRoot, {
    Content: TabsContent,
    Indicator: TabsIndicator,
    List: TabsList,
    Trigger: TabsTrigger
  });

  var _tmpl$$2 = /* @__PURE__ */ template(`<div class=e:flex><div class=e:bg-red-300><div class=e:relative>`), _tmpl$2$1 = /* @__PURE__ */ template(`<div class="e:pt-6 e:pb-7 e:bg-black e:flex-1"> <div class="e:flex e:justify-center">`);
  const TopSettingsNav = (props) => {
    const handleSelectTab = (value) => {
      props.setSelectedTab(value);
    };
    return (() => {
      var _el$ = _tmpl$2$1(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
      insert(_el$3, createComponent(Tabs, {
        get value() {
          return props.selectedTab;
        },
        onChange: handleSelectTab,
        get children() {
          var _el$4 = _tmpl$$2(), _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild;
          insert(_el$6, createComponent(Tabs.List, {
            get children() {
              return [createComponent(For, {
                each: navItems,
                children: (nav) => {
                  return createComponent(Tabs.Trigger, {
                    "class": "e:px-2 e:py-[11px]",
                    get value() {
                      return nav.value;
                    },
                    get children() {
                      return createComponent(Typography, {
                        get size() {
                          return FontSize.lg;
                        },
                        get weight() {
                          return FW.semi;
                        },
                        get children() {
                          return nav.label;
                        }
                      });
                    }
                  });
                }
              }), createComponent(Tabs.Indicator, {
                "class": "e:h-[1px] e:bg-white e:absolute e:bottom-[-2px] e:transition-all"
              })];
            }
          }));
          return _el$4;
        }
      }));
      return _el$;
    })();
  };

  var _tmpl$$1 = /* @__PURE__ */ template(`<div class="e:flex e:flex-col e:w-screen e:h-screen e:bg-black"><div>`), _tmpl$2 = /* @__PURE__ */ template(`<div class="e:flex e:flex-1 e:justify-center e:min-h-[662px]"><div>`);
  const Container = (props) => (() => {
    var _el$ = _tmpl$$1(), _el$2 = _el$.firstChild;
    insert(_el$2, () => props.children);
    return _el$;
  })();
  const Content = (props) => (() => {
    var _el$3 = _tmpl$2(), _el$4 = _el$3.firstChild;
    insert(_el$4, () => props.children);
    return _el$3;
  })();

  const SettingsOthers = (props) => {
    return createComponent(Paper, {
      get children() {
        return createComponent(Button, {
          get onClick() {
            return props.onSetStorageToDefault;
          },
          children: "Set Storage to Default"
        });
      }
    });
  };

  const Settings = (props) => {
    const {
      saveBuySellSettings
    } = useStartCabalService();
    const {
      others,
      selectedTab,
      setSelectedTab,
      bsState
    } = useSettingsStore({
      handlers: props.handlers,
      saveBSConfig: (value) => {
        saveBuySellSettings(value);
      }
    });
    return createComponent(Container, {
      get children() {
        return [createComponent(TopSettingsNav, {
          get selectedTab() {
            return selectedTab();
          },
          setSelectedTab
        }), createComponent(Content, {
          get children() {
            return [createComponent(Show, {
              get when() {
                return selectedTab() === TabNames.buysell;
              },
              get children() {
                return createComponent(BuySellSettingsForm, {
                  state: bsState
                });
              }
            }), createComponent(Show, {
              get when() {
                return selectedTab() === TabNames.autolimits;
              },
              get children() {
                return createComponent(AutoLimitsSettingsForm, {});
              }
            }), createComponent(Show, {
              get when() {
                return selectedTab() === TabNames.migrationsnipe;
              },
              get children() {
                return createComponent(MigrationSnipeSettingsForm, {});
              }
            }), createComponent(Show, {
              get when() {
                return selectedTab() === TabNames.limit;
              },
              get children() {
                return createComponent(LimitSettingsForm, {});
              }
            }), createComponent(Show, {
              get when() {
                return selectedTab() === TabNames.txproc;
              },
              get children() {
                return createComponent(TxProcessorsForm, {});
              }
            }), createComponent(Show, {
              get when() {
                return selectedTab() === TabNames.others;
              },
              get children() {
                return createComponent(SettingsOthers, {
                  get onSetStorageToDefault() {
                    return others.onSetStorageToDefault;
                  }
                });
              }
            })];
          }
        }), createComponent(SettingsFooter, {})];
      }
    });
  };

  var _tmpl$ = /* @__PURE__ */ template(`<div>loading...`);
  function Home() {
    const cabalService = useStartCabalService();
    onMount(() => {
      cabalService.getConfig();
    });
    return createComponent(Show, {
      get when() {
        return !!configStore.config;
      },
      get fallback() {
        return _tmpl$();
      },
      get children() {
        return createComponent(Settings, {
          get handlers() {
            return {
              onReset: cabalService.resetConfig
            };
          }
        });
      }
    });
  }

  render(() => createComponent(Home, {}), document.getElementById("root"));

})();
//# sourceMappingURL=home.js.map
