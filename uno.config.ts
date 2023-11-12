// uno.config.ts
import { defineConfig } from "unocss"

export default defineConfig({
  // ...UnoCSS options

  rules: [
    ["m-10", { margin: "10px" }],
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ],
})
