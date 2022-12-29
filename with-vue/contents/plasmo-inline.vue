<script lang="ts">
import type {
  PlasmoContentScript,
  PlasmoGetInlineAnchor,
  PlasmoMountShadowHost
} from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector("#supercharge > h3 > span")

const mountShadowHost: PlasmoMountShadowHost = ({ anchor, shadowHost }) => {
  anchor!.element!.insertBefore(shadowHost!, anchor!.element!.firstChild)
}

export default {
  plasmo: {
    getInlineAnchor,
    mountShadowHost
  },
  data() {
    return {
      count: 0
    }
  },
  setup() {},
  mounted() {}
}
</script>

<template>
  <div>
    <span style="color: red">{{ count }}</span>
    <button @click="count++">Many Myths are based on truth</button>
  </div>
</template>
