import { StyleProvider } from "@ant-design/cssinjs"
import Button from "antd/es/button"
import antdResetCssText from "data-text:antd/dist/reset.css"
import type { PlasmoCSConfig, PlasmoGetShadowHostId } from "plasmo"

import { ThemeProvider } from "~theme"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

const HOST_ID = "engage-csui"

export const getShadowHostId: PlasmoGetShadowHostId = () => HOST_ID

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = antdResetCssText
  return style
}

const EngageOverlay = () => (
  <ThemeProvider>
    <StyleProvider container={document.getElementById(HOST_ID).shadowRoot}>
      <Button type="primary">Engage</Button>
    </StyleProvider>
  </ThemeProvider>
)

export default EngageOverlay
