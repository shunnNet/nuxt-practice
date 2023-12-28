// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetWebFonts,
  transformerVariantGroup,
  presetIcons,
  presetMini,
} from "unocss"
// import {  } from "@unocss/preset-mini"
import transformerDirectives from "@unocss/transformer-directives"
// import  "@unocss/autocomplete"

export default defineConfig({
  // content: {
  //   pipeline: {
  //     include: [
  //       // "./index.html",
  //       "./**/*.{vue,js,ts,jsx,tsx}",
  //       // "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  //     ],
  //   },
  // },
  // include: [
  //   "./**/*.{vue,js,ts,jsx,tsx}",
  //   "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  // ],
  presets: [
    presetIcons({
      scale: 1.5,
      collections: {
        custom: {
          circle:
            '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="currentColor"></circle></svg>',
          /* ... */
          "chevron-down": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.25 8.25L11.75 15.75L19.25 8.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          `,
          "chat-outline": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.87831 4 7.84349 4.84285 6.3432 6.34314C4.84292 7.84342 4.00007 9.87824 4.00007 12V19.9999H12C13.0506 19.9999 14.0909 19.793 15.0615 19.391C16.0321 18.9889 16.914 18.3997 17.6569 17.6568C18.3997 16.9139 18.989 16.032 19.391 15.0614C19.7931 14.0908 20 13.0505 20 12C20 10.9494 19.7931 9.90911 19.391 8.93851C18.989 7.96791 18.3997 7.086 17.6569 6.34314C16.914 5.60027 16.0321 5.011 15.0615 4.60896C14.0909 4.20693 13.0506 4 12 4ZM4.92899 4.92892C6.80435 3.05356 9.34788 2 12 2C13.3132 2 14.6136 2.25866 15.8269 2.7612C17.0401 3.26375 18.1425 4.00034 19.0711 4.92892C19.9997 5.8575 20.7363 6.95989 21.2388 8.17315C21.7413 9.3864 22 10.6868 22 12C22 13.3132 21.7413 14.6135 21.2388 15.8268C20.7363 17.04 19.9997 18.1424 19.0711 19.071C18.1425 19.9996 17.0401 20.7362 15.8269 21.2387C14.6136 21.7413 13.3132 21.9999 12 21.9999H3.75856C3.52845 22.0019 3.30019 21.9583 3.08696 21.8717C2.87125 21.784 2.6753 21.654 2.51065 21.4893C2.34601 21.3247 2.21601 21.1287 2.12833 20.913C2.04166 20.6998 1.99807 20.4716 2.00007 20.2414V12C2.00007 9.34781 3.05363 6.80428 4.92899 4.92892Z" fill="currentColor"/>
          <path d="M12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
          <path d="M8.25 12C8.25 12.4142 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12C6.75 11.5858 7.08579 11.25 7.5 11.25C7.91421 11.25 8.25 11.5858 8.25 12Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
          <path d="M17.25 12C17.25 12.4142 16.9142 12.75 16.5 12.75C16.0858 12.75 15.75 12.4142 15.75 12C15.75 11.5858 16.0858 11.25 16.5 11.25C16.9142 11.25 17.25 11.5858 17.25 12Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
          </svg>`,

          "add-circle-filled": `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 13V16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16V13H16C16.2833 13 16.5208 12.9042 16.7125 12.7125C16.9042 12.5208 17 12.2833 17 12C17 11.7167 16.9042 11.4792 16.7125 11.2875C16.5208 11.0958 16.2833 11 16 11H13V8C13 7.71667 12.9042 7.47917 12.7125 7.2875C12.5208 7.09583 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8V11H8C7.71667 11 7.47917 11.0958 7.2875 11.2875C7.09583 11.4792 7 11.7167 7 12C7 12.2833 7.09583 12.5208 7.2875 12.7125C7.47917 12.9042 7.71667 13 8 13H11ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z" fill="currentColor"/>
          </svg>
          `,
        },
        /* ... */
      },
    }),
    presetAttributify(),
    presetWebFonts({
      provider: "google",
      fonts: {
        noto: [
          {
            name: "Noto Sans TC",
            weights: ["400", "700"],
            italic: true,
          },
        ],
      },
    }),
    presetUno({
      dark: "class",
    }),
    // presetMini(),
  ],

  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    // TODO: Not work
    extends: {
      placeholderColor: {
        primary: "#3fea12",
      },
      transitionProperty: {
        transformopacity: "transform, opacity",
      },
    },

    colors: {
      brand: {
        primary: "hsl(191 68% 53%)",
        primaryDark: "hsl(191 68% 40%)",
        black: "#363644",
      },
    },
    fontSize: {
      // sm: `1000em`,
      // custom: `1111em`,
    },
    breakpoints: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
  },
  // ...UnoCSS options

  rules: [
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
    [
      /^a-([\.\d]+)$/,
      ([_, num]) => ({ padding: `${num}px` }),
      { layer: "utilities" },
    ],
    [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
    [
      /^fs-([\.\d]+)$/,
      ([_, num]) => ({ "font-size": `${16 + parseFloat(num) * 4}px` }),
    ],
    [
      /^square-([\.\d]+%?)$/,
      ([_, num]) => ({
        width: `${num}px`,
        height: `${num}px`,
      }),
      {
        autocomplete: [
          "square-<num>",
          "square-<percent>",
          "square-<percentage>",
          "square-<directions>",
          "square-<directions>-<num>",
          "square-$fontSize",
          "square-<custom>",
        ],
      },
    ],
    [
      /^custom-(.+)$/,
      ([, value], { theme }) => {
        // console.log(context)
        return { color: theme.colors.brand[value] }
      },
    ],
    // TODO: how to do~
    // [
    //   /^after:content-(.+)$/,
    //   ([full, value], { theme }) => {
    //     console.log(full, value, 123)
    //     return `.after\:content-${value}::after {
    //       content: "haha";
    //     }`
    //   },
    // ],
    // [
    //   /^after-content-\[(.+)\]$/,
    //   ([full, value], { theme }) => {
    //     console.log(full, value)
    //     return `.after-content-[${value}]::after {
    //       content: ${value};
    //     }`
    //   },
    // ],
  ],
  variants: [
    (matcher, variantContext) => {
      const variant = "customize:"
      if (!matcher.startsWith(variant)) {
        return matcher
      }
      return {
        matcher: matcher.slice(variant.length),
        selector: (s) => `${s}:hover`,
      }
    },
  ],
  autocomplete: {
    templates: [
      // "(square)-<percent>",
      "(haha|ha)-(solid|dashed|dotted|double|hidden|none)",
    ],
    shorthands: {
      custom: `(${Array.from({ length: 11 }, (_, i) => `${i * 10}rem`).join(
        "|",
      )})`,
    },
  },
  shortcuts: {
    "nav-link": `text-(brand-primary 2xl) rounded-sm shadow p-2 hover:(text-brand-primary-dark) transition transition-duration-300`,
  },
  layers: {
    default: 1,
    shortcuts: 2,
    utilities: 4,
  },
  preflights: [
    {
      getCSS({ theme }) {
        return `
          img {
            max-width: 100%;
            height: auto;
            display: block;
            font-style: italic;
          }
        
        `
      },
    },
  ],
})
