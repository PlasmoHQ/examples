import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

window.addEventListener("load", () => {
  document.body.style.background = "pink"
})
