export {}

chrome.action.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage()
})
