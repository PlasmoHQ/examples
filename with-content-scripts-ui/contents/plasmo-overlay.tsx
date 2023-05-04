import cssText from "data-text:~/contents/plasmo-overlay.css"
import type { PlasmoCSConfig, PlasmoWatchOverlayAnchor } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"],
  css: ["font.css"]
}

export const watchOverlayAnchor: PlasmoWatchOverlayAnchor = (
  updatePosition
) => {
  const interval = setInterval(() => {
    updatePosition()
  }, 137)

  return () => clearInterval(interval)
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
      HELLO WORLD TOP
    </span>
  )
}

export default PlasmoOverlay
