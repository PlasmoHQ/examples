import { useStorage } from "@plasmohq/storage"

function IndexPopup() {
  const { value, persist } = useStorage("count", (storedCount) =>
    persist((parseInt(storedCount ? storedCount : "0") + 1).toString())
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
