import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

import { usePort } from "@plasmohq/messaging/hook"

export const config: PlasmoCSConfig = {
  matches: ["http://localhost:1947/*"]
}

export default function Porter() {
  const port = usePort("mail")
  const [password, setPassword] = useState("")
  return (
    <div
      style={{
        position: "fixed",
        padding: "8px",
        right: 0
      }}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          port.send({
            password
          })
        }}>
        Test Password
      </button>
      <p>HELLO {port.data}</p>
    </div>
  )
}
