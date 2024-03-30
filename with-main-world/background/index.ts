import windowChanger from "./injected-helper"

const inject = async (tabId: number) => {
  chrome.scripting.executeScript(
    {
      target: {
        tabId
      },
      world: "MAIN", // MAIN in order to access the window object
      func: windowChanger
    },
    () => {
      console.log("Background script got callback after injection")
    }
  )
}

// Simple example showing how to inject.
// You can inject however you'd like to, doesn't have
// to be with chrome.tabs.onActivated
chrome.tabs.onActivated.addListener((e) => {
  inject(e.tabId)
})
