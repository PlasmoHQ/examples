import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

export const getMountPoint = async () => document.querySelector("#pricing")

const PlasmoPricingExtra = () => {
  return (
    <span
      style={{
        background: "white",
        padding: 12
      }}>
      HELLO WORLD
    </span>
  )
}

export default PlasmoPricingExtra
