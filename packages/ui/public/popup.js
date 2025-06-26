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

  const sharedConfig = {
    context: undefined,
    registry: undefined,
    effects: undefined,
    done: false,
    getContextId() {
      return getContextId(this.context.count);
    },
    getNextContextId() {
      return getContextId(this.context.count++);
    }
  };
  function getContextId(count) {
    const num = String(count),
      len = num.length - 1;
    return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
  }
  function setHydrateContext(context) {
    sharedConfig.context = context;
  }

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
    if (sharedConfig.context) {
      if (sharedConfig.count) {
        sharedConfig.effects || (sharedConfig.effects = []);
        sharedConfig.effects.push(...queue.slice(0, userLength));
        return;
      }
      setHydrateContext();
    }
    if (sharedConfig.effects && (!sharedConfig.count)) {
      queue = [...sharedConfig.effects, ...queue];
      userLength += sharedConfig.effects.length;
      delete sharedConfig.effects;
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
    const ctx = sharedConfig.context;
    return ctx ? sharedConfig.getNextContextId() : `cl-${counter++}`;
  }

  const narrowedError = name => `Stale read from <${name}>.`;
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
    if (isHydrating(node)) return;
    if (value == null) node.removeAttribute(name);else node.setAttribute(name, value);
  }
  function setAttributeNS(node, namespace, name, value) {
    if (isHydrating(node)) return;
    if (value == null) node.removeAttributeNS(namespace, name);else node.setAttributeNS(namespace, name, value);
  }
  function setBoolAttribute(node, name, value) {
    if (isHydrating(node)) return;
    value ? node.setAttribute(name, "") : node.removeAttribute(name);
  }
  function className(node, value) {
    if (isHydrating(node)) return;
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
  function getNextElement(template) {
    let node,
      key,
      hydrating = isHydrating();
    if (!hydrating || !(node = sharedConfig.registry.get(key = getHydrationKey()))) {
      return template();
    }
    if (sharedConfig.completed) sharedConfig.completed.add(node);
    sharedConfig.registry.delete(key);
    return node;
  }
  function isHydrating(node) {
    return !!sharedConfig.context && true && (!node || node.isConnected);
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
      } else if (isHydrating(node)) return value;
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
    const hydrating = isHydrating(parent);
    if (hydrating) {
      !current && (current = [...parent.childNodes]);
      let cleaned = [];
      for (let i = 0; i < current.length; i++) {
        const node = current[i];
        if (node.nodeType === 8 && node.data.slice(0, 2) === "!$") node.remove();else cleaned.push(node);
      }
      current = cleaned;
    }
    while (typeof current === "function") current = current();
    if (value === current) return current;
    const t = typeof value,
      multi = marker !== undefined;
    parent = multi && current[0] && current[0].parentNode || parent;
    if (t === "string" || t === "number") {
      if (hydrating) return current;
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
      if (hydrating) return current;
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
      if (hydrating) {
        if (!array.length) return current;
        if (marker === undefined) return current = [...parent.childNodes];
        let node = array[0];
        if (node.parentNode !== parent) return current;
        const nodes = [node];
        while ((node = node.nextSibling) !== marker) nodes.push(node);
        return current = nodes;
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
      if (hydrating && value.parentNode) return current = multi ? [value] : value;
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
  function getHydrationKey() {
    return sharedConfig.getNextContextId();
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
          const el = sharedConfig.context ? getNextElement() : createElement(component, isSvg);
          spread(el, props, isSvg);
          return el;
      }
    });
  }
  function Dynamic(props) {
    const [, others] = splitProps(props, ["component"]);
    return createDynamic(() => props.component, others);
  }

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
  const access = (v) => typeof v === "function" && !v.length ? v() : v;
  /** If value is a function – call it with a given arguments – otherwise get the value as is */
  function accessWith(valueOrFn, ...args) {
      return typeof valueOrFn === "function" ? valueOrFn(...args) : valueOrFn;
  }

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

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

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

  var _tmpl$$e = /* @__PURE__ */ template(`<span class="e:w-full e:flex e:px-2 epx2 e:py-1.5 epy1-5 e:items-center"><span class="e:flex-1 e:justify-start"><span></span></span><span class=e:justify-end><span>`);
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
            var _el$ = _tmpl$$e(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$2.nextSibling, _el$5 = _el$4.firstChild;
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

  var _tmpl$$d = /* @__PURE__ */ template(`<div>`);
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
      var _el$ = _tmpl$$d();
      insert(_el$, () => props.children);
      createRenderEffect(() => className(_el$, cn(commonClasses, color, size, weight, upper, nowrap, props.cn)));
      return _el$;
    })();
  };

  const SaveButton = (props) => {
    const [color, setColor] = createSignal(props.color);
    createEffect(() => {
      setColor(props.color);
      console.log("SaveButton ,", props.color);
    });
    const common = "e:px-5";
    const size = {
      "e:py-1": !props.size,
      "e:py-1.5": props.size === FontSize.sm
    };
    return createComponent(Button, {
      get color() {
        return color();
      },
      get cn() {
        return cn(size, common);
      },
      full: true,
      clipped: true,
      get disabled() {
        return props.disabled;
      },
      get onClick() {
        return props.onClick;
      },
      get children() {
        return createComponent(Typography, {
          get weight() {
            return FW.semi;
          },
          get nowrap() {
            return props.nowrap;
          },
          get size() {
            return props.size || FontSize.lg;
          },
          get color() {
            return TextColor.black;
          },
          get children() {
            return props.children || "-";
          }
        });
      }
    });
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

  var _tmpl$$c = /* @__PURE__ */ template(`<div>`);
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
      var _el$ = _tmpl$$c();
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
      "data-valid": access(mergedProps.validationState) === "valid" ? "" : void 0,
      "data-invalid": access(mergedProps.validationState) === "invalid" ? "" : void 0,
      "data-required": access(mergedProps.required) ? "" : void 0,
      "data-disabled": access(mergedProps.disabled) ? "" : void 0,
      "data-readonly": access(mergedProps.readOnly) ? "" : void 0
    }));
    const formControlContext = {
      name: () => access(mergedProps.name) ?? access(mergedProps.id),
      dataset,
      validationState: () => access(mergedProps.validationState),
      isRequired: () => access(mergedProps.required),
      isDisabled: () => access(mergedProps.disabled),
      isReadOnly: () => access(mergedProps.readOnly),
      labelId,
      fieldId,
      descriptionId,
      errorMessageId,
      getAriaLabelledBy,
      getAriaDescribedBy,
      generateId: createGenerateId(() => access(mergedProps.id)),
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
    createEffect(() => onCleanup(context.registerField(access(mergedProps.id))));
    return {
      fieldProps: {
        id: () => access(mergedProps.id),
        ariaLabel: () => access(mergedProps["aria-label"]),
        ariaLabelledBy: () => context.getAriaLabelledBy(access(mergedProps.id), access(mergedProps["aria-label"]), access(mergedProps["aria-labelledby"])),
        ariaDescribedBy: () => context.getAriaDescribedBy(access(mergedProps["aria-describedby"]))
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

  var _tmpl$$b = /* @__PURE__ */ template(`<div aria-hidden=true><input type=text tabindex=-1>`);
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
      var _el$ = _tmpl$$b(), _el$2 = _el$.firstChild;
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
      generateId: createGenerateId(() => access(formControlProps.id)),
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
                return access(formControlProps.id);
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

  chrome.runtime.getURL("assets2/cabal_logo_sign.svg");

  var _tmpl$$a = /* @__PURE__ */ template(`<div><img alt=logo>`);
  const logo = chrome.runtime.getURL("assets2/logo_cabal_horizontal.svg");
  const CabalLogoIcon = (props) => {
    return (() => {
      var _el$ = _tmpl$$a(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", logo);
      createRenderEffect(() => className(_el$, cn(common, props.cn, {
        [`e:size-${props.size}`]: !!props.size
      })));
      return _el$;
    })();
  };

  chrome.runtime.getURL("assets2/docs.svg");

  var _tmpl$$9 = /* @__PURE__ */ template(`<div><img alt=logout>`);
  const logout = chrome.runtime.getURL("assets2/logout.svg");
  const LogoutIcon = (props) => {
    return (() => {
      var _el$ = _tmpl$$9(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", logout);
      createRenderEffect(() => className(_el$, cn(common, props.cn, {
        [`e:size-${props.size}`]: !!props.size
      })));
      return _el$;
    })();
  };

  chrome.runtime.getURL("assets2/mode.svg");

  var _tmpl$$8 = /* @__PURE__ */ template(`<div><img alt=min>`);
  const min = chrome.runtime.getURL("assets2/min.svg");
  const MinIcon = (props) => {
    return (() => {
      var _el$ = _tmpl$$8(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", min);
      createRenderEffect(() => className(_el$, cn(common, props.cn, {
        [`e:size-${props.size}`]: !!props.size
      })));
      return _el$;
    })();
  };

  chrome.runtime.getURL("assets2/pin.svg");

  var _tmpl$$7 = /* @__PURE__ */ template(`<div><img alt=preferences>`);
  const preferences = chrome.runtime.getURL("assets2/preferences.svg");
  const PreferencesIcon = (props) => {
    return (() => {
      var _el$ = _tmpl$$7(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", preferences);
      createRenderEffect(() => className(_el$, cn(common, props.cn, {
        [`e:size-${props.size}`]: !!props.size
      })));
      return _el$;
    })();
  };

  chrome.runtime.getURL("assets2/share_icon.svg");

  chrome.runtime.getURL("assets2/sol_cut.svg");

  var _tmpl$$6 = /* @__PURE__ */ template(`<div><img alt=sol>`);
  const sol = chrome.runtime.getURL("assets2/sol.svg");
  const SolIcon = (props) => {
    const common = props.noStyles ? "" : "e:w-6 e:h-4";
    return (() => {
      var _el$ = _tmpl$$6(), _el$2 = _el$.firstChild;
      setAttribute(_el$2, "src", sol);
      createRenderEffect(() => className(_el$, cn(common, props.cn)));
      return _el$;
    })();
  };

  chrome.runtime.getURL("assets2/tooltip.svg");

  chrome.runtime.getURL("assets2/telegram.svg");

  chrome.runtime.getURL("assets2/trash_icon.svg");

  chrome.runtime.getURL("assets2/wallet.svg");

  chrome.runtime.getURL("assets2/x.svg");

  var _tmpl$$5 = /* @__PURE__ */ template(`<div class="e:w-6 e:h-4">`), _tmpl$2$1 = /* @__PURE__ */ template(`<div>`);
  var IIcon = /* @__PURE__ */ ((IIcon2) => {
    IIcon2["sol"] = "sol";
    IIcon2["perc"] = "perc";
    return IIcon2;
  })(IIcon || {});
  var InputSize = /* @__PURE__ */ ((InputSize2) => {
    InputSize2["sm"] = "sm";
    return InputSize2;
  })(InputSize || {});
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
          var _el$ = _tmpl$2$1();
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
              var _el$2 = _tmpl$$5();
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

  var text_field_exports = {};
  __export(text_field_exports, {
    Description: () => FormControlDescription,
    ErrorMessage: () => FormControlErrorMessage,
    Input: () => TextFieldInput,
    Label: () => FormControlLabel,
    Root: () => TextFieldRoot,
    TextArea: () => TextFieldTextArea,
    TextField: () => TextField
  });
  var TextFieldContext = createContext();
  function useTextFieldContext() {
    const context = useContext(TextFieldContext);
    if (context === void 0) {
      throw new Error("[kobalte]: `useTextFieldContext` must be used within a `TextField` component");
    }
    return context;
  }
  function TextFieldInput(props) {
    return createComponent(TextFieldInputBase, mergeProps({
      type: "text"
    }, props));
  }
  function TextFieldInputBase(props) {
    const formControlContext = useFormControlContext();
    const context = useTextFieldContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("input")
    }, props);
    const [local, formControlFieldProps, others] = splitProps(mergedProps, ["onInput"], FORM_CONTROL_FIELD_PROP_NAMES);
    const {
      fieldProps
    } = createFormControlField(formControlFieldProps);
    return createComponent(Polymorphic, mergeProps({
      as: "input",
      get id() {
        return fieldProps.id();
      },
      get name() {
        return formControlContext.name();
      },
      get value() {
        return context.value();
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
      get onInput() {
        return composeEventHandlers([local.onInput, context.onInput]);
      }
    }, () => formControlContext.dataset(), others));
  }
  function TextFieldRoot(props) {
    let ref;
    const defaultId = `textfield-${createUniqueId()}`;
    const mergedProps = mergeDefaultProps({
      id: defaultId
    }, props);
    const [local, formControlProps, others] = splitProps(mergedProps, ["ref", "value", "defaultValue", "onChange"], FORM_CONTROL_PROP_NAMES);
    const initialValue = local.value;
    const [value, setValue] = createControllableSignal({
      value: () => initialValue === void 0 ? void 0 : local.value ?? "",
      defaultValue: () => local.defaultValue,
      onChange: (value2) => local.onChange?.(value2)
    });
    const {
      formControlContext
    } = createFormControl(formControlProps);
    createFormResetListener(() => ref, () => setValue(local.defaultValue ?? ""));
    const onInput = (e) => {
      if (formControlContext.isReadOnly() || formControlContext.isDisabled()) {
        return;
      }
      const target = e.target;
      setValue(target.value);
      target.value = value() ?? "";
    };
    const context = {
      value,
      generateId: createGenerateId(() => access(formControlProps.id)),
      onInput
    };
    return createComponent(FormControlContext.Provider, {
      value: formControlContext,
      get children() {
        return createComponent(TextFieldContext.Provider, {
          value: context,
          get children() {
            return createComponent(Polymorphic, mergeProps({
              as: "div",
              ref(r$) {
                var _ref$ = mergeRefs((el) => ref = el, local.ref);
                typeof _ref$ === "function" && _ref$(r$);
              },
              role: "group",
              get id() {
                return access(formControlProps.id);
              }
            }, () => formControlContext.dataset(), others));
          }
        });
      }
    });
  }
  function TextFieldTextArea(props) {
    let ref;
    const context = useTextFieldContext();
    const mergedProps = mergeDefaultProps({
      id: context.generateId("textarea")
    }, props);
    const [local, others] = splitProps(mergedProps, ["ref", "autoResize", "submitOnEnter", "onKeyPress"]);
    createEffect(on([() => ref, () => local.autoResize, () => context.value()], ([ref2, autoResize]) => {
      if (!ref2 || !autoResize) {
        return;
      }
      adjustHeight(ref2);
    }));
    const onKeyPress = (event) => {
      if (ref && local.submitOnEnter && event.key === "Enter" && !event.shiftKey) {
        if (ref.form) {
          ref.form.requestSubmit();
          event.preventDefault();
        }
      }
    };
    return createComponent(TextFieldInputBase, mergeProps({
      as: "textarea",
      get ["aria-multiline"]() {
        return local.submitOnEnter ? "false" : void 0;
      },
      get onKeyPress() {
        return composeEventHandlers([local.onKeyPress, onKeyPress]);
      },
      ref(r$) {
        var _ref$2 = mergeRefs((el) => ref = el, local.ref);
        typeof _ref$2 === "function" && _ref$2(r$);
      }
    }, others));
  }
  function adjustHeight(el) {
    const prevAlignment = el.style.alignSelf;
    const prevOverflow = el.style.overflow;
    const isFirefox = "MozAppearance" in el.style;
    if (!isFirefox) {
      el.style.overflow = "hidden";
    }
    el.style.alignSelf = "start";
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight + (el.offsetHeight - el.clientHeight)}px`;
    el.style.overflow = prevOverflow;
    el.style.alignSelf = prevAlignment;
  }
  var TextField = Object.assign(TextFieldRoot, {
    Description: FormControlDescription,
    ErrorMessage: FormControlErrorMessage,
    Input: TextFieldInput,
    Label: FormControlLabel,
    TextArea: TextFieldTextArea
  });

  var _tmpl$$4 = /* @__PURE__ */ template(`<div>`);
  const TextInput = (props) => {
    const commonInputCN = "e:w-full e:text-xs e:leading-none e:outline-none";
    const inputColor = {
      "e:bg-green-100": props.color === IColor.green,
      "e:bg-red-100": props.color === IColor.red,
      "e:bg-black-100 e:text-white": props.color === IColor.grey
    };
    const fieldContainer = "e:flex e:items-center e:pr-3 e:border e:py-[11px] e:pl-4";
    const containerColor = {
      "e:bg-green-100 e:border-green-500": props.color === IColor.green,
      "e:bg-red-100 e:border-red-500": props.color === IColor.red,
      "e:bg-black-100 e:border-black-200": props.color === IColor.grey
    };
    return createComponent(TextField, {
      "class": "e:w-full",
      get value() {
        return props.value;
      },
      get onChange() {
        return props.onChange;
      },
      get children() {
        var _el$ = _tmpl$$4();
        insert(_el$, createComponent(TextField.Input, {
          get placeholder() {
            return props.placeholder;
          },
          get ["class"]() {
            return cn(commonInputCN, inputColor, props.cn);
          }
        }));
        createRenderEffect(() => className(_el$, cn(fieldContainer, containerColor)));
        return _el$;
      }
    });
  };

  var _tmpl$$3 = /* @__PURE__ */ template(`<div class="e:flex e:mb-4"><div></div><div class="e:flex e:flex-1 e:items-center"><div class="e:flex e:flex-1 e:justify-end e:gap-2"><div class=e:size-7.5></div><div class=e:size-7.5></div><div class=e:size-7.5>`);
  const PopupToolBar = (props) => {
    return (() => {
      var _el$ = _tmpl$$3(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.nextSibling, _el$7 = _el$6.nextSibling;
      insert(_el$5, createComponent(IconButton, {
        cn: "e:bg-black-100",
        get onClick() {
          return props.onLogout;
        },
        get children() {
          return createComponent(LogoutIcon, {
            size: "7.5"
          });
        }
      }));
      insert(_el$6, createComponent(IconButton, {
        cn: "e:bg-black-100",
        get onClick() {
          return props.onSettings;
        },
        get children() {
          return createComponent(PreferencesIcon, {
            size: "7.5"
          });
        }
      }));
      insert(_el$7, createComponent(IconButton, {
        cn: "e:bg-black-100",
        get children() {
          return createComponent(MinIcon, {
            size: "7.5"
          });
        }
      }));
      return _el$;
    })();
  };

  var _tmpl$$2 = /* @__PURE__ */ template(`<div class="e:flex e:items-end e:gap-2 e:mt-6"><div></div><div><div>`);
  const QuickBuyAmount = () => {
    return (() => {
      var _el$ = _tmpl$$2(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.firstChild;
      insert(_el$2, createComponent(NumberInput, {
        label: "Quick Buy Amount",
        get size() {
          return InputSize.sm;
        },
        value: "5",
        get color() {
          return IColor.grey;
        },
        get icon() {
          return IIcon.sol;
        },
        onChange: () => {
        }
      }));
      insert(_el$4, createComponent(SaveButton, {
        get color() {
          return BColor.green;
        },
        nowrap: true,
        get size() {
          return FontSize.sm;
        },
        onClick: () => {
          console.log("apply changes");
        },
        children: "Apply Changes"
      }));
      return _el$;
    })();
  };

  var util;
  (function (util) {
      util.assertEqual = (_) => { };
      function assertIs(_arg) { }
      util.assertIs = assertIs;
      function assertNever(_x) {
          throw new Error();
      }
      util.assertNever = assertNever;
      util.arrayToEnum = (items) => {
          const obj = {};
          for (const item of items) {
              obj[item] = item;
          }
          return obj;
      };
      util.getValidEnumValues = (obj) => {
          const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
          const filtered = {};
          for (const k of validKeys) {
              filtered[k] = obj[k];
          }
          return util.objectValues(filtered);
      };
      util.objectValues = (obj) => {
          return util.objectKeys(obj).map(function (e) {
              return obj[e];
          });
      };
      util.objectKeys = typeof Object.keys === "function" // eslint-disable-line ban/ban
          ? (obj) => Object.keys(obj) // eslint-disable-line ban/ban
          : (object) => {
              const keys = [];
              for (const key in object) {
                  if (Object.prototype.hasOwnProperty.call(object, key)) {
                      keys.push(key);
                  }
              }
              return keys;
          };
      util.find = (arr, checker) => {
          for (const item of arr) {
              if (checker(item))
                  return item;
          }
          return undefined;
      };
      util.isInteger = typeof Number.isInteger === "function"
          ? (val) => Number.isInteger(val) // eslint-disable-line ban/ban
          : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
          return array.map((val) => (typeof val === "string" ? `'${val}'` : val)).join(separator);
      }
      util.joinValues = joinValues;
      util.jsonStringifyReplacer = (_, value) => {
          if (typeof value === "bigint") {
              return value.toString();
          }
          return value;
      };
  })(util || (util = {}));
  var objectUtil;
  (function (objectUtil) {
      objectUtil.mergeShapes = (first, second) => {
          return {
              ...first,
              ...second, // second overwrites first
          };
      };
  })(objectUtil || (objectUtil = {}));
  const ZodParsedType = util.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set",
  ]);
  const getParsedType = (data) => {
      const t = typeof data;
      switch (t) {
          case "undefined":
              return ZodParsedType.undefined;
          case "string":
              return ZodParsedType.string;
          case "number":
              return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
          case "boolean":
              return ZodParsedType.boolean;
          case "function":
              return ZodParsedType.function;
          case "bigint":
              return ZodParsedType.bigint;
          case "symbol":
              return ZodParsedType.symbol;
          case "object":
              if (Array.isArray(data)) {
                  return ZodParsedType.array;
              }
              if (data === null) {
                  return ZodParsedType.null;
              }
              if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                  return ZodParsedType.promise;
              }
              if (typeof Map !== "undefined" && data instanceof Map) {
                  return ZodParsedType.map;
              }
              if (typeof Set !== "undefined" && data instanceof Set) {
                  return ZodParsedType.set;
              }
              if (typeof Date !== "undefined" && data instanceof Date) {
                  return ZodParsedType.date;
              }
              return ZodParsedType.object;
          default:
              return ZodParsedType.unknown;
      }
  };

  const ZodIssueCode = util.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite",
  ]);
  class ZodError extends Error {
      get errors() {
          return this.issues;
      }
      constructor(issues) {
          super();
          this.issues = [];
          this.addIssue = (sub) => {
              this.issues = [...this.issues, sub];
          };
          this.addIssues = (subs = []) => {
              this.issues = [...this.issues, ...subs];
          };
          const actualProto = new.target.prototype;
          if (Object.setPrototypeOf) {
              // eslint-disable-next-line ban/ban
              Object.setPrototypeOf(this, actualProto);
          }
          else {
              this.__proto__ = actualProto;
          }
          this.name = "ZodError";
          this.issues = issues;
      }
      format(_mapper) {
          const mapper = _mapper ||
              function (issue) {
                  return issue.message;
              };
          const fieldErrors = { _errors: [] };
          const processError = (error) => {
              for (const issue of error.issues) {
                  if (issue.code === "invalid_union") {
                      issue.unionErrors.map(processError);
                  }
                  else if (issue.code === "invalid_return_type") {
                      processError(issue.returnTypeError);
                  }
                  else if (issue.code === "invalid_arguments") {
                      processError(issue.argumentsError);
                  }
                  else if (issue.path.length === 0) {
                      fieldErrors._errors.push(mapper(issue));
                  }
                  else {
                      let curr = fieldErrors;
                      let i = 0;
                      while (i < issue.path.length) {
                          const el = issue.path[i];
                          const terminal = i === issue.path.length - 1;
                          if (!terminal) {
                              curr[el] = curr[el] || { _errors: [] };
                              // if (typeof el === "string") {
                              //   curr[el] = curr[el] || { _errors: [] };
                              // } else if (typeof el === "number") {
                              //   const errorArray: any = [];
                              //   errorArray._errors = [];
                              //   curr[el] = curr[el] || errorArray;
                              // }
                          }
                          else {
                              curr[el] = curr[el] || { _errors: [] };
                              curr[el]._errors.push(mapper(issue));
                          }
                          curr = curr[el];
                          i++;
                      }
                  }
              }
          };
          processError(this);
          return fieldErrors;
      }
      static assert(value) {
          if (!(value instanceof ZodError)) {
              throw new Error(`Not a ZodError: ${value}`);
          }
      }
      toString() {
          return this.message;
      }
      get message() {
          return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
          return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
          const fieldErrors = {};
          const formErrors = [];
          for (const sub of this.issues) {
              if (sub.path.length > 0) {
                  fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
                  fieldErrors[sub.path[0]].push(mapper(sub));
              }
              else {
                  formErrors.push(mapper(sub));
              }
          }
          return { formErrors, fieldErrors };
      }
      get formErrors() {
          return this.flatten();
      }
  }
  ZodError.create = (issues) => {
      const error = new ZodError(issues);
      return error;
  };

  const errorMap = (issue, _ctx) => {
      let message;
      switch (issue.code) {
          case ZodIssueCode.invalid_type:
              if (issue.received === ZodParsedType.undefined) {
                  message = "Required";
              }
              else {
                  message = `Expected ${issue.expected}, received ${issue.received}`;
              }
              break;
          case ZodIssueCode.invalid_literal:
              message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
              break;
          case ZodIssueCode.unrecognized_keys:
              message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
              break;
          case ZodIssueCode.invalid_union:
              message = `Invalid input`;
              break;
          case ZodIssueCode.invalid_union_discriminator:
              message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
              break;
          case ZodIssueCode.invalid_enum_value:
              message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
              break;
          case ZodIssueCode.invalid_arguments:
              message = `Invalid function arguments`;
              break;
          case ZodIssueCode.invalid_return_type:
              message = `Invalid function return type`;
              break;
          case ZodIssueCode.invalid_date:
              message = `Invalid date`;
              break;
          case ZodIssueCode.invalid_string:
              if (typeof issue.validation === "object") {
                  if ("includes" in issue.validation) {
                      message = `Invalid input: must include "${issue.validation.includes}"`;
                      if (typeof issue.validation.position === "number") {
                          message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                      }
                  }
                  else if ("startsWith" in issue.validation) {
                      message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                  }
                  else if ("endsWith" in issue.validation) {
                      message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                  }
                  else {
                      util.assertNever(issue.validation);
                  }
              }
              else if (issue.validation !== "regex") {
                  message = `Invalid ${issue.validation}`;
              }
              else {
                  message = "Invalid";
              }
              break;
          case ZodIssueCode.too_small:
              if (issue.type === "array")
                  message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
              else if (issue.type === "string")
                  message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
              else if (issue.type === "number")
                  message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
              else if (issue.type === "date")
                  message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
              else
                  message = "Invalid input";
              break;
          case ZodIssueCode.too_big:
              if (issue.type === "array")
                  message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
              else if (issue.type === "string")
                  message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
              else if (issue.type === "number")
                  message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
              else if (issue.type === "bigint")
                  message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
              else if (issue.type === "date")
                  message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
              else
                  message = "Invalid input";
              break;
          case ZodIssueCode.custom:
              message = `Invalid input`;
              break;
          case ZodIssueCode.invalid_intersection_types:
              message = `Intersection results could not be merged`;
              break;
          case ZodIssueCode.not_multiple_of:
              message = `Number must be a multiple of ${issue.multipleOf}`;
              break;
          case ZodIssueCode.not_finite:
              message = "Number must be finite";
              break;
          default:
              message = _ctx.defaultError;
              util.assertNever(issue);
      }
      return { message };
  };

  let overrideErrorMap = errorMap;
  function getErrorMap() {
      return overrideErrorMap;
  }

  const makeIssue = (params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...(issueData.path || [])];
      const fullIssue = {
          ...issueData,
          path: fullPath,
      };
      if (issueData.message !== undefined) {
          return {
              ...issueData,
              path: fullPath,
              message: issueData.message,
          };
      }
      let errorMessage = "";
      const maps = errorMaps
          .filter((m) => !!m)
          .slice()
          .reverse();
      for (const map of maps) {
          errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
          ...issueData,
          path: fullPath,
          message: errorMessage,
      };
  };
  function addIssueToContext(ctx, issueData) {
      const overrideMap = getErrorMap();
      const issue = makeIssue({
          issueData: issueData,
          data: ctx.data,
          path: ctx.path,
          errorMaps: [
              ctx.common.contextualErrorMap, // contextual error map is first priority
              ctx.schemaErrorMap, // then schema-bound map if available
              overrideMap, // then global override map
              overrideMap === errorMap ? undefined : errorMap, // then global default map
          ].filter((x) => !!x),
      });
      ctx.common.issues.push(issue);
  }
  class ParseStatus {
      constructor() {
          this.value = "valid";
      }
      dirty() {
          if (this.value === "valid")
              this.value = "dirty";
      }
      abort() {
          if (this.value !== "aborted")
              this.value = "aborted";
      }
      static mergeArray(status, results) {
          const arrayValue = [];
          for (const s of results) {
              if (s.status === "aborted")
                  return INVALID;
              if (s.status === "dirty")
                  status.dirty();
              arrayValue.push(s.value);
          }
          return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
          const syncPairs = [];
          for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                  key,
                  value,
              });
          }
          return ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
          const finalObject = {};
          for (const pair of pairs) {
              const { key, value } = pair;
              if (key.status === "aborted")
                  return INVALID;
              if (value.status === "aborted")
                  return INVALID;
              if (key.status === "dirty")
                  status.dirty();
              if (value.status === "dirty")
                  status.dirty();
              if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
                  finalObject[key.value] = value.value;
              }
          }
          return { status: status.value, value: finalObject };
      }
  }
  const INVALID = Object.freeze({
      status: "aborted",
  });
  const DIRTY = (value) => ({ status: "dirty", value });
  const OK = (value) => ({ status: "valid", value });
  const isAborted = (x) => x.status === "aborted";
  const isDirty = (x) => x.status === "dirty";
  const isValid = (x) => x.status === "valid";
  const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

  var errorUtil;
  (function (errorUtil) {
      errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      // biome-ignore lint:
      errorUtil.toString = (message) => typeof message === "string" ? message : message?.message;
  })(errorUtil || (errorUtil = {}));

  var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
  };
  var _ZodEnum_cache, _ZodNativeEnum_cache;
  class ParseInputLazyPath {
      constructor(parent, value, path, key) {
          this._cachedPath = [];
          this.parent = parent;
          this.data = value;
          this._path = path;
          this._key = key;
      }
      get path() {
          if (!this._cachedPath.length) {
              if (Array.isArray(this._key)) {
                  this._cachedPath.push(...this._path, ...this._key);
              }
              else {
                  this._cachedPath.push(...this._path, this._key);
              }
          }
          return this._cachedPath;
      }
  }
  const handleResult = (ctx, result) => {
      if (isValid(result)) {
          return { success: true, data: result.value };
      }
      else {
          if (!ctx.common.issues.length) {
              throw new Error("Validation failed but no issues detected.");
          }
          return {
              success: false,
              get error() {
                  if (this._error)
                      return this._error;
                  const error = new ZodError(ctx.common.issues);
                  this._error = error;
                  return this._error;
              },
          };
      }
  };
  function processCreateParams(params) {
      if (!params)
          return {};
      const { errorMap, invalid_type_error, required_error, description } = params;
      if (errorMap && (invalid_type_error || required_error)) {
          throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      }
      if (errorMap)
          return { errorMap: errorMap, description };
      const customMap = (iss, ctx) => {
          const { message } = params;
          if (iss.code === "invalid_enum_value") {
              return { message: message ?? ctx.defaultError };
          }
          if (typeof ctx.data === "undefined") {
              return { message: message ?? required_error ?? ctx.defaultError };
          }
          if (iss.code !== "invalid_type")
              return { message: ctx.defaultError };
          return { message: message ?? invalid_type_error ?? ctx.defaultError };
      };
      return { errorMap: customMap, description };
  }
  class ZodType {
      get description() {
          return this._def.description;
      }
      _getType(input) {
          return getParsedType(input.data);
      }
      _getOrReturnCtx(input, ctx) {
          return (ctx || {
              common: input.parent.common,
              data: input.data,
              parsedType: getParsedType(input.data),
              schemaErrorMap: this._def.errorMap,
              path: input.path,
              parent: input.parent,
          });
      }
      _processInputParams(input) {
          return {
              status: new ParseStatus(),
              ctx: {
                  common: input.parent.common,
                  data: input.data,
                  parsedType: getParsedType(input.data),
                  schemaErrorMap: this._def.errorMap,
                  path: input.path,
                  parent: input.parent,
              },
          };
      }
      _parseSync(input) {
          const result = this._parse(input);
          if (isAsync(result)) {
              throw new Error("Synchronous parse encountered promise.");
          }
          return result;
      }
      _parseAsync(input) {
          const result = this._parse(input);
          return Promise.resolve(result);
      }
      parse(data, params) {
          const result = this.safeParse(data, params);
          if (result.success)
              return result.data;
          throw result.error;
      }
      safeParse(data, params) {
          const ctx = {
              common: {
                  issues: [],
                  async: params?.async ?? false,
                  contextualErrorMap: params?.errorMap,
              },
              path: params?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data,
              parsedType: getParsedType(data),
          };
          const result = this._parseSync({ data, path: ctx.path, parent: ctx });
          return handleResult(ctx, result);
      }
      "~validate"(data) {
          const ctx = {
              common: {
                  issues: [],
                  async: !!this["~standard"].async,
              },
              path: [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data,
              parsedType: getParsedType(data),
          };
          if (!this["~standard"].async) {
              try {
                  const result = this._parseSync({ data, path: [], parent: ctx });
                  return isValid(result)
                      ? {
                          value: result.value,
                      }
                      : {
                          issues: ctx.common.issues,
                      };
              }
              catch (err) {
                  if (err?.message?.toLowerCase()?.includes("encountered")) {
                      this["~standard"].async = true;
                  }
                  ctx.common = {
                      issues: [],
                      async: true,
                  };
              }
          }
          return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result)
              ? {
                  value: result.value,
              }
              : {
                  issues: ctx.common.issues,
              });
      }
      async parseAsync(data, params) {
          const result = await this.safeParseAsync(data, params);
          if (result.success)
              return result.data;
          throw result.error;
      }
      async safeParseAsync(data, params) {
          const ctx = {
              common: {
                  issues: [],
                  contextualErrorMap: params?.errorMap,
                  async: true,
              },
              path: params?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data,
              parsedType: getParsedType(data),
          };
          const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
          const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
          return handleResult(ctx, result);
      }
      refine(check, message) {
          const getIssueProperties = (val) => {
              if (typeof message === "string" || typeof message === "undefined") {
                  return { message };
              }
              else if (typeof message === "function") {
                  return message(val);
              }
              else {
                  return message;
              }
          };
          return this._refinement((val, ctx) => {
              const result = check(val);
              const setError = () => ctx.addIssue({
                  code: ZodIssueCode.custom,
                  ...getIssueProperties(val),
              });
              if (typeof Promise !== "undefined" && result instanceof Promise) {
                  return result.then((data) => {
                      if (!data) {
                          setError();
                          return false;
                      }
                      else {
                          return true;
                      }
                  });
              }
              if (!result) {
                  setError();
                  return false;
              }
              else {
                  return true;
              }
          });
      }
      refinement(check, refinementData) {
          return this._refinement((val, ctx) => {
              if (!check(val)) {
                  ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                  return false;
              }
              else {
                  return true;
              }
          });
      }
      _refinement(refinement) {
          return new ZodEffects({
              schema: this,
              typeName: ZodFirstPartyTypeKind.ZodEffects,
              effect: { type: "refinement", refinement },
          });
      }
      superRefine(refinement) {
          return this._refinement(refinement);
      }
      constructor(def) {
          /** Alias of safeParseAsync */
          this.spa = this.safeParseAsync;
          this._def = def;
          this.parse = this.parse.bind(this);
          this.safeParse = this.safeParse.bind(this);
          this.parseAsync = this.parseAsync.bind(this);
          this.safeParseAsync = this.safeParseAsync.bind(this);
          this.spa = this.spa.bind(this);
          this.refine = this.refine.bind(this);
          this.refinement = this.refinement.bind(this);
          this.superRefine = this.superRefine.bind(this);
          this.optional = this.optional.bind(this);
          this.nullable = this.nullable.bind(this);
          this.nullish = this.nullish.bind(this);
          this.array = this.array.bind(this);
          this.promise = this.promise.bind(this);
          this.or = this.or.bind(this);
          this.and = this.and.bind(this);
          this.transform = this.transform.bind(this);
          this.brand = this.brand.bind(this);
          this.default = this.default.bind(this);
          this.catch = this.catch.bind(this);
          this.describe = this.describe.bind(this);
          this.pipe = this.pipe.bind(this);
          this.readonly = this.readonly.bind(this);
          this.isNullable = this.isNullable.bind(this);
          this.isOptional = this.isOptional.bind(this);
          this["~standard"] = {
              version: 1,
              vendor: "zod",
              validate: (data) => this["~validate"](data),
          };
      }
      optional() {
          return ZodOptional.create(this, this._def);
      }
      nullable() {
          return ZodNullable.create(this, this._def);
      }
      nullish() {
          return this.nullable().optional();
      }
      array() {
          return ZodArray.create(this);
      }
      promise() {
          return ZodPromise.create(this, this._def);
      }
      or(option) {
          return ZodUnion.create([this, option], this._def);
      }
      and(incoming) {
          return ZodIntersection.create(this, incoming, this._def);
      }
      transform(transform) {
          return new ZodEffects({
              ...processCreateParams(this._def),
              schema: this,
              typeName: ZodFirstPartyTypeKind.ZodEffects,
              effect: { type: "transform", transform },
          });
      }
      default(def) {
          const defaultValueFunc = typeof def === "function" ? def : () => def;
          return new ZodDefault({
              ...processCreateParams(this._def),
              innerType: this,
              defaultValue: defaultValueFunc,
              typeName: ZodFirstPartyTypeKind.ZodDefault,
          });
      }
      brand() {
          return new ZodBranded({
              typeName: ZodFirstPartyTypeKind.ZodBranded,
              type: this,
              ...processCreateParams(this._def),
          });
      }
      catch(def) {
          const catchValueFunc = typeof def === "function" ? def : () => def;
          return new ZodCatch({
              ...processCreateParams(this._def),
              innerType: this,
              catchValue: catchValueFunc,
              typeName: ZodFirstPartyTypeKind.ZodCatch,
          });
      }
      describe(description) {
          const This = this.constructor;
          return new This({
              ...this._def,
              description,
          });
      }
      pipe(target) {
          return ZodPipeline.create(this, target);
      }
      readonly() {
          return ZodReadonly.create(this);
      }
      isOptional() {
          return this.safeParse(undefined).success;
      }
      isNullable() {
          return this.safeParse(null).success;
      }
  }
  const cuidRegex = /^c[^\s-]{8,}$/i;
  const cuid2Regex = /^[0-9a-z]+$/;
  const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
  // const uuidRegex =
  //   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
  const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
  const nanoidRegex = /^[a-z0-9_-]{21}$/i;
  const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
  const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
  // from https://stackoverflow.com/a/46181/1550155
  // old version: too slow, didn't support unicode
  // const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  //old email regex
  // const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
  // eslint-disable-next-line
  // const emailRegex =
  //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
  // const emailRegex =
  //   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  // const emailRegex =
  //   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
  const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
  // const emailRegex =
  //   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;
  // from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
  const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
  let emojiRegex;
  // faster, simpler, safer
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
  const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
  // const ipv6Regex =
  // /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
  const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
  const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
  // https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
  const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  // https://base64.guru/standards/base64url
  const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
  // simple
  // const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
  // no leap year validation
  // const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
  // with leap year validation
  const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
  const dateRegex = new RegExp(`^${dateRegexSource}$`);
  function timeRegexSource(args) {
      let secondsRegexSource = `[0-5]\\d`;
      if (args.precision) {
          secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
      }
      else if (args.precision == null) {
          secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
      }
      const secondsQuantifier = args.precision ? "+" : "?"; // require seconds if precision is nonzero
      return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
  }
  function timeRegex(args) {
      return new RegExp(`^${timeRegexSource(args)}$`);
  }
  // Adapted from https://stackoverflow.com/a/3143231
  function datetimeRegex(args) {
      let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
      const opts = [];
      opts.push(args.local ? `Z?` : `Z`);
      if (args.offset)
          opts.push(`([+-]\\d{2}:?\\d{2})`);
      regex = `${regex}(${opts.join("|")})`;
      return new RegExp(`^${regex}$`);
  }
  function isValidIP(ip, version) {
      if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
          return true;
      }
      if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
          return true;
      }
      return false;
  }
  function isValidJWT(jwt, alg) {
      if (!jwtRegex.test(jwt))
          return false;
      try {
          const [header] = jwt.split(".");
          // Convert base64url to base64
          const base64 = header
              .replace(/-/g, "+")
              .replace(/_/g, "/")
              .padEnd(header.length + ((4 - (header.length % 4)) % 4), "=");
          const decoded = JSON.parse(atob(base64));
          if (typeof decoded !== "object" || decoded === null)
              return false;
          if ("typ" in decoded && decoded?.typ !== "JWT")
              return false;
          if (!decoded.alg)
              return false;
          if (alg && decoded.alg !== alg)
              return false;
          return true;
      }
      catch {
          return false;
      }
  }
  function isValidCidr(ip, version) {
      if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
          return true;
      }
      if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
          return true;
      }
      return false;
  }
  class ZodString extends ZodType {
      _parse(input) {
          if (this._def.coerce) {
              input.data = String(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.string) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.string,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          const status = new ParseStatus();
          let ctx = undefined;
          for (const check of this._def.checks) {
              if (check.kind === "min") {
                  if (input.data.length < check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_small,
                          minimum: check.value,
                          type: "string",
                          inclusive: true,
                          exact: false,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "max") {
                  if (input.data.length > check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_big,
                          maximum: check.value,
                          type: "string",
                          inclusive: true,
                          exact: false,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "length") {
                  const tooBig = input.data.length > check.value;
                  const tooSmall = input.data.length < check.value;
                  if (tooBig || tooSmall) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      if (tooBig) {
                          addIssueToContext(ctx, {
                              code: ZodIssueCode.too_big,
                              maximum: check.value,
                              type: "string",
                              inclusive: true,
                              exact: true,
                              message: check.message,
                          });
                      }
                      else if (tooSmall) {
                          addIssueToContext(ctx, {
                              code: ZodIssueCode.too_small,
                              minimum: check.value,
                              type: "string",
                              inclusive: true,
                              exact: true,
                              message: check.message,
                          });
                      }
                      status.dirty();
                  }
              }
              else if (check.kind === "email") {
                  if (!emailRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "email",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "emoji") {
                  if (!emojiRegex) {
                      emojiRegex = new RegExp(_emojiRegex, "u");
                  }
                  if (!emojiRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "emoji",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "uuid") {
                  if (!uuidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "uuid",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "nanoid") {
                  if (!nanoidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "nanoid",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "cuid") {
                  if (!cuidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "cuid",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "cuid2") {
                  if (!cuid2Regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "cuid2",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "ulid") {
                  if (!ulidRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "ulid",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "url") {
                  try {
                      new URL(input.data);
                  }
                  catch {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "url",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "regex") {
                  check.regex.lastIndex = 0;
                  const testResult = check.regex.test(input.data);
                  if (!testResult) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "regex",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "trim") {
                  input.data = input.data.trim();
              }
              else if (check.kind === "includes") {
                  if (!input.data.includes(check.value, check.position)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: { includes: check.value, position: check.position },
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "toLowerCase") {
                  input.data = input.data.toLowerCase();
              }
              else if (check.kind === "toUpperCase") {
                  input.data = input.data.toUpperCase();
              }
              else if (check.kind === "startsWith") {
                  if (!input.data.startsWith(check.value)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: { startsWith: check.value },
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "endsWith") {
                  if (!input.data.endsWith(check.value)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: { endsWith: check.value },
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "datetime") {
                  const regex = datetimeRegex(check);
                  if (!regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: "datetime",
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "date") {
                  const regex = dateRegex;
                  if (!regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: "date",
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "time") {
                  const regex = timeRegex(check);
                  if (!regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_string,
                          validation: "time",
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "duration") {
                  if (!durationRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "duration",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "ip") {
                  if (!isValidIP(input.data, check.version)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "ip",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "jwt") {
                  if (!isValidJWT(input.data, check.alg)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "jwt",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "cidr") {
                  if (!isValidCidr(input.data, check.version)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "cidr",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "base64") {
                  if (!base64Regex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "base64",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "base64url") {
                  if (!base64urlRegex.test(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          validation: "base64url",
                          code: ZodIssueCode.invalid_string,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else {
                  util.assertNever(check);
              }
          }
          return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
          return this.refinement((data) => regex.test(data), {
              validation,
              code: ZodIssueCode.invalid_string,
              ...errorUtil.errToObj(message),
          });
      }
      _addCheck(check) {
          return new ZodString({
              ...this._def,
              checks: [...this._def.checks, check],
          });
      }
      email(message) {
          return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
      }
      url(message) {
          return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
      }
      emoji(message) {
          return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
      }
      uuid(message) {
          return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
      }
      nanoid(message) {
          return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
      }
      cuid(message) {
          return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
      }
      cuid2(message) {
          return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
      }
      ulid(message) {
          return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
      }
      base64(message) {
          return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
      }
      base64url(message) {
          // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
          return this._addCheck({
              kind: "base64url",
              ...errorUtil.errToObj(message),
          });
      }
      jwt(options) {
          return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
      }
      ip(options) {
          return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
      }
      cidr(options) {
          return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
      }
      datetime(options) {
          if (typeof options === "string") {
              return this._addCheck({
                  kind: "datetime",
                  precision: null,
                  offset: false,
                  local: false,
                  message: options,
              });
          }
          return this._addCheck({
              kind: "datetime",
              precision: typeof options?.precision === "undefined" ? null : options?.precision,
              offset: options?.offset ?? false,
              local: options?.local ?? false,
              ...errorUtil.errToObj(options?.message),
          });
      }
      date(message) {
          return this._addCheck({ kind: "date", message });
      }
      time(options) {
          if (typeof options === "string") {
              return this._addCheck({
                  kind: "time",
                  precision: null,
                  message: options,
              });
          }
          return this._addCheck({
              kind: "time",
              precision: typeof options?.precision === "undefined" ? null : options?.precision,
              ...errorUtil.errToObj(options?.message),
          });
      }
      duration(message) {
          return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
      }
      regex(regex, message) {
          return this._addCheck({
              kind: "regex",
              regex: regex,
              ...errorUtil.errToObj(message),
          });
      }
      includes(value, options) {
          return this._addCheck({
              kind: "includes",
              value: value,
              position: options?.position,
              ...errorUtil.errToObj(options?.message),
          });
      }
      startsWith(value, message) {
          return this._addCheck({
              kind: "startsWith",
              value: value,
              ...errorUtil.errToObj(message),
          });
      }
      endsWith(value, message) {
          return this._addCheck({
              kind: "endsWith",
              value: value,
              ...errorUtil.errToObj(message),
          });
      }
      min(minLength, message) {
          return this._addCheck({
              kind: "min",
              value: minLength,
              ...errorUtil.errToObj(message),
          });
      }
      max(maxLength, message) {
          return this._addCheck({
              kind: "max",
              value: maxLength,
              ...errorUtil.errToObj(message),
          });
      }
      length(len, message) {
          return this._addCheck({
              kind: "length",
              value: len,
              ...errorUtil.errToObj(message),
          });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
          return this.min(1, errorUtil.errToObj(message));
      }
      trim() {
          return new ZodString({
              ...this._def,
              checks: [...this._def.checks, { kind: "trim" }],
          });
      }
      toLowerCase() {
          return new ZodString({
              ...this._def,
              checks: [...this._def.checks, { kind: "toLowerCase" }],
          });
      }
      toUpperCase() {
          return new ZodString({
              ...this._def,
              checks: [...this._def.checks, { kind: "toUpperCase" }],
          });
      }
      get isDatetime() {
          return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
          return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
          return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
          return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
          return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
          return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
          return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
          return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
          return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
          return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
          return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
          return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
          return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
          return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
          return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
          // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
          return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
          let min = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "min") {
                  if (min === null || ch.value > min)
                      min = ch.value;
              }
          }
          return min;
      }
      get maxLength() {
          let max = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "max") {
                  if (max === null || ch.value < max)
                      max = ch.value;
              }
          }
          return max;
      }
  }
  ZodString.create = (params) => {
      return new ZodString({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodString,
          coerce: params?.coerce ?? false,
          ...processCreateParams(params),
      });
  };
  // https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
  function floatSafeRemainder(val, step) {
      const valDecCount = (val.toString().split(".")[1] || "").length;
      const stepDecCount = (step.toString().split(".")[1] || "").length;
      const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
      const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
      const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
      return (valInt % stepInt) / 10 ** decCount;
  }
  class ZodNumber extends ZodType {
      constructor() {
          super(...arguments);
          this.min = this.gte;
          this.max = this.lte;
          this.step = this.multipleOf;
      }
      _parse(input) {
          if (this._def.coerce) {
              input.data = Number(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.number) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.number,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          let ctx = undefined;
          const status = new ParseStatus();
          for (const check of this._def.checks) {
              if (check.kind === "int") {
                  if (!util.isInteger(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.invalid_type,
                          expected: "integer",
                          received: "float",
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "min") {
                  const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                  if (tooSmall) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_small,
                          minimum: check.value,
                          type: "number",
                          inclusive: check.inclusive,
                          exact: false,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "max") {
                  const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                  if (tooBig) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_big,
                          maximum: check.value,
                          type: "number",
                          inclusive: check.inclusive,
                          exact: false,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "multipleOf") {
                  if (floatSafeRemainder(input.data, check.value) !== 0) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.not_multiple_of,
                          multipleOf: check.value,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "finite") {
                  if (!Number.isFinite(input.data)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.not_finite,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else {
                  util.assertNever(check);
              }
          }
          return { status: status.value, value: input.data };
      }
      gte(value, message) {
          return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
          return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
          return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
          return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
          return new ZodNumber({
              ...this._def,
              checks: [
                  ...this._def.checks,
                  {
                      kind,
                      value,
                      inclusive,
                      message: errorUtil.toString(message),
                  },
              ],
          });
      }
      _addCheck(check) {
          return new ZodNumber({
              ...this._def,
              checks: [...this._def.checks, check],
          });
      }
      int(message) {
          return this._addCheck({
              kind: "int",
              message: errorUtil.toString(message),
          });
      }
      positive(message) {
          return this._addCheck({
              kind: "min",
              value: 0,
              inclusive: false,
              message: errorUtil.toString(message),
          });
      }
      negative(message) {
          return this._addCheck({
              kind: "max",
              value: 0,
              inclusive: false,
              message: errorUtil.toString(message),
          });
      }
      nonpositive(message) {
          return this._addCheck({
              kind: "max",
              value: 0,
              inclusive: true,
              message: errorUtil.toString(message),
          });
      }
      nonnegative(message) {
          return this._addCheck({
              kind: "min",
              value: 0,
              inclusive: true,
              message: errorUtil.toString(message),
          });
      }
      multipleOf(value, message) {
          return this._addCheck({
              kind: "multipleOf",
              value: value,
              message: errorUtil.toString(message),
          });
      }
      finite(message) {
          return this._addCheck({
              kind: "finite",
              message: errorUtil.toString(message),
          });
      }
      safe(message) {
          return this._addCheck({
              kind: "min",
              inclusive: true,
              value: Number.MIN_SAFE_INTEGER,
              message: errorUtil.toString(message),
          })._addCheck({
              kind: "max",
              inclusive: true,
              value: Number.MAX_SAFE_INTEGER,
              message: errorUtil.toString(message),
          });
      }
      get minValue() {
          let min = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "min") {
                  if (min === null || ch.value > min)
                      min = ch.value;
              }
          }
          return min;
      }
      get maxValue() {
          let max = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "max") {
                  if (max === null || ch.value < max)
                      max = ch.value;
              }
          }
          return max;
      }
      get isInt() {
          return !!this._def.checks.find((ch) => ch.kind === "int" || (ch.kind === "multipleOf" && util.isInteger(ch.value)));
      }
      get isFinite() {
          let max = null;
          let min = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
                  return true;
              }
              else if (ch.kind === "min") {
                  if (min === null || ch.value > min)
                      min = ch.value;
              }
              else if (ch.kind === "max") {
                  if (max === null || ch.value < max)
                      max = ch.value;
              }
          }
          return Number.isFinite(min) && Number.isFinite(max);
      }
  }
  ZodNumber.create = (params) => {
      return new ZodNumber({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodNumber,
          coerce: params?.coerce || false,
          ...processCreateParams(params),
      });
  };
  class ZodBigInt extends ZodType {
      constructor() {
          super(...arguments);
          this.min = this.gte;
          this.max = this.lte;
      }
      _parse(input) {
          if (this._def.coerce) {
              try {
                  input.data = BigInt(input.data);
              }
              catch {
                  return this._getInvalidInput(input);
              }
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.bigint) {
              return this._getInvalidInput(input);
          }
          let ctx = undefined;
          const status = new ParseStatus();
          for (const check of this._def.checks) {
              if (check.kind === "min") {
                  const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                  if (tooSmall) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_small,
                          type: "bigint",
                          minimum: check.value,
                          inclusive: check.inclusive,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "max") {
                  const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                  if (tooBig) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_big,
                          type: "bigint",
                          maximum: check.value,
                          inclusive: check.inclusive,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "multipleOf") {
                  if (input.data % check.value !== BigInt(0)) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.not_multiple_of,
                          multipleOf: check.value,
                          message: check.message,
                      });
                      status.dirty();
                  }
              }
              else {
                  util.assertNever(check);
              }
          }
          return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.bigint,
              received: ctx.parsedType,
          });
          return INVALID;
      }
      gte(value, message) {
          return this.setLimit("min", value, true, errorUtil.toString(message));
      }
      gt(value, message) {
          return this.setLimit("min", value, false, errorUtil.toString(message));
      }
      lte(value, message) {
          return this.setLimit("max", value, true, errorUtil.toString(message));
      }
      lt(value, message) {
          return this.setLimit("max", value, false, errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
          return new ZodBigInt({
              ...this._def,
              checks: [
                  ...this._def.checks,
                  {
                      kind,
                      value,
                      inclusive,
                      message: errorUtil.toString(message),
                  },
              ],
          });
      }
      _addCheck(check) {
          return new ZodBigInt({
              ...this._def,
              checks: [...this._def.checks, check],
          });
      }
      positive(message) {
          return this._addCheck({
              kind: "min",
              value: BigInt(0),
              inclusive: false,
              message: errorUtil.toString(message),
          });
      }
      negative(message) {
          return this._addCheck({
              kind: "max",
              value: BigInt(0),
              inclusive: false,
              message: errorUtil.toString(message),
          });
      }
      nonpositive(message) {
          return this._addCheck({
              kind: "max",
              value: BigInt(0),
              inclusive: true,
              message: errorUtil.toString(message),
          });
      }
      nonnegative(message) {
          return this._addCheck({
              kind: "min",
              value: BigInt(0),
              inclusive: true,
              message: errorUtil.toString(message),
          });
      }
      multipleOf(value, message) {
          return this._addCheck({
              kind: "multipleOf",
              value,
              message: errorUtil.toString(message),
          });
      }
      get minValue() {
          let min = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "min") {
                  if (min === null || ch.value > min)
                      min = ch.value;
              }
          }
          return min;
      }
      get maxValue() {
          let max = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "max") {
                  if (max === null || ch.value < max)
                      max = ch.value;
              }
          }
          return max;
      }
  }
  ZodBigInt.create = (params) => {
      return new ZodBigInt({
          checks: [],
          typeName: ZodFirstPartyTypeKind.ZodBigInt,
          coerce: params?.coerce ?? false,
          ...processCreateParams(params),
      });
  };
  class ZodBoolean extends ZodType {
      _parse(input) {
          if (this._def.coerce) {
              input.data = Boolean(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.boolean) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.boolean,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return OK(input.data);
      }
  }
  ZodBoolean.create = (params) => {
      return new ZodBoolean({
          typeName: ZodFirstPartyTypeKind.ZodBoolean,
          coerce: params?.coerce || false,
          ...processCreateParams(params),
      });
  };
  class ZodDate extends ZodType {
      _parse(input) {
          if (this._def.coerce) {
              input.data = new Date(input.data);
          }
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.date) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.date,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          if (Number.isNaN(input.data.getTime())) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_date,
              });
              return INVALID;
          }
          const status = new ParseStatus();
          let ctx = undefined;
          for (const check of this._def.checks) {
              if (check.kind === "min") {
                  if (input.data.getTime() < check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_small,
                          message: check.message,
                          inclusive: true,
                          exact: false,
                          minimum: check.value,
                          type: "date",
                      });
                      status.dirty();
                  }
              }
              else if (check.kind === "max") {
                  if (input.data.getTime() > check.value) {
                      ctx = this._getOrReturnCtx(input, ctx);
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.too_big,
                          message: check.message,
                          inclusive: true,
                          exact: false,
                          maximum: check.value,
                          type: "date",
                      });
                      status.dirty();
                  }
              }
              else {
                  util.assertNever(check);
              }
          }
          return {
              status: status.value,
              value: new Date(input.data.getTime()),
          };
      }
      _addCheck(check) {
          return new ZodDate({
              ...this._def,
              checks: [...this._def.checks, check],
          });
      }
      min(minDate, message) {
          return this._addCheck({
              kind: "min",
              value: minDate.getTime(),
              message: errorUtil.toString(message),
          });
      }
      max(maxDate, message) {
          return this._addCheck({
              kind: "max",
              value: maxDate.getTime(),
              message: errorUtil.toString(message),
          });
      }
      get minDate() {
          let min = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "min") {
                  if (min === null || ch.value > min)
                      min = ch.value;
              }
          }
          return min != null ? new Date(min) : null;
      }
      get maxDate() {
          let max = null;
          for (const ch of this._def.checks) {
              if (ch.kind === "max") {
                  if (max === null || ch.value < max)
                      max = ch.value;
              }
          }
          return max != null ? new Date(max) : null;
      }
  }
  ZodDate.create = (params) => {
      return new ZodDate({
          checks: [],
          coerce: params?.coerce || false,
          typeName: ZodFirstPartyTypeKind.ZodDate,
          ...processCreateParams(params),
      });
  };
  class ZodSymbol extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.symbol) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.symbol,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return OK(input.data);
      }
  }
  ZodSymbol.create = (params) => {
      return new ZodSymbol({
          typeName: ZodFirstPartyTypeKind.ZodSymbol,
          ...processCreateParams(params),
      });
  };
  class ZodUndefined extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.undefined) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.undefined,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return OK(input.data);
      }
  }
  ZodUndefined.create = (params) => {
      return new ZodUndefined({
          typeName: ZodFirstPartyTypeKind.ZodUndefined,
          ...processCreateParams(params),
      });
  };
  class ZodNull extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.null) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.null,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return OK(input.data);
      }
  }
  ZodNull.create = (params) => {
      return new ZodNull({
          typeName: ZodFirstPartyTypeKind.ZodNull,
          ...processCreateParams(params),
      });
  };
  class ZodAny extends ZodType {
      constructor() {
          super(...arguments);
          // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
          this._any = true;
      }
      _parse(input) {
          return OK(input.data);
      }
  }
  ZodAny.create = (params) => {
      return new ZodAny({
          typeName: ZodFirstPartyTypeKind.ZodAny,
          ...processCreateParams(params),
      });
  };
  class ZodUnknown extends ZodType {
      constructor() {
          super(...arguments);
          // required
          this._unknown = true;
      }
      _parse(input) {
          return OK(input.data);
      }
  }
  ZodUnknown.create = (params) => {
      return new ZodUnknown({
          typeName: ZodFirstPartyTypeKind.ZodUnknown,
          ...processCreateParams(params),
      });
  };
  class ZodNever extends ZodType {
      _parse(input) {
          const ctx = this._getOrReturnCtx(input);
          addIssueToContext(ctx, {
              code: ZodIssueCode.invalid_type,
              expected: ZodParsedType.never,
              received: ctx.parsedType,
          });
          return INVALID;
      }
  }
  ZodNever.create = (params) => {
      return new ZodNever({
          typeName: ZodFirstPartyTypeKind.ZodNever,
          ...processCreateParams(params),
      });
  };
  class ZodVoid extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.undefined) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.void,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return OK(input.data);
      }
  }
  ZodVoid.create = (params) => {
      return new ZodVoid({
          typeName: ZodFirstPartyTypeKind.ZodVoid,
          ...processCreateParams(params),
      });
  };
  class ZodArray extends ZodType {
      _parse(input) {
          const { ctx, status } = this._processInputParams(input);
          const def = this._def;
          if (ctx.parsedType !== ZodParsedType.array) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.array,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          if (def.exactLength !== null) {
              const tooBig = ctx.data.length > def.exactLength.value;
              const tooSmall = ctx.data.length < def.exactLength.value;
              if (tooBig || tooSmall) {
                  addIssueToContext(ctx, {
                      code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                      minimum: (tooSmall ? def.exactLength.value : undefined),
                      maximum: (tooBig ? def.exactLength.value : undefined),
                      type: "array",
                      inclusive: true,
                      exact: true,
                      message: def.exactLength.message,
                  });
                  status.dirty();
              }
          }
          if (def.minLength !== null) {
              if (ctx.data.length < def.minLength.value) {
                  addIssueToContext(ctx, {
                      code: ZodIssueCode.too_small,
                      minimum: def.minLength.value,
                      type: "array",
                      inclusive: true,
                      exact: false,
                      message: def.minLength.message,
                  });
                  status.dirty();
              }
          }
          if (def.maxLength !== null) {
              if (ctx.data.length > def.maxLength.value) {
                  addIssueToContext(ctx, {
                      code: ZodIssueCode.too_big,
                      maximum: def.maxLength.value,
                      type: "array",
                      inclusive: true,
                      exact: false,
                      message: def.maxLength.message,
                  });
                  status.dirty();
              }
          }
          if (ctx.common.async) {
              return Promise.all([...ctx.data].map((item, i) => {
                  return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
              })).then((result) => {
                  return ParseStatus.mergeArray(status, result);
              });
          }
          const result = [...ctx.data].map((item, i) => {
              return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          });
          return ParseStatus.mergeArray(status, result);
      }
      get element() {
          return this._def.type;
      }
      min(minLength, message) {
          return new ZodArray({
              ...this._def,
              minLength: { value: minLength, message: errorUtil.toString(message) },
          });
      }
      max(maxLength, message) {
          return new ZodArray({
              ...this._def,
              maxLength: { value: maxLength, message: errorUtil.toString(message) },
          });
      }
      length(len, message) {
          return new ZodArray({
              ...this._def,
              exactLength: { value: len, message: errorUtil.toString(message) },
          });
      }
      nonempty(message) {
          return this.min(1, message);
      }
  }
  ZodArray.create = (schema, params) => {
      return new ZodArray({
          type: schema,
          minLength: null,
          maxLength: null,
          exactLength: null,
          typeName: ZodFirstPartyTypeKind.ZodArray,
          ...processCreateParams(params),
      });
  };
  function deepPartialify(schema) {
      if (schema instanceof ZodObject) {
          const newShape = {};
          for (const key in schema.shape) {
              const fieldSchema = schema.shape[key];
              newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
          }
          return new ZodObject({
              ...schema._def,
              shape: () => newShape,
          });
      }
      else if (schema instanceof ZodArray) {
          return new ZodArray({
              ...schema._def,
              type: deepPartialify(schema.element),
          });
      }
      else if (schema instanceof ZodOptional) {
          return ZodOptional.create(deepPartialify(schema.unwrap()));
      }
      else if (schema instanceof ZodNullable) {
          return ZodNullable.create(deepPartialify(schema.unwrap()));
      }
      else if (schema instanceof ZodTuple) {
          return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
      }
      else {
          return schema;
      }
  }
  class ZodObject extends ZodType {
      constructor() {
          super(...arguments);
          this._cached = null;
          /**
           * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
           * If you want to pass through unknown properties, use `.passthrough()` instead.
           */
          this.nonstrict = this.passthrough;
          // extend<
          //   Augmentation extends ZodRawShape,
          //   NewOutput extends util.flatten<{
          //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
          //       ? Augmentation[k]["_output"]
          //       : k extends keyof Output
          //       ? Output[k]
          //       : never;
          //   }>,
          //   NewInput extends util.flatten<{
          //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
          //       ? Augmentation[k]["_input"]
          //       : k extends keyof Input
          //       ? Input[k]
          //       : never;
          //   }>
          // >(
          //   augmentation: Augmentation
          // ): ZodObject<
          //   extendShape<T, Augmentation>,
          //   UnknownKeys,
          //   Catchall,
          //   NewOutput,
          //   NewInput
          // > {
          //   return new ZodObject({
          //     ...this._def,
          //     shape: () => ({
          //       ...this._def.shape(),
          //       ...augmentation,
          //     }),
          //   }) as any;
          // }
          /**
           * @deprecated Use `.extend` instead
           *  */
          this.augment = this.extend;
      }
      _getCached() {
          if (this._cached !== null)
              return this._cached;
          const shape = this._def.shape();
          const keys = util.objectKeys(shape);
          this._cached = { shape, keys };
          return this._cached;
      }
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.object) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.object,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          const { status, ctx } = this._processInputParams(input);
          const { shape, keys: shapeKeys } = this._getCached();
          const extraKeys = [];
          if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
              for (const key in ctx.data) {
                  if (!shapeKeys.includes(key)) {
                      extraKeys.push(key);
                  }
              }
          }
          const pairs = [];
          for (const key of shapeKeys) {
              const keyValidator = shape[key];
              const value = ctx.data[key];
              pairs.push({
                  key: { status: "valid", value: key },
                  value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                  alwaysSet: key in ctx.data,
              });
          }
          if (this._def.catchall instanceof ZodNever) {
              const unknownKeys = this._def.unknownKeys;
              if (unknownKeys === "passthrough") {
                  for (const key of extraKeys) {
                      pairs.push({
                          key: { status: "valid", value: key },
                          value: { status: "valid", value: ctx.data[key] },
                      });
                  }
              }
              else if (unknownKeys === "strict") {
                  if (extraKeys.length > 0) {
                      addIssueToContext(ctx, {
                          code: ZodIssueCode.unrecognized_keys,
                          keys: extraKeys,
                      });
                      status.dirty();
                  }
              }
              else if (unknownKeys === "strip") ;
              else {
                  throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
              }
          }
          else {
              // run catchall validation
              const catchall = this._def.catchall;
              for (const key of extraKeys) {
                  const value = ctx.data[key];
                  pairs.push({
                      key: { status: "valid", value: key },
                      value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
                      ),
                      alwaysSet: key in ctx.data,
                  });
              }
          }
          if (ctx.common.async) {
              return Promise.resolve()
                  .then(async () => {
                  const syncPairs = [];
                  for (const pair of pairs) {
                      const key = await pair.key;
                      const value = await pair.value;
                      syncPairs.push({
                          key,
                          value,
                          alwaysSet: pair.alwaysSet,
                      });
                  }
                  return syncPairs;
              })
                  .then((syncPairs) => {
                  return ParseStatus.mergeObjectSync(status, syncPairs);
              });
          }
          else {
              return ParseStatus.mergeObjectSync(status, pairs);
          }
      }
      get shape() {
          return this._def.shape();
      }
      strict(message) {
          errorUtil.errToObj;
          return new ZodObject({
              ...this._def,
              unknownKeys: "strict",
              ...(message !== undefined
                  ? {
                      errorMap: (issue, ctx) => {
                          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
                          if (issue.code === "unrecognized_keys")
                              return {
                                  message: errorUtil.errToObj(message).message ?? defaultError,
                              };
                          return {
                              message: defaultError,
                          };
                      },
                  }
                  : {}),
          });
      }
      strip() {
          return new ZodObject({
              ...this._def,
              unknownKeys: "strip",
          });
      }
      passthrough() {
          return new ZodObject({
              ...this._def,
              unknownKeys: "passthrough",
          });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
          return new ZodObject({
              ...this._def,
              shape: () => ({
                  ...this._def.shape(),
                  ...augmentation,
              }),
          });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
          const merged = new ZodObject({
              unknownKeys: merging._def.unknownKeys,
              catchall: merging._def.catchall,
              shape: () => ({
                  ...this._def.shape(),
                  ...merging._def.shape(),
              }),
              typeName: ZodFirstPartyTypeKind.ZodObject,
          });
          return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
          return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
          return new ZodObject({
              ...this._def,
              catchall: index,
          });
      }
      pick(mask) {
          const shape = {};
          for (const key of util.objectKeys(mask)) {
              if (mask[key] && this.shape[key]) {
                  shape[key] = this.shape[key];
              }
          }
          return new ZodObject({
              ...this._def,
              shape: () => shape,
          });
      }
      omit(mask) {
          const shape = {};
          for (const key of util.objectKeys(this.shape)) {
              if (!mask[key]) {
                  shape[key] = this.shape[key];
              }
          }
          return new ZodObject({
              ...this._def,
              shape: () => shape,
          });
      }
      /**
       * @deprecated
       */
      deepPartial() {
          return deepPartialify(this);
      }
      partial(mask) {
          const newShape = {};
          for (const key of util.objectKeys(this.shape)) {
              const fieldSchema = this.shape[key];
              if (mask && !mask[key]) {
                  newShape[key] = fieldSchema;
              }
              else {
                  newShape[key] = fieldSchema.optional();
              }
          }
          return new ZodObject({
              ...this._def,
              shape: () => newShape,
          });
      }
      required(mask) {
          const newShape = {};
          for (const key of util.objectKeys(this.shape)) {
              if (mask && !mask[key]) {
                  newShape[key] = this.shape[key];
              }
              else {
                  const fieldSchema = this.shape[key];
                  let newField = fieldSchema;
                  while (newField instanceof ZodOptional) {
                      newField = newField._def.innerType;
                  }
                  newShape[key] = newField;
              }
          }
          return new ZodObject({
              ...this._def,
              shape: () => newShape,
          });
      }
      keyof() {
          return createZodEnum(util.objectKeys(this.shape));
      }
  }
  ZodObject.create = (shape, params) => {
      return new ZodObject({
          shape: () => shape,
          unknownKeys: "strip",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params),
      });
  };
  ZodObject.strictCreate = (shape, params) => {
      return new ZodObject({
          shape: () => shape,
          unknownKeys: "strict",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params),
      });
  };
  ZodObject.lazycreate = (shape, params) => {
      return new ZodObject({
          shape,
          unknownKeys: "strip",
          catchall: ZodNever.create(),
          typeName: ZodFirstPartyTypeKind.ZodObject,
          ...processCreateParams(params),
      });
  };
  class ZodUnion extends ZodType {
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          const options = this._def.options;
          function handleResults(results) {
              // return first issue-free validation if it exists
              for (const result of results) {
                  if (result.result.status === "valid") {
                      return result.result;
                  }
              }
              for (const result of results) {
                  if (result.result.status === "dirty") {
                      // add issues from dirty option
                      ctx.common.issues.push(...result.ctx.common.issues);
                      return result.result;
                  }
              }
              // return invalid
              const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_union,
                  unionErrors,
              });
              return INVALID;
          }
          if (ctx.common.async) {
              return Promise.all(options.map(async (option) => {
                  const childCtx = {
                      ...ctx,
                      common: {
                          ...ctx.common,
                          issues: [],
                      },
                      parent: null,
                  };
                  return {
                      result: await option._parseAsync({
                          data: ctx.data,
                          path: ctx.path,
                          parent: childCtx,
                      }),
                      ctx: childCtx,
                  };
              })).then(handleResults);
          }
          else {
              let dirty = undefined;
              const issues = [];
              for (const option of options) {
                  const childCtx = {
                      ...ctx,
                      common: {
                          ...ctx.common,
                          issues: [],
                      },
                      parent: null,
                  };
                  const result = option._parseSync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: childCtx,
                  });
                  if (result.status === "valid") {
                      return result;
                  }
                  else if (result.status === "dirty" && !dirty) {
                      dirty = { result, ctx: childCtx };
                  }
                  if (childCtx.common.issues.length) {
                      issues.push(childCtx.common.issues);
                  }
              }
              if (dirty) {
                  ctx.common.issues.push(...dirty.ctx.common.issues);
                  return dirty.result;
              }
              const unionErrors = issues.map((issues) => new ZodError(issues));
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_union,
                  unionErrors,
              });
              return INVALID;
          }
      }
      get options() {
          return this._def.options;
      }
  }
  ZodUnion.create = (types, params) => {
      return new ZodUnion({
          options: types,
          typeName: ZodFirstPartyTypeKind.ZodUnion,
          ...processCreateParams(params),
      });
  };
  function mergeValues(a, b) {
      const aType = getParsedType(a);
      const bType = getParsedType(b);
      if (a === b) {
          return { valid: true, data: a };
      }
      else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
          const bKeys = util.objectKeys(b);
          const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
          const newObj = { ...a, ...b };
          for (const key of sharedKeys) {
              const sharedValue = mergeValues(a[key], b[key]);
              if (!sharedValue.valid) {
                  return { valid: false };
              }
              newObj[key] = sharedValue.data;
          }
          return { valid: true, data: newObj };
      }
      else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
          if (a.length !== b.length) {
              return { valid: false };
          }
          const newArray = [];
          for (let index = 0; index < a.length; index++) {
              const itemA = a[index];
              const itemB = b[index];
              const sharedValue = mergeValues(itemA, itemB);
              if (!sharedValue.valid) {
                  return { valid: false };
              }
              newArray.push(sharedValue.data);
          }
          return { valid: true, data: newArray };
      }
      else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
          return { valid: true, data: a };
      }
      else {
          return { valid: false };
      }
  }
  class ZodIntersection extends ZodType {
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          const handleParsed = (parsedLeft, parsedRight) => {
              if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                  return INVALID;
              }
              const merged = mergeValues(parsedLeft.value, parsedRight.value);
              if (!merged.valid) {
                  addIssueToContext(ctx, {
                      code: ZodIssueCode.invalid_intersection_types,
                  });
                  return INVALID;
              }
              if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                  status.dirty();
              }
              return { status: status.value, value: merged.data };
          };
          if (ctx.common.async) {
              return Promise.all([
                  this._def.left._parseAsync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: ctx,
                  }),
                  this._def.right._parseAsync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: ctx,
                  }),
              ]).then(([left, right]) => handleParsed(left, right));
          }
          else {
              return handleParsed(this._def.left._parseSync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx,
              }), this._def.right._parseSync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx,
              }));
          }
      }
  }
  ZodIntersection.create = (left, right, params) => {
      return new ZodIntersection({
          left: left,
          right: right,
          typeName: ZodFirstPartyTypeKind.ZodIntersection,
          ...processCreateParams(params),
      });
  };
  // type ZodTupleItems = [ZodTypeAny, ...ZodTypeAny[]];
  class ZodTuple extends ZodType {
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.array) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.array,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          if (ctx.data.length < this._def.items.length) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.too_small,
                  minimum: this._def.items.length,
                  inclusive: true,
                  exact: false,
                  type: "array",
              });
              return INVALID;
          }
          const rest = this._def.rest;
          if (!rest && ctx.data.length > this._def.items.length) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.too_big,
                  maximum: this._def.items.length,
                  inclusive: true,
                  exact: false,
                  type: "array",
              });
              status.dirty();
          }
          const items = [...ctx.data]
              .map((item, itemIndex) => {
              const schema = this._def.items[itemIndex] || this._def.rest;
              if (!schema)
                  return null;
              return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
          })
              .filter((x) => !!x); // filter nulls
          if (ctx.common.async) {
              return Promise.all(items).then((results) => {
                  return ParseStatus.mergeArray(status, results);
              });
          }
          else {
              return ParseStatus.mergeArray(status, items);
          }
      }
      get items() {
          return this._def.items;
      }
      rest(rest) {
          return new ZodTuple({
              ...this._def,
              rest,
          });
      }
  }
  ZodTuple.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
          throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple({
          items: schemas,
          typeName: ZodFirstPartyTypeKind.ZodTuple,
          rest: null,
          ...processCreateParams(params),
      });
  };
  class ZodMap extends ZodType {
      get keySchema() {
          return this._def.keyType;
      }
      get valueSchema() {
          return this._def.valueType;
      }
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.map) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.map,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          const keyType = this._def.keyType;
          const valueType = this._def.valueType;
          const pairs = [...ctx.data.entries()].map(([key, value], index) => {
              return {
                  key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                  value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
              };
          });
          if (ctx.common.async) {
              const finalMap = new Map();
              return Promise.resolve().then(async () => {
                  for (const pair of pairs) {
                      const key = await pair.key;
                      const value = await pair.value;
                      if (key.status === "aborted" || value.status === "aborted") {
                          return INVALID;
                      }
                      if (key.status === "dirty" || value.status === "dirty") {
                          status.dirty();
                      }
                      finalMap.set(key.value, value.value);
                  }
                  return { status: status.value, value: finalMap };
              });
          }
          else {
              const finalMap = new Map();
              for (const pair of pairs) {
                  const key = pair.key;
                  const value = pair.value;
                  if (key.status === "aborted" || value.status === "aborted") {
                      return INVALID;
                  }
                  if (key.status === "dirty" || value.status === "dirty") {
                      status.dirty();
                  }
                  finalMap.set(key.value, value.value);
              }
              return { status: status.value, value: finalMap };
          }
      }
  }
  ZodMap.create = (keyType, valueType, params) => {
      return new ZodMap({
          valueType,
          keyType,
          typeName: ZodFirstPartyTypeKind.ZodMap,
          ...processCreateParams(params),
      });
  };
  class ZodSet extends ZodType {
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.set) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.set,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          const def = this._def;
          if (def.minSize !== null) {
              if (ctx.data.size < def.minSize.value) {
                  addIssueToContext(ctx, {
                      code: ZodIssueCode.too_small,
                      minimum: def.minSize.value,
                      type: "set",
                      inclusive: true,
                      exact: false,
                      message: def.minSize.message,
                  });
                  status.dirty();
              }
          }
          if (def.maxSize !== null) {
              if (ctx.data.size > def.maxSize.value) {
                  addIssueToContext(ctx, {
                      code: ZodIssueCode.too_big,
                      maximum: def.maxSize.value,
                      type: "set",
                      inclusive: true,
                      exact: false,
                      message: def.maxSize.message,
                  });
                  status.dirty();
              }
          }
          const valueType = this._def.valueType;
          function finalizeSet(elements) {
              const parsedSet = new Set();
              for (const element of elements) {
                  if (element.status === "aborted")
                      return INVALID;
                  if (element.status === "dirty")
                      status.dirty();
                  parsedSet.add(element.value);
              }
              return { status: status.value, value: parsedSet };
          }
          const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
          if (ctx.common.async) {
              return Promise.all(elements).then((elements) => finalizeSet(elements));
          }
          else {
              return finalizeSet(elements);
          }
      }
      min(minSize, message) {
          return new ZodSet({
              ...this._def,
              minSize: { value: minSize, message: errorUtil.toString(message) },
          });
      }
      max(maxSize, message) {
          return new ZodSet({
              ...this._def,
              maxSize: { value: maxSize, message: errorUtil.toString(message) },
          });
      }
      size(size, message) {
          return this.min(size, message).max(size, message);
      }
      nonempty(message) {
          return this.min(1, message);
      }
  }
  ZodSet.create = (valueType, params) => {
      return new ZodSet({
          valueType,
          minSize: null,
          maxSize: null,
          typeName: ZodFirstPartyTypeKind.ZodSet,
          ...processCreateParams(params),
      });
  };
  class ZodLazy extends ZodType {
      get schema() {
          return this._def.getter();
      }
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          const lazySchema = this._def.getter();
          return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
  }
  ZodLazy.create = (getter, params) => {
      return new ZodLazy({
          getter: getter,
          typeName: ZodFirstPartyTypeKind.ZodLazy,
          ...processCreateParams(params),
      });
  };
  class ZodLiteral extends ZodType {
      _parse(input) {
          if (input.data !== this._def.value) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  received: ctx.data,
                  code: ZodIssueCode.invalid_literal,
                  expected: this._def.value,
              });
              return INVALID;
          }
          return { status: "valid", value: input.data };
      }
      get value() {
          return this._def.value;
      }
  }
  ZodLiteral.create = (value, params) => {
      return new ZodLiteral({
          value: value,
          typeName: ZodFirstPartyTypeKind.ZodLiteral,
          ...processCreateParams(params),
      });
  };
  function createZodEnum(values, params) {
      return new ZodEnum({
          values,
          typeName: ZodFirstPartyTypeKind.ZodEnum,
          ...processCreateParams(params),
      });
  }
  class ZodEnum extends ZodType {
      constructor() {
          super(...arguments);
          _ZodEnum_cache.set(this, void 0);
      }
      _parse(input) {
          if (typeof input.data !== "string") {
              const ctx = this._getOrReturnCtx(input);
              const expectedValues = this._def.values;
              addIssueToContext(ctx, {
                  expected: util.joinValues(expectedValues),
                  received: ctx.parsedType,
                  code: ZodIssueCode.invalid_type,
              });
              return INVALID;
          }
          if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
              __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
          }
          if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
              const ctx = this._getOrReturnCtx(input);
              const expectedValues = this._def.values;
              addIssueToContext(ctx, {
                  received: ctx.data,
                  code: ZodIssueCode.invalid_enum_value,
                  options: expectedValues,
              });
              return INVALID;
          }
          return OK(input.data);
      }
      get options() {
          return this._def.values;
      }
      get enum() {
          const enumValues = {};
          for (const val of this._def.values) {
              enumValues[val] = val;
          }
          return enumValues;
      }
      get Values() {
          const enumValues = {};
          for (const val of this._def.values) {
              enumValues[val] = val;
          }
          return enumValues;
      }
      get Enum() {
          const enumValues = {};
          for (const val of this._def.values) {
              enumValues[val] = val;
          }
          return enumValues;
      }
      extract(values, newDef = this._def) {
          return ZodEnum.create(values, {
              ...this._def,
              ...newDef,
          });
      }
      exclude(values, newDef = this._def) {
          return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
              ...this._def,
              ...newDef,
          });
      }
  }
  _ZodEnum_cache = new WeakMap();
  ZodEnum.create = createZodEnum;
  class ZodNativeEnum extends ZodType {
      constructor() {
          super(...arguments);
          _ZodNativeEnum_cache.set(this, void 0);
      }
      _parse(input) {
          const nativeEnumValues = util.getValidEnumValues(this._def.values);
          const ctx = this._getOrReturnCtx(input);
          if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
              const expectedValues = util.objectValues(nativeEnumValues);
              addIssueToContext(ctx, {
                  expected: util.joinValues(expectedValues),
                  received: ctx.parsedType,
                  code: ZodIssueCode.invalid_type,
              });
              return INVALID;
          }
          if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
              __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util.getValidEnumValues(this._def.values)), "f");
          }
          if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
              const expectedValues = util.objectValues(nativeEnumValues);
              addIssueToContext(ctx, {
                  received: ctx.data,
                  code: ZodIssueCode.invalid_enum_value,
                  options: expectedValues,
              });
              return INVALID;
          }
          return OK(input.data);
      }
      get enum() {
          return this._def.values;
      }
  }
  _ZodNativeEnum_cache = new WeakMap();
  ZodNativeEnum.create = (values, params) => {
      return new ZodNativeEnum({
          values: values,
          typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
          ...processCreateParams(params),
      });
  };
  class ZodPromise extends ZodType {
      unwrap() {
          return this._def.type;
      }
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.promise,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
          return OK(promisified.then((data) => {
              return this._def.type.parseAsync(data, {
                  path: ctx.path,
                  errorMap: ctx.common.contextualErrorMap,
              });
          }));
      }
  }
  ZodPromise.create = (schema, params) => {
      return new ZodPromise({
          type: schema,
          typeName: ZodFirstPartyTypeKind.ZodPromise,
          ...processCreateParams(params),
      });
  };
  class ZodEffects extends ZodType {
      innerType() {
          return this._def.schema;
      }
      sourceType() {
          return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
              ? this._def.schema.sourceType()
              : this._def.schema;
      }
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          const effect = this._def.effect || null;
          const checkCtx = {
              addIssue: (arg) => {
                  addIssueToContext(ctx, arg);
                  if (arg.fatal) {
                      status.abort();
                  }
                  else {
                      status.dirty();
                  }
              },
              get path() {
                  return ctx.path;
              },
          };
          checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
          if (effect.type === "preprocess") {
              const processed = effect.transform(ctx.data, checkCtx);
              if (ctx.common.async) {
                  return Promise.resolve(processed).then(async (processed) => {
                      if (status.value === "aborted")
                          return INVALID;
                      const result = await this._def.schema._parseAsync({
                          data: processed,
                          path: ctx.path,
                          parent: ctx,
                      });
                      if (result.status === "aborted")
                          return INVALID;
                      if (result.status === "dirty")
                          return DIRTY(result.value);
                      if (status.value === "dirty")
                          return DIRTY(result.value);
                      return result;
                  });
              }
              else {
                  if (status.value === "aborted")
                      return INVALID;
                  const result = this._def.schema._parseSync({
                      data: processed,
                      path: ctx.path,
                      parent: ctx,
                  });
                  if (result.status === "aborted")
                      return INVALID;
                  if (result.status === "dirty")
                      return DIRTY(result.value);
                  if (status.value === "dirty")
                      return DIRTY(result.value);
                  return result;
              }
          }
          if (effect.type === "refinement") {
              const executeRefinement = (acc) => {
                  const result = effect.refinement(acc, checkCtx);
                  if (ctx.common.async) {
                      return Promise.resolve(result);
                  }
                  if (result instanceof Promise) {
                      throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                  }
                  return acc;
              };
              if (ctx.common.async === false) {
                  const inner = this._def.schema._parseSync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: ctx,
                  });
                  if (inner.status === "aborted")
                      return INVALID;
                  if (inner.status === "dirty")
                      status.dirty();
                  // return value is ignored
                  executeRefinement(inner.value);
                  return { status: status.value, value: inner.value };
              }
              else {
                  return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
                      if (inner.status === "aborted")
                          return INVALID;
                      if (inner.status === "dirty")
                          status.dirty();
                      return executeRefinement(inner.value).then(() => {
                          return { status: status.value, value: inner.value };
                      });
                  });
              }
          }
          if (effect.type === "transform") {
              if (ctx.common.async === false) {
                  const base = this._def.schema._parseSync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: ctx,
                  });
                  if (!isValid(base))
                      return base;
                  const result = effect.transform(base.value, checkCtx);
                  if (result instanceof Promise) {
                      throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                  }
                  return { status: status.value, value: result };
              }
              else {
                  return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
                      if (!isValid(base))
                          return base;
                      return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                          status: status.value,
                          value: result,
                      }));
                  });
              }
          }
          util.assertNever(effect);
      }
  }
  ZodEffects.create = (schema, effect, params) => {
      return new ZodEffects({
          schema,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect,
          ...processCreateParams(params),
      });
  };
  ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects({
          schema,
          effect: { type: "preprocess", transform: preprocess },
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          ...processCreateParams(params),
      });
  };
  class ZodOptional extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType === ZodParsedType.undefined) {
              return OK(undefined);
          }
          return this._def.innerType._parse(input);
      }
      unwrap() {
          return this._def.innerType;
      }
  }
  ZodOptional.create = (type, params) => {
      return new ZodOptional({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodOptional,
          ...processCreateParams(params),
      });
  };
  class ZodNullable extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType === ZodParsedType.null) {
              return OK(null);
          }
          return this._def.innerType._parse(input);
      }
      unwrap() {
          return this._def.innerType;
      }
  }
  ZodNullable.create = (type, params) => {
      return new ZodNullable({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodNullable,
          ...processCreateParams(params),
      });
  };
  class ZodDefault extends ZodType {
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          let data = ctx.data;
          if (ctx.parsedType === ZodParsedType.undefined) {
              data = this._def.defaultValue();
          }
          return this._def.innerType._parse({
              data,
              path: ctx.path,
              parent: ctx,
          });
      }
      removeDefault() {
          return this._def.innerType;
      }
  }
  ZodDefault.create = (type, params) => {
      return new ZodDefault({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodDefault,
          defaultValue: typeof params.default === "function" ? params.default : () => params.default,
          ...processCreateParams(params),
      });
  };
  class ZodCatch extends ZodType {
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          // newCtx is used to not collect issues from inner types in ctx
          const newCtx = {
              ...ctx,
              common: {
                  ...ctx.common,
                  issues: [],
              },
          };
          const result = this._def.innerType._parse({
              data: newCtx.data,
              path: newCtx.path,
              parent: {
                  ...newCtx,
              },
          });
          if (isAsync(result)) {
              return result.then((result) => {
                  return {
                      status: "valid",
                      value: result.status === "valid"
                          ? result.value
                          : this._def.catchValue({
                              get error() {
                                  return new ZodError(newCtx.common.issues);
                              },
                              input: newCtx.data,
                          }),
                  };
              });
          }
          else {
              return {
                  status: "valid",
                  value: result.status === "valid"
                      ? result.value
                      : this._def.catchValue({
                          get error() {
                              return new ZodError(newCtx.common.issues);
                          },
                          input: newCtx.data,
                      }),
              };
          }
      }
      removeCatch() {
          return this._def.innerType;
      }
  }
  ZodCatch.create = (type, params) => {
      return new ZodCatch({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodCatch,
          catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
          ...processCreateParams(params),
      });
  };
  class ZodNaN extends ZodType {
      _parse(input) {
          const parsedType = this._getType(input);
          if (parsedType !== ZodParsedType.nan) {
              const ctx = this._getOrReturnCtx(input);
              addIssueToContext(ctx, {
                  code: ZodIssueCode.invalid_type,
                  expected: ZodParsedType.nan,
                  received: ctx.parsedType,
              });
              return INVALID;
          }
          return { status: "valid", value: input.data };
      }
  }
  ZodNaN.create = (params) => {
      return new ZodNaN({
          typeName: ZodFirstPartyTypeKind.ZodNaN,
          ...processCreateParams(params),
      });
  };
  class ZodBranded extends ZodType {
      _parse(input) {
          const { ctx } = this._processInputParams(input);
          const data = ctx.data;
          return this._def.type._parse({
              data,
              path: ctx.path,
              parent: ctx,
          });
      }
      unwrap() {
          return this._def.type;
      }
  }
  class ZodPipeline extends ZodType {
      _parse(input) {
          const { status, ctx } = this._processInputParams(input);
          if (ctx.common.async) {
              const handleAsync = async () => {
                  const inResult = await this._def.in._parseAsync({
                      data: ctx.data,
                      path: ctx.path,
                      parent: ctx,
                  });
                  if (inResult.status === "aborted")
                      return INVALID;
                  if (inResult.status === "dirty") {
                      status.dirty();
                      return DIRTY(inResult.value);
                  }
                  else {
                      return this._def.out._parseAsync({
                          data: inResult.value,
                          path: ctx.path,
                          parent: ctx,
                      });
                  }
              };
              return handleAsync();
          }
          else {
              const inResult = this._def.in._parseSync({
                  data: ctx.data,
                  path: ctx.path,
                  parent: ctx,
              });
              if (inResult.status === "aborted")
                  return INVALID;
              if (inResult.status === "dirty") {
                  status.dirty();
                  return {
                      status: "dirty",
                      value: inResult.value,
                  };
              }
              else {
                  return this._def.out._parseSync({
                      data: inResult.value,
                      path: ctx.path,
                      parent: ctx,
                  });
              }
          }
      }
      static create(a, b) {
          return new ZodPipeline({
              in: a,
              out: b,
              typeName: ZodFirstPartyTypeKind.ZodPipeline,
          });
      }
  }
  class ZodReadonly extends ZodType {
      _parse(input) {
          const result = this._def.innerType._parse(input);
          const freeze = (data) => {
              if (isValid(data)) {
                  data.value = Object.freeze(data.value);
              }
              return data;
          };
          return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
          return this._def.innerType;
      }
  }
  ZodReadonly.create = (type, params) => {
      return new ZodReadonly({
          innerType: type,
          typeName: ZodFirstPartyTypeKind.ZodReadonly,
          ...processCreateParams(params),
      });
  };
  var ZodFirstPartyTypeKind;
  (function (ZodFirstPartyTypeKind) {
      ZodFirstPartyTypeKind["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
  })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
  const stringType = ZodString.create;
  ZodNever.create;
  ZodArray.create;
  const objectType = ZodObject.create;
  ZodUnion.create;
  ZodIntersection.create;
  ZodTuple.create;
  ZodEnum.create;
  ZodPromise.create;
  ZodOptional.create;
  ZodNullable.create;

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

  const initValue$6 = {
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
  const [contentAppStore, setContentAppStore] = createStore(initValue$6);
  const cleanContentAppStore = () => setContentAppStore({ ...initValue$6 });

  var _tmpl$$1 = /* @__PURE__ */ template(`<form><div class="e:flex e:justify-center e:mt-4 e:w-full"></div><div class="e:flex e:justify-center e:mt-4 e:w-full">`);
  const schema = objectType({
    apiKey: stringType().min(1, "required")
  });
  const ApiKeyWidget = ({
    onApiKey
  }) => {
    const [apiKey, setApiKey] = createSignal("");
    const [error, setError] = createSignal("");
    const [color, setColor] = createSignal(BColor.green);
    createEffect(() => {
      setError(contentAppStore.apiKeyError || "");
      setColor(!contentAppStore.apiKeyError ? BColor.green : BColor.red);
    });
    const handleApiKeyWidgetSubmit = ({
      apiKey: apiKey2
    }) => {
      onApiKey(apiKey2);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const result = schema.safeParse({
        apiKey: apiKey()
      });
      if (!result.success) {
        setError(result.error.errors[0].message);
        return;
      }
      setError("");
      handleApiKeyWidgetSubmit({
        apiKey: apiKey()
      });
    };
    return (() => {
      var _el$ = _tmpl$$1(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
      insert(_el$2, createComponent(TextInput, {
        get color() {
          return IColor.grey;
        },
        placeholder: "Paste API secret key from Telegram Bot",
        get value() {
          return apiKey();
        },
        onChange: (value) => {
          console.log("$$$$$$$$$", value);
          setContentAppStore("apiKeyError", void 0);
          setApiKey(value);
        }
      }));
      insert(_el$3, createComponent(SaveButton, {
        get color() {
          return color();
        },
        type: "button",
        get disabled() {
          return !(error() === "");
        },
        onClick: handleSubmit,
        get children() {
          return error() || "Connect to Cabal";
        }
      }));
      return _el$;
    })();
  };

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

  const initValue$5 = {
    logs: []
  };
  const [logStore, setLogStore] = createStore(initValue$5);
  const addLogRecord = (message) => setLogStore("logs", (prev) => [
    { type: message.eventName, event: message },
    ...prev
  ]);

  const initValue$4 = {
    status: void 0
  };
  const [cabalTradeStream, setCabalTradeStream] = createStore(initValue$4);

  const initValue$3 = {
    status: void 0
  };
  const [cabalUserActivity, setCabalUserActivity] = createStore(initValue$3);

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

  const initValue$2 = {
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
    setTradeWidgetState({ ...initValue$2 });
  };

  const [tradeWidgetState, setTradeWidgetState] = createStore(initValue$2);
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

  const initValue$1 = {
    items: []
  };
  const [toastStore, setToastStore] = createStore(initValue$1);
  const addToast = (message) => setToastStore("items", (prev) => [
    { type: message.eventName, event: message },
    ...prev
  ]);

  const initValue = {
    config: null
  };
  const [configStore, setConfigStore] = createStore(initValue);

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

  var _tmpl$ = /* @__PURE__ */ template(`<div>`), _tmpl$2 = /* @__PURE__ */ template(`<div class="e:flex e:flex-1 e:items-center e:justify-center">`);
  function Popup() {
    createSignal("offline");
    const {
      sendApiKey,
      sendApiKeyPromise,
      popupOpen
    } = useStartCabalService();
    onMount(() => {
      popupOpen();
    });
    const openFull = () => {
      chrome.tabs.create({
        url: chrome.runtime.getURL("home.html")
      });
    };
    const handleApiKey = (apiKey) => {
      console.log("handleApiKey", apiKey);
      setContentAppStore("shouldSetApiKey", false);
      sendApiKeyPromise(apiKey);
    };
    const logout = () => {
      console.log("logout");
      sendApiKey(null);
    };
    createEffect(() => {
      console.log("*******");
      console.log("*******", contentAppStore.isReady, contentAppStore.shouldSetApiKey);
      console.log("*******");
    });
    return createComponent(Paper, {
      p: "4",
      cn: "e:min-w-[288px]",
      get children() {
        return [createComponent(Show, {
          get when() {
            return contentAppStore.isReady;
          },
          get children() {
            return createComponent(PopupToolBar, {
              onLogout: logout,
              onSettings: openFull
            });
          }
        }), (() => {
          var _el$ = _tmpl$();
          insert(_el$, createComponent(CabalLogoIcon, {}));
          return _el$;
        })(), createComponent(Show, {
          get when() {
            return !contentAppStore.isReady && !contentAppStore.shouldSetApiKey;
          },
          get children() {
            var _el$2 = _tmpl$2();
            insert(_el$2, createComponent(Typography, {
              children: "loading..."
            }));
            return _el$2;
          }
        }), createComponent(Show, {
          get when() {
            return contentAppStore.shouldSetApiKey;
          },
          get children() {
            var _el$3 = _tmpl$();
            insert(_el$3, createComponent(ApiKeyWidget, {
              onApiKey: handleApiKey
            }));
            return _el$3;
          }
        }), createComponent(Show, {
          get when() {
            return contentAppStore.isReady;
          },
          get children() {
            return createComponent(QuickBuyAmount, {});
          }
        })];
      }
    });
  }

  render(() => createComponent(Popup, {}), document.getElementById("root"));

})();
//# sourceMappingURL=popup.js.map
