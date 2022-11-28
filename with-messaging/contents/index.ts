import type { PlasmoContentScript } from "plasmo"

import { relay } from "@plasmohq/messaging"

export const config: PlasmoContentScript = {
  matches: ["http://localhost:1947/*"]
}

const unsub = relay({
  name: "hydrate-options"
})
