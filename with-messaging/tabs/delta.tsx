import { usePort } from "@plasmohq/messaging/hook"

function DeltaTab() {
  const mailPort = usePort("mail")

  return (
    <div>
      {mailPort.data}
      <button
        onClick={async () => {
          mailPort.send({
            hello: "world"
          })
        }}>
        Send Port message TX
      </button>
    </div>
  )
}

export default DeltaTab
