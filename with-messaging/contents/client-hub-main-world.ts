import type { PlasmoCSConfig } from "plasmo"

import { connectToHub } from "@plasmohq/messaging/pub-sub"

export const config: PlasmoCSConfig = {
  world: "MAIN"
}

window.clientHub = {
  description:
    "A webpage accessible clientHub which can conenct to BGSW hub and send messages",
  connect: () => {
    if (!process.env.PLASMO_PUBLIC_EXTENSION_ID) {
      throw new Error(
        "Please update PLASMO_PUBLIC_EXTENSION_ID in .env file with your Extension Id"
      )
    }
    window.clientHub.port = connectToHub(process.env.PLASMO_PUBLIC_EXTENSION_ID)
    window.clientHub.port.onMessage.addListener((m) => {
      console.log("Message received from BGSW HUB:", m)
    })
  },
  send: (message: string) => {
    window.clientHub.port.postMessage({ message })
  }
}
