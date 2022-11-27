import { useMessaging } from "@plasmohq/messaging/hook"

function IndexPopup() {
  const messager = useMessaging()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <button
        onClick={async () => {
          const resp = await messager.send("send-transaction", {
            tx: "0x1234",
            chainId: "Hello world"
          })

          console.log(resp)
        }}>
        Send TX
      </button>
    </div>
  )
}

export default IndexPopup
