import type { PlasmoCSConfig } from "plasmo"

import { useMessage } from "@plasmohq/messaging/hook"

export const config: PlasmoCSConfig = {
  all_frames: true
}

const QueryTextAnywhere = () => {
  const { data } = useMessage<string, string>(async (req, res) => {
    res.send(document.querySelector(req.body).textContent)
  })
  return (
    <div
      style={{
        padding: 8,
        background: "#333",
        color: "red"
      }}>
      Querying Selector for: {data}
    </div>
  )
}

export default QueryTextAnywhere
