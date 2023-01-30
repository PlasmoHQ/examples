import { useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

function IndexPopup() {
  const [txHash, setTxHash] = useState(undefined)
  const [txInput, setTxInput] = useState(0)
  return (
    <div>
      <input
        type="number"
        value={txInput}
        onChange={(e) => setTxInput(e.target.valueAsNumber)}
      />

      <button
        onClick={async () => {
          const resp = await sendToBackground({
            name: "hash-tx",
            body: {
              input: txInput
            }
          })
          setTxHash(resp)
        }}>
        Hash TX
      </button>

      <p>TX HASH: {txHash}</p>
    </div>
  )
}

export default IndexPopup
