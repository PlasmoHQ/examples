import { useStorage } from "@plasmohq/storage"

function IndexPopup() {
  const [openCount] = useStorage<number>("open-count", (storedCount) =>
    typeof storedCount === "undefined" ? 0 : storedCount + 1
  )

  const [checked, setChecked] = useStorage("checked", true)
  const [serialNumber, setSerialNumber] = useStorage(
    "serial-number",
    () => "8427"
  )

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
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <input
        value={serialNumber}
        onChange={(e) => setSerialNumber(e.target.value)}
      />
      {serialNumber}
    </div>
  )
}

export default IndexPopup
