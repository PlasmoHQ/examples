import { useState } from "react"
import { createEditor } from "slate"
import { withHistory } from "slate-history"
import { Editable, Slate, withReact } from "slate-react"

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }]
  }
]
function IndexPopup() {
  const [editor] = useState(() => withReact(withHistory(createEditor())))
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: 470
      }}>
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension with Slate
      </h2>

      <Slate editor={editor} value={initialValue}>
        <Editable
          style={{
            border: "1px solid #333",
            padding: 16
          }}
        />
      </Slate>

      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
