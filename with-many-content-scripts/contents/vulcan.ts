import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://vulcan.plasmo.com/*", "https://www.nowarpls.org/*"]
}

window.addEventListener("load", () => {
  alert("content script loaded for nowarpls.org!")
})
