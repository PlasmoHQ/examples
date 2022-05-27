export const createGoogleSearch = () =>
  chrome.tabs.create({
    url: "https://www.google.com/search?q=%s"
  })
