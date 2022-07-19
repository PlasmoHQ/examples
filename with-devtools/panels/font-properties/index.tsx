import { createRoot } from "react-dom/client"

const FontProperties = () => {
  return (
    <div>
      <h2>Font Properties</h2>
      <p>HI THERE</p>
    </div>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<FontProperties />)
