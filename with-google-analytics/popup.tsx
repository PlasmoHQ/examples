import "https://www.googletagmanager.com/gtag/js?id=$PLASMO_PUBLIC_GTAG_ID"

import { useEffect, useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments) // eslint-disable-line
    }
    window.gtag("js", new Date())
    window.gtag("config", process.env.PLASMO_PUBLIC_GTAG_ID, {
      page_path: "/popup",
      debug_mode: true
    })

    window.gtag("event", "login", {
      method: "TEST"
    })
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
    </div>
  )
}

export default IndexPopup
