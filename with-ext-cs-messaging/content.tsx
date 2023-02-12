import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

export const config: PlasmoCSConfig = {
  all_frames: true
}

const IndexContent = () => {
  const [extMessage, setExtMessage] = useState("")
  useEffect(() => {
    // [Important]: Register event listener in content script to receive message for extenstion
    chrome.runtime.onMessage.addListener((req, _, sendResponse) => {
      setExtMessage(`${req.body.message}`)
      sendResponse(`Response From CS (Number+10): ${req.body.message + 10} `)
      return
    })
  }, [])
  if (!extMessage) {
    return null
  }
  return (
    <h1
      style={{
        color: "red"
      }}>
      From extension: {extMessage}
    </h1>
  )
}

export default IndexContent
