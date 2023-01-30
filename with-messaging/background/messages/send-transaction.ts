import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log(req)

  res.send({
    message: "Transaction Send completed"
  })
}

export default handler
