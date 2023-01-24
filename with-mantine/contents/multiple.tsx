// Convo ref: https://discord.com/channels/946290204443025438/946290204904390693/1064744093109977148
// See this for another example: https://gist.github.com/joeelmahallawy/2cd5f879485d01170f316be8e585a2ed

import { Button, createEmotionCache } from "@mantine/core"
import type {
  PlasmoCSUIProps,
  PlasmoContentScript,
  PlasmoGetInlineAnchorList
} from "plasmo"
import type { FC } from "react"

import { ThemeProvider } from "~theme"

export const getStyle = () => document.createElement("style")

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () =>
  document.querySelectorAll(`button`)

const PlasmoInline: FC<PlasmoCSUIProps> = ({ anchor }) => {
  const styleCache = createEmotionCache({
    key: "plasmo-mui-cache",
    prepend: true,
    container:
      anchor.element.nextElementSibling.shadowRoot.querySelector("style")
  })

  return (
    <ThemeProvider emotionCache={styleCache}>
      <Button component="a" href="https://docs.plasmo.com" target="_blank">
        View Docs
      </Button>
    </ThemeProvider>
  )
}

export default PlasmoInline
