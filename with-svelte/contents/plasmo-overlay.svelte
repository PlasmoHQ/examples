<script context="module" lang="ts">
  import cssText from "data-text:~/contents/plasmo-overlay.css"
  import type { PlasmoContentScript } from "plasmo"

  export const config: PlasmoContentScript = {
    matches: ["https://www.plasmo.com/*"]
  }

  export const getStyle = () => {
    const style = document.createElement("style")
    style.textContent = cssText
    return style
  }
</script>

<span class="hw-top">Every living thing wants to survive</span>
