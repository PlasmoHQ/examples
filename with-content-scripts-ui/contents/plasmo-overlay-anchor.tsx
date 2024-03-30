import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector(`h1`)

const PlasmoPricingExtra = () => (
  <span
    style={{
      borderRadius: 4,
      background: "beige",
      padding: 4
    }}>
    CSUI OVERLAY ANCHOR
  </span>
)

export default PlasmoPricingExtra
