import type { PlasmoMessaging } from "@plasmohq/messaging"

const SECRET = "LABARRE"

const handler: PlasmoMessaging.PortHandler = async (req, res) => {
  const { password } = req.body

  if (password !== SECRET) {
    res.send("(HINT: HOMETOWN)")
  } else {
    res.send("CAPTAIN")
  }
}

export default handler
