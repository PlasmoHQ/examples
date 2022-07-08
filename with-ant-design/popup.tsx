import { Button } from "antd"

import "./index.css"

function IndexPopup() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <Button type="primary">Hello Ant Design</Button>
    </div>
  )
}

export default IndexPopup
