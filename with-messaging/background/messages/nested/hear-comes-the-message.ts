import type { PlasmoMessaging } from "@plasmohq/messaging"

export const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log(req)

  res.send({
    message: "Hello from background"
  })
}
