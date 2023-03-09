import testDataURL from "raw-env:./test.json"
import { useEffect, useState } from "react"

function IndexPopup() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(testDataURL)
      .then((res) => res.json())
      .then((data) => setData(data))
  })

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <a target="_blank" href="https://docs.plasmo.com/framework/env">
        with-env example extension
      </a>
      <p>Ship name: {process.env.PLASMO_PUBLIC_SHIP_NAME}</p>
      <p>Private data: {process.env.INFOPATH}</p>

      <p>{process.env.NODE_ENV}</p>
      <p>TEST DATA: {data?.url}</p>
    </div>
  )
}

export default IndexPopup
