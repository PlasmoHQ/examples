import Button from "@mui/material/Button"
import Input from "@mui/material/Input"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <Stack minWidth={240}>
      <Typography variant="h6">
        Welcome to your{" "}
        <Link href="https://www.plasmo.com" target="_blank">
          Plasmo
        </Link>{" "}
        Extension!
      </Typography>
      <Input onChange={(e) => setData(e.target.value)} value={data} />
      <Button href="https://docs.plasmo.com" target="_blank">
        View Docs
      </Button>
    </Stack>
  )
}

export default IndexPopup
