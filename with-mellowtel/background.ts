
import Mellowtel from "mellowtel"


let mellowtel
;(async () => {
  mellowtel = new Mellowtel(process.env.PLASMO_PUBLIC_MELLOWTEL)
  await mellowtel.initBackground()
})()

chrome.runtime.onInstalled.addListener(async function (details) {
  console.log("Extension Installed or Updated", details)
  // If you want to handle first install and updates differently
  /**
  if(details.reason === "install"){
      // call a function to handle a first install
  } else if(details.reason === "update") {
      // call a function to handle an update
  }
  **/
  await mellowtel.generateAndOpenOptInLink()
})

