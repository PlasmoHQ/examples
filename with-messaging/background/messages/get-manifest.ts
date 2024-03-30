import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
  const manifest = chrome.runtime.getManifest()

  res.send(manifest)
}

export default handler
