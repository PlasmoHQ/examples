import { describe, it } from "@jest/globals"
import { render } from "@testing-library/react"

import HelloContent from "~contents/hello"

describe("Hello Content Script UI Unit Test", () => {
  it("should render", () => {
    render(<HelloContent />)
  })
})
