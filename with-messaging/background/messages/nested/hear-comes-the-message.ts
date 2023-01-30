import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log(req)

  res.send({
    message: "Hello from background"
  })
}

export default handler
