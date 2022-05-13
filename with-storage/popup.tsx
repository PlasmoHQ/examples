import { useStorage } from "@plasmohq/storage"

function IndexPopup() {
  const { value } = useStorage("count", (storedCount) =>
    typeof storedCount === "number" ? storedCount + 1 : 0
  )

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <p>Times opened: {value}</p>
    </div>
  )
}

export default IndexPopup
