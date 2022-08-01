import { useState } from "react"

import "./style.css"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className="flex flex-col p-8">
      <h2>
        Welcome to your{" "}
        <a
          className="text-blue-500 underline"
          href="https://www.plasmo.com"
          target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a
        className="text-red-500 font-bold underline"
        href="https://docs.plasmo.com"
        target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
