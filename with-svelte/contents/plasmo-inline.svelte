<script context="module" lang="ts">
  import type {
    PlasmoContentScript,
    PlasmoGetInlineAnchor,
    PlasmoMountShadowHost
  } from "plasmo"

  export const config: PlasmoContentScript = {
    matches: ["https://www.plasmo.com/*"]
  }

  export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
    document.querySelector("#supercharge > h2 > span")

  export const mountShadowHost: PlasmoMountShadowHost = ({
    inlineAnchor,
    shadowHost
  }) => {
    inlineAnchor.insertBefore(shadowHost, inlineAnchor.firstChild)
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
