import type { PlasmoMessaging } from "@plasmohq/messaging"

export const handler: PlasmoMessaging.Handler = async (
  request,
  sender,
  sendResponse
) => {
  console.log(request)

  sendResponse("HELLO WORLD")
}
