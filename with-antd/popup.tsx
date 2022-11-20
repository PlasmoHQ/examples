import { Button } from "antd"

import { ThemeProvider } from "~theme"

function IndexPopup() {
  return (
    <ThemeProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 16
        }}>
        <h1>
          Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
        </h1>
        <Button type="primary">Live long and prosper</Button>
      </div>
    </ThemeProvider>
  )
}

export default IndexPopup
