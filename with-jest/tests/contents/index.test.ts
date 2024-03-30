import { describe, expect, it } from "@jest/globals"

import { createGoogleSearch } from "~contents"

describe("test contents/index", () => {
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
