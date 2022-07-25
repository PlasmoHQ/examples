import { useEffect } from "react"
import * as InboxSDK from '@inboxsdk/core';

function IndexPopup() {
  useEffect(() => {
    InboxSDK.load(2, "YOUR_APP_ID", {}).then((sdk) => {
      sdk.Compose.registerComposeViewHandler((composeView) => {
        composeView.addButton({
          title: "My Nifty Button!",
          iconUrl:
            "https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365",
          onClick(event) {
            event.composeView.insertHTMLIntoBodyAtCursor("<h1>Hello World!</h1>");
          },
        });
      });
    }).catch((error) => {
      console.log(error)
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
    </div>
  )
}

export default IndexPopup
