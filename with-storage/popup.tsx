import { useStorage } from "@plasmohq/storage"

function IndexPopup() {
  const { value } = useStorage<number>("count", (storedCount) =>
    typeof storedCount === "undefined" ? 0 : storedCount + 1
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
