import { useStorage } from "@plasmohq/storage/hook"

function IndexOptions() {
  const [openCount] = useStorage<number>("open-count")
  const [checked] = useStorage<boolean>("checked")
  const [serialNumber] = useStorage<string>("serial-number")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <p>Times opened: {openCount}</p>
      <input
        type={"checkbox"}
        readOnly
        checked={checked === undefined ? true : checked}
      />
      <i>#{serialNumber || 0}</i>
    </div>
  )
}

export default IndexOptions
