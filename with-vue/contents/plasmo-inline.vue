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
  document.querySelector("#supercharge > h2 > span")

const mountShadowHost: PlasmoMountShadowHost = ({
  inlineAnchor,
  shadowHost
}) => {
  inlineAnchor!.insertBefore(shadowHost!, inlineAnchor!.firstChild)
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
