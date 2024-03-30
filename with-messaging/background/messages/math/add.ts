import type { PlasmoMessaging } from "@plasmohq/messaging"
import { getPort } from "@plasmohq/messaging/background"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const { a, b } = req.body

  const port = getPort("mail")
  port.postMessage("ADDING TWO NUMBERS EH?")
  res.send(a + b + 1)
}

export default handler
