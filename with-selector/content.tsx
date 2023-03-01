import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

import { querySelector } from "@plasmohq/selector"

export const config: PlasmoCSConfig = {
  matches: ["https://plasmo.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () => {
  const anchor = querySelector(".bruh bruh rbuhuh h1")
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
