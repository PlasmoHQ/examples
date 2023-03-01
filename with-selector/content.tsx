import { querySelector } from "@plasmohq/selector"

import type { PlasmoGetInlineAnchor } from "~../../cli/plasmo/dist/type"

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
