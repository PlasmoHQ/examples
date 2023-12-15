import { injectClarity } from "~injectClarity"

/**
 * This config is taken from the https://www.clarity.ms/tag/**insertIdHere** script
 * Replace all of this config with your own that you get from that URL
 * For more information, refer to the README.md
 */
const config = {
  projectId: "**replace all of this with your config from the link above**",
  upload: "https://t.clarity.ms/collect",
  expire: 365,
  cookies: ["_uetmsclkid", "_uetvid"],
  track: true,
  lean: false,
  content: true,
  dob: 1441
}

const executeClarityInjection = (tabId: number) => {
  chrome.scripting.executeScript({
    target: { tabId, allFrames: true },
    func: injectClarity,
    args: [
      {
        url: chrome.runtime.getURL("resources/clarity.js"),
        config,
        clarityKey: "clarity"
      }
    ],
    injectImmediately: true,
    world: "MAIN"
  })
}

/**
 * This code will inject clarity into www.plasmo.com whenever a user goes to the plasmo site
 */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("tab updated", tabId, changeInfo, tab, tab.status)
  if (
    changeInfo.status === "complete" &&
    tab.url.startsWith("https://www.plasmo.com/")
  ) {
    console.log("injecting clarity")
    executeClarityInjection(tabId)
  }
})

/**
 * This will inject into whatever page the user is currently on (we can't access "chrome://" pages)
 */
chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("chrome://")) {
    executeClarityInjection(tab.id)
  }
})
