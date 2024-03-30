import { usePort } from "@plasmohq/messaging/hook"

type RequestBody = {
  hello: string
}

type ResponseBody = {
  message: string
}

function DeltaTab() {
  const mailPort = usePort<RequestBody, ResponseBody>("mail")

  return (
    <div>
      {mailPort.data?.message}
      <button
        onClick={async () => {
          mailPort.send({
            hello: "world"
          })
        }}>
        Send Port
      </button>
    </div>
  )
}

export default DeltaTab
