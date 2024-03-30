import { useState } from "react"

import { sendToBackgroundViaRelay } from "@plasmohq/messaging"

function IndexPage() {
  const [manifestData, setManifestData] = useState()

  const [a, setA] = useState(0)
  const [b, setB] = useState(4)
  const [addResult, setAddResult] = useState(0)

  return (
    <div>
      <div>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(Number(e.target.valueAsNumber))}
        />
        {" + "}
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.valueAsNumber)}
        />{" "}
        <button
          onClick={async () => {
            const resp = await sendToBackgroundViaRelay({
              name: "math/add",
              body: {
                a,
                b
              }
            })
            setAddResult(resp)
          }}>
          =
        </button>{" "}
        {addResult}
        {" | "}
        <span id="subtract-result" />
      </div>

      <button
        onClick={async () => {
          const resp = await sendToBackgroundViaRelay({
            name: "get-manifest"
          })
          setManifestData(resp)
        }}>
        Retrieve Extension Manifest
      </button>
      <pre>{JSON.stringify(manifestData, null, 2)}</pre>
    </div>
  )
}

export default IndexPage
