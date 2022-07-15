import { Button } from "antd"
import cssText from "data-text:~/index.less"
import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.plasmo.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const HelloWorldOverlay = () => {
  return <Button type="primary">Hello World</Button>
}

export default HelloWorldOverlay
