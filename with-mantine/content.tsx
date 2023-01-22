import { useState } from "react"
import { createEmotionCache } from '@mantine/core'
import { Stack, Button, Anchor, Text, Input } from '@mantine/core'
import { ThemeProvider } from "~theme"

const styleElement = document.createElement("style")

const styleCache = createEmotionCache({
  key: "plasmo-mantine-cache",
  prepend: true,
  container: styleElement
})

export const getStyle = () => styleElement

function PlasmoOverlay() {
  const [data, setData] = useState("")

  return (
    <ThemeProvider emotionCache={styleCache}>
      <Stack miw={240} bg="white" p="lg">
        <Text fw="bold" size="xl">
          Welcome to your{" "}
          <Anchor href="https://www.plasmo.com" target="_blank">
            Plasmo
          </Anchor>{" "}
          Extension!
        </Text>
        <Input onChange={(e) => setData(e.target.value)} value={data} />
        <Button component="a" href="https://docs.plasmo.com" target="_blank" >
          View Docs
        </Button>
      </Stack>
    </ThemeProvider>
  )
}

export default PlasmoOverlay
