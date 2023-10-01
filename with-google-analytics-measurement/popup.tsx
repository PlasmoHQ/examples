import { useEffect, useState } from "react"
import { AnalyticsEvent } from "./utils"

function IndexPopup() {
  const [data, setData] = useState("")

  useEffect(() => {
    AnalyticsEvent([
      {
        name: 'page_view',
        params: {
          page_title: 'popup',
        }
      }
    ]);
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        minWidth: "250px",
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <button onClick={() => AnalyticsEvent([
        {
          name: 'button_click',
          params: {
            method: 'TEST',
            data,
            }
          }
        ])}>
          Click me
        </button>
    </div>
  )
}

export default IndexPopup
