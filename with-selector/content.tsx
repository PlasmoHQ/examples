import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import { querySelector } from "@plasmohq/selector"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*", "https://itero.plasmo.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () => {
  const anchor = querySelector(".this .selector .should .not .exist div")
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
