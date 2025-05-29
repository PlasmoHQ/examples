import { useState } from "react"
import { Theme, Text,Link } from "@radix-ui/themes"
import '@radix-ui/themes/styles.css';

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <Theme>
    <div
      style={{
        padding: 16
      }}>
      <Text size="2">
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </Text>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <Link href="https://docs.plasmo.com" target="_blank">View Docs</Link>
      
    </div>
    </Theme>
  )
}

export default IndexPopup
