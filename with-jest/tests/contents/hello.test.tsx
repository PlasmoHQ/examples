import { describe, expect, it } from "@jest/globals"
import { render } from "@testing-library/react"

import HelloContent from "~contents/hello"

describe("test contents/hello", () => {
  it("should render", () => {
    expect(render(<HelloContent />).getByText("Hello")).toBeTruthy()
  })
})
