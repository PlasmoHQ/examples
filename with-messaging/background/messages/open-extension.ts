import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  chrome.windows.create(
    {
      url: chrome.runtime.getURL("popup.html"),
      type: "popup",
      width: 400,
      height: 600
    },
    (window) => {
      console.log(`Popup window created with ID ${window.id}`)
    }
  )
  const message = "Hello from the background script!"

  res.send({
    message
  })
}

export default handler
