<script context="module" lang="ts">
  import cssText from "data-text:~/contents/plasmo-overlay.css"
  import type { PlasmoCSConfig } from "plasmo"

  export const config: PlasmoCSConfig = {
    matches: ["https://www.plasmo.com/*"]
  }

  export const getStyle = () => {
    const style = document.createElement("style")
    style.textContent = cssText
    return style
  }
</script>

<span class="hw-top">Every living thing wants to survive</span>
