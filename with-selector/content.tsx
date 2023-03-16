import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import { querySelector } from "@plasmohq/selector"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*", "https://itero.plasmo.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () => {
  const anchor = querySelector(".bruh .hola .miamo louis h1")
  return anchor
}

export default function ContentStuff() {
  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "1rem"
      }}>
      <h1>Hello World</h1>
    </div>
  )
}
