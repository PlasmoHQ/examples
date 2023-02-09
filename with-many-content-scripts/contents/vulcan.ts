import type { PlasmoCSConfig } from "plasmo"

import { quote } from "~core/quote"

export const config: PlasmoCSConfig = {
  matches: ["https://vulcan.plasmo.com/*", "https://www.nowarpls.org/*"]
}

window.addEventListener("load", () => {
  alert(quote)
})
