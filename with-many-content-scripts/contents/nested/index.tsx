import type { PlasmoCSConfig } from "plasmo"

import { quote } from "~core/quote"

export const config: PlasmoCSConfig = {
  matches: ["https://itero.plasmo.com/*"]
}

export default function IteroPopup() {
  return <div style={{ background: "white" }}>{quote}</div>
}
