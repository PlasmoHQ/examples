import { createGoogleSearch } from "~contents"

describe("your function to test", () => {
  it("should have called a webextension API", () => {
    createGoogleSearch()
    expect(chrome.tabs.create).toHaveBeenCalledWith({
      url: "https://www.google.com/search?q=%s"
    })
  })
  it("should have called a webextension API three times", () => {
    createGoogleSearch()
    createGoogleSearch()
    expect(chrome.tabs.create).toHaveBeenCalledTimes(3)
  })
})
