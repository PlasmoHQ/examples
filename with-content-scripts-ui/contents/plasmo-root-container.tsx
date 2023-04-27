import type { PlasmoCSConfig, PlasmoRender } from "plasmo"
import { createRoot } from "react-dom/client"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getRootContainer = () =>
  new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      const rootContainer = document.getElementById("itero")
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
        background: "yellow",
        padding: 12
      }}>
      HELLO WORLD ROOT CONTAINER
    </span>
  )
}

export const render: PlasmoRender = async ({ createRootContainer }) => {
  const rootContainer = await createRootContainer()
  const root = createRoot(rootContainer)
  root.render(<PlasmoOverlay />)
}

export default PlasmoOverlay
