import type { PlasmoMessaging } from "@plasmohq/messaging"

export const handler: PlasmoMessaging.PortHandler = async (req, res) => {
  console.log(req)

  res.send({
    message: "Hello from port handler"
  })
}
