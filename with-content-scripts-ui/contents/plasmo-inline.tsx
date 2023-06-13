import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector(`[href="/#pricing"]`)

// Use this to optimize unmount lookups
export const getShadowHostId = () => "plasmo-inline-example-unique-id"

const PlasmoInline = () => {
  return (
    <div
      style={{
        borderRadius: 4,
        padding: 4,
        background: "pink"
      }}>
      CSUI INLINE
    </div>
  )
}

export default PlasmoInline
