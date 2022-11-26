import type { PlasmoMessaging } from "@plasmohq/messaging"

import { handler } from "./messages/send-transaction"

chrome.runtime.onMessage.addListener(
  (request: PlasmoMessaging.Request, sender, sendResponse) => {
    switch (request.name) {
      case "send-transaction":
        handler(request, sender, sendResponse)
        break
    }

    return true
  }
)
