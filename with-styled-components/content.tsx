import type { PlasmoCSUIProps, PlasmoGetStyle } from "plasmo"
import { useState } from "react"
import { StyleSheetManager } from "styled-components"

import { Container, Link } from "~components"

// The target must have an empty style tag with the data-styled attribute as a direct decendant
// Ref: https://github.com/styled-components/styled-components/issues/3680#issuecomment-1027091616
export const getStyle: PlasmoGetStyle = async () => {
  const style = document.createElement("style")
  style.setAttribute("data-styled", "")
  return style
}

function PlasmoOverlay({ anchor }: PlasmoCSUIProps) {
  const [data, setData] = useState("")

  return (
    // If you are using a ThemeProvider put it after the StyleSheetManager
    <StyleSheetManager target={anchor.element.firstElementChild.shadowRoot}>
      <Container>
        <h2>
          Welcome to your{" "}
          <Link href="https://www.plasmo.com" target="_blank">
            Plasmo
          </Link>{" "}
          Extension!
        </h2>
        <input onChange={(e) => setData(e.target.value)} value={data} />
        <Link href="https://docs.plasmo.com" target="_blank">
          View Docs
        </Link>
      </Container>
    </StyleSheetManager>
  )
}

export default PlasmoOverlay
