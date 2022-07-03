import { useStorage } from "@plasmohq/storage"

function IndexOptions() {
  const [openCount] = useStorage<number>("open-count")

  const [checked] = useStorage("checked", false)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <p>Times opened: {openCount}</p>
      <input type={"checkbox"} readOnly checked={checked} />
    </div>
  )
}

export default IndexOptions
