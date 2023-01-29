import styleText from "data-text:./style.module.css"
import type { PlasmoCSConfig } from "plasmo"

import * as style from "./style.module.css"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = styleText
  return style
}

const PlasmoOverlay = () => {
  return (
    <span
      className={style.header}
      style={{
        padding: 12
      }}>
      HELLO WORLD TOP
    </span>
  )
}

export default PlasmoOverlay
