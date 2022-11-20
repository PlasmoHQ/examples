import { Button } from "antd"
import antdResetCssText from "data-text:antd/dist/reset.css"
import type { PlasmoContentScript } from "plasmo"

import { ThemeProvider } from "~theme"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = antdResetCssText
  return style
}

const HelloWorldOverlay = () => {
  return (
    <ThemeProvider>
      <Button type="primary">Engage</Button>
    </ThemeProvider>
  )
}

export default HelloWorldOverlay
