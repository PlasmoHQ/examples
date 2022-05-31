import type { PlasmoContentScript } from "plasmo"
import { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

// Idea for an UI API, for popup, notification badge, or mounting UI
// Idea for static mount
// Idea for styling injection support (inline or with custom emotion cache)

const PlasmoHiddenPricing = () => {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)

  useEffect(() => {
    const pricingSection = document.querySelector("#pricing") as HTMLElement

    console.log(pricingSection)

    const mutateXY = () => {
      const boundingClientRect = pricingSection?.getBoundingClientRect()
      setTop(boundingClientRect.y)
      setLeft(boundingClientRect.x)
    }

    pricingSection.addEventListener("mouseenter", mutateXY)

    return () => {
      pricingSection.removeEventListener("mouseenter", mutateXY)
    }
  }, [])

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        top,
        left
      }}>
      HELLO WORLD
    </div>
  )
}

window.addEventListener("load", () => {
  const mountPoint = document.createElement("div")

  mountPoint.style.cssText = `
    z-index: 1;
    position: absolute;
  `

  const shadowHost = document.createElement("div")

  const shadowRoot = shadowHost.attachShadow({ mode: "open" })
  document.body.insertAdjacentElement("beforebegin", shadowHost)

  // let style = document.createElement('style');
  // style.textContent = cssText;
  // shadowRoot.appendChild(style);

  // const styleMountPoint = document.createElement("style")
  // const styleCache = createCache({
  //   key: "process-base-ext",
  //   container: styleMountPoint,
  //   prepend: true
  // })

  // shadowRoot.appendChild(styleMountPoint)

  shadowRoot.appendChild(mountPoint)
  const root = createRoot(mountPoint)

  root.render(<PlasmoHiddenPricing />)
})
