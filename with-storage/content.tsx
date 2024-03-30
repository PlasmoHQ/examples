import type { PlasmoCSConfig } from "plasmo"

import { useStorage } from "@plasmohq/storage/hook"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

// Idea for an UI API, for popup, notification badge, or mounting UI
// Idea for static mount
// Idea for styling injection support (inline or with custom emotion cache)

export const getRootContainer = () => {
  return document.querySelector("#feature")
}

const PlasmoOverlay = () => {
  const [openCount] = useStorage<number>("open-count")
  const [checked] = useStorage<boolean>("checked")
  const [serialNumber] = useStorage<string>("serial-number")

  return (
    <span
      style={{
        padding: 12
      }}>
      <h1>HELLO WORLD ROOT CONTAINER</h1>
      <input
        type={"checkbox"}
        readOnly
        checked={checked === undefined ? true : checked}
      />
      <p>
        Open: {openCount}
        <i>#{serialNumber}</i>
      </p>
    </span>
  )
}

export default PlasmoOverlay
