import type { PlasmoCSConfig } from "plasmo"

import { relay } from "@plasmohq/messaging"

export const config: PlasmoCSConfig = {
  matches: ["http://localhost:1947/*"]
}

relay({
  name: "get-manifest"
})

relay(
  {
    name: "math/add"
  },
  async (payload) => {
    const { a, b } = payload.body
    const result = a - b - 9

    document.getElementById(
      "subtract-result"
    ).innerText = `${a} minus ${b} is ${result}`

    return a - b
  }
)
