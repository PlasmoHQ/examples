import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { useState } from "react"

import { Container, Link } from "~components"

const styleElement = document.createElement("style")

const styleCache = createCache({
  key: "plasmo-emotion-cache",
  prepend: true,
  container: styleElement
})

export const getStyle = () => styleElement

function PlasmoOverlay() {
  const [data, setData] = useState("")

  return (
    <CacheProvider value={styleCache}>
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
    </CacheProvider>
  )
}

export default PlasmoOverlay
