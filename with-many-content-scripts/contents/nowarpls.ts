import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.nowarpls.org/*"]
}

window.addEventListener("load", () => {
  alert("content script loaded for nowarpls.org!")
})
