import type { PlasmoContentScript, PlasmoGetInlineAnchor } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector("#supercharge > h2 > span")

const PlasmoInline = () => {
  return <button>Custom button</button>
}

export default PlasmoInline
