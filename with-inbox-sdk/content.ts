import * as InboxSDK from "@inboxsdk/core"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://mail.google.com/*"],
  run_at: "document_end"
}

async function main() {
  const inboxSdk = await InboxSDK.load(
    2,
    process.env.PLASMO_PUBLIC_INBOX_SDK_APP_ID,
    null
  )
  // the SDK has been loaded, now do something with it!
  inboxSdk.Compose.registerComposeViewHandler((composeView) => {
    // a compose view has come into existence, do something with it!
    composeView.addButton({
      title: "My Nifty Button!",
      iconUrl: "https://plasmo.com/logo.png",
      onClick(event) {
        event.composeView.insertHTMLIntoBodyAtCursor("Hello World!")
      }
    })
  })
}

main()
