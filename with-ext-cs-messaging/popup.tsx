import { useState } from "react"

import { sendToActiveContentScript } from "@plasmohq/messaging"

function IndexPopup() {
  const [csResponse, setCsResponse] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 50
      }}>
      <button
        onClick={async () => {
          const responseFromCS = await sendToActiveContentScript({
            name: "randomNumber",
            body: { message: Math.round(Math.random() * 100) }
          })
          setCsResponse(responseFromCS)
        }}>
        Send Mesage to CS
      </button>
      <p>{csResponse}</p>
    </div>
  )
}

export default IndexPopup
