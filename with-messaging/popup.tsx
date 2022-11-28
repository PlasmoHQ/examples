import { sendToBackground } from "@plasmohq/messaging"

function IndexPopup() {
  return (
    <div>
      <button
        onClick={async () => {
          const resp = await sendToBackground({
            name: "send-transaction"
          })

          console.log(resp)
        }}>
        Send TX
      </button>
    </div>
  )
}

export default IndexPopup
