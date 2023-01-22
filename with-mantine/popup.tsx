import { Stack, Button, Anchor, Text, Input } from '@mantine/core'
import { useState } from "react"
import { ThemeProvider } from '~theme'

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <ThemeProvider>
      <Stack miw={240} p="lg">
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

export default IndexPopup
