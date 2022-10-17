import type { PlasmoContentScript } from "plasmo"
import { createRoot } from "react-dom/client"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

export const getRootContainer = () =>
  new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      const rootContainer = document.getElementById("feature")
      if (rootContainer) {
        clearInterval(checkInterval)
        resolve(rootContainer)
      }
    }, 137)
  })

const PlasmoOverlay = () => {
  return (
    <span
      style={{
        padding: 12
      }}>
      <h1>HELLO WORLD ROOT CONTAINER</h1>
    </span>
  )
}

export const render = async ({ createRootContainer }) => {
  const rootContainer = await createRootContainer()
  const root = createRoot(rootContainer)
  root.render(<PlasmoOverlay />)
}

export default PlasmoOverlay
