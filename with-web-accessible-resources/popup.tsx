import { useEffect, useState } from "react"
import Logo from "react:~assets/logo.svg"

const srcList = Array.from({
  length: 3
}).map((_, i) => chrome.runtime.getURL(`assets/pic${i}.png`))

function IndexPopup() {
  const [test, setTest] = useState()
  useEffect(() => {
    fetch(chrome.runtime.getURL("resources/test.json"))
      .then((r) => r.json())
      .then(setTest)
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
      <Logo
        style={{
          color: "blue"
        }}
      />
      <div
        style={{
          display: "flex"
        }}>
        {srcList.map((src, i) => (
          <img key={i} src={src} style={{ width: 44, height: 44 }} />
        ))}
      </div>
      <code>{JSON.stringify(test, null, 2)}</code>
    </div>
  )
}

export default IndexPopup
