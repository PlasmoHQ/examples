<script context="module" lang="ts">
  import type {
    PlasmoCSConfig,
    PlasmoGetInlineAnchor,
    PlasmoMountShadowHost
  } from "plasmo"

  export const config: PlasmoCSConfig = {
    matches: ["https://www.plasmo.com/*"]
  }

  export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
    document.querySelector("#supercharge > h3 > span")

  export const mountShadowHost: PlasmoMountShadowHost = ({ 
    anchor, shadowHost 
  }) => {
    anchor!.element!.insertBefore(shadowHost!, anchor!.element!.firstChild)
  }
</script>

<script>
  let count = 0
  let increment = () => count++
</script>

<div>
  <span style="color: red;">{count}</span>
  <button on:click={increment}>A lie is a very poor way to say hello</button>
</div>
