import { Anchor, Button, Input, Stack, Text } from "@mantine/core"
import mantineCssText from "data-text:@mantine/core/styles.css"
import mantineOverrideCssText from "data-text:~styles/mantine-override.css"
import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo"
import { useState } from "react"

import { ThemeProvider } from "~theme"

import "@mantine/core/styles.css"
//see https://github.com/PlasmoHQ/plasmo/issues/776#issuecomment-1811072653
import "~styles/mantine-override.css"

import { setMantineColorScheme } from "~utils"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = mantineCssText + mantineOverrideCssText
  return style
}

function PlasmoOverlay() {
  const [data, setData] = useState("")
  setMantineColorScheme("light")
  return (
    <ThemeProvider>
      <Stack miw={240} bg="white" p="lg">
        <Text fw="bold" size="xl">
          Welcome to your{" "}
          <Anchor href="https://www.plasmo.com" target="_blank">
            Plasmo
          </Anchor>{" "}
          Extension!
        </Text>
        <Input onChange={(e) => setData(e.target.value)} value={data} />
        <Button component="a" href="https://docs.plasmo.com" target="_blank">
          View Docs
        </Button>
      </Stack>
    </ThemeProvider>
  )
}

export default PlasmoOverlay
