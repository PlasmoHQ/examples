import { Storage } from "@plasmohq/storage"

import { AnalyticsEvent } from "./utils"

/**
 * On install, generate a random client ID and store it in sync storage.
 * This is used to identify unique users.
 */
chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason == "install") {
    // Generate a random client ID.
    const clientId = self.crypto.randomUUID()

    // Storing in sync so that the client ID is synced across a user's devices.
    const storage = new Storage({
      area: "sync"
    })

    await storage.set("clientId", clientId)

    const platform = await chrome.runtime.getPlatformInfo()

    // Send a new_install event to Google Analytics.
    await AnalyticsEvent([
      {
        name: "new_install",
        params: {
          operating_system: platform.os
        }
      }
    ])
  }
})
