// Convo ref: https://discord.com/channels/946290204443025438/946290204904390693/1064744093109977148
// See this for another example: https://gist.github.com/joeelmahallawy/2cd5f879485d01170f316be8e585a2ed

import { Button } from "@mantine/core"
import mantineCssText from "data-text:@mantine/core/styles.css"
import mantineOverrideCssText from "data-text:~styles/mantine-override.css"
import type {
  PlasmoCSConfig,
  PlasmoCSUIProps,
  PlasmoGetInlineAnchorList,
  PlasmoGetStyle
} from "plasmo"
import type { FC } from "react"

import { ThemeProvider } from "~theme"

import "@mantine/core/styles.css"
//see https://github.com/PlasmoHQ/plasmo/issues/776#issuecomment-1811072653
import "~styles/mantine-override.css"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = mantineCssText + mantineOverrideCssText
  return style
}

export const getInlineAnchorList: PlasmoGetInlineAnchorList = async () =>
  document.querySelectorAll(`button`)

const PlasmoInline: FC<PlasmoCSUIProps> = ({ anchor }) => {
  return (
    <ThemeProvider>
      <Button component="a" href="https://docs.plasmo.com" target="_blank">
        View Docs
      </Button>
    </ThemeProvider>
  )
}

export default PlasmoInline
