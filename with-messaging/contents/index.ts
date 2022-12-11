import type { PlasmoContentScript } from "plasmo"

import { relay } from "@plasmohq/messaging"

export const config: PlasmoContentScript = {
  matches: ["http://localhost:1947/*"]
}

relay({
  name: "hydrate-options"
})

relay(
  {
    name: "nested/hear-comes-the-message"
  },
  async (payload) => {
    console.log("nested/hear-comes-the-message", payload)
  }
)
