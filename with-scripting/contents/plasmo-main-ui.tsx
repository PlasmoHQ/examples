import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"],
  world: "MAIN"
}

export default function PlasmoMainUI() {
  return (
    <div
      style={{
        padding: 8,
        background: "purple",
        color: "white"
      }}>
      <h1>{`Message: ${window.mainMessage}`}</h1>
    </div>
  )
}
