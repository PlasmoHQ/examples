<template>
  <span className="hw-top">
    If I can have honesty, it's easier to overlook mistakes
  </span>
</template>

<script lang="ts">
import cssText from "data-text:~/contents/plasmo-overlay.css"
import type { PlasmoContentScript, PlasmoGetStyle } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export default {
  plasmo: {
    getStyle
  },
  setup() {},
  mounted() {}
}
</script>
