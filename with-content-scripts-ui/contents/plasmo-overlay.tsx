import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

// Idea for an UI API, for popup, notification badge, or mounting UI
// Idea for static mount
// Idea for styling injection support (inline or with custom emotion cache)

const PlasmoOverlay = () => {
  return (
    <span
      style={{
        background: "white",
        padding: 12
      }}>
      HELLO WORLD TOP
    </span>
  )
}

export default PlasmoOverlay
