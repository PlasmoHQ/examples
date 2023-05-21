import { MemoryRouter } from "react-router-dom"

import { Routing } from "~routes/index.production"

function IndexPopup() {
  return (
    <MemoryRouter>
      <Routing />
    </MemoryRouter>
  )
}

export default IndexPopup
