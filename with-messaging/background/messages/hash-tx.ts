import type { PlasmoMessaging } from "@plasmohq/messaging"

const HIDDEN_NUMBER = 541

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const { input } = req.body

  res.send(input * HIDDEN_NUMBER)
}

export default handler
