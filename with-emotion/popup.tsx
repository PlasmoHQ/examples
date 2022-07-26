import { useState } from "react"

import { Container, Link } from "~components"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <Container>
      <h2>
        Welcome to your{" "}
        <Link href="https://www.plasmo.com" target="_blank">
          Plasmo
        </Link>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <Link href="https://docs.plasmo.com" target="_blank">
        View Docs
      </Link>
    </Container>
  )
}

export default IndexPopup
