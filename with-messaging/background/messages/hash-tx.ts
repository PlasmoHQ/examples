import type { PlasmoMessaging } from "@plasmohq/messaging"

const HIDDEN_NUMBER = 541

type RequestBody = {
  input: number
}

type RequestResponse = number

const handler: PlasmoMessaging.MessageHandler<
  RequestBody,
  RequestResponse
> = async (req, res) => {
  const { input } = req.body

  res.send(input * HIDDEN_NUMBER)
}

export default handler
