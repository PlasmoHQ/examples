import type { PlasmoContentScript, PlasmoGetInlineAnchor } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector("#supercharge > h3 > span")

// Use this to optimize unmount lookups
export const getShadowHostId = () => "plasmo-inline-example-unique-id"

const PlasmoInline = () => {
  return <button>Custom button</button>
}

export default PlasmoInline
