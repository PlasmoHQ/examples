import cssText from "data-text:~/contents/plasmo-overlay.css"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"],
  css: ["font.css"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <span
      className="hw-top"
      style={{
        padding: 12
      }}>
      CSUI OVERLAY FIXED POSITION
    </span>
  )
}

export default PlasmoOverlay
