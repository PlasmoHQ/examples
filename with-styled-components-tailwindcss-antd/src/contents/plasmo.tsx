import { StyleProvider } from "@ant-design/cssinjs"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import type { MenuProps } from "antd"
import { Button, ConfigProvider, Dropdown, message, Space, Tooltip } from "antd"
import cssText from "data-text:~style.css"
import type {
  PlasmoCSConfig,
  PlasmoCSUIProps,
  PlasmoGetInlineAnchor
} from "plasmo"

import ButtonGroup from "~components/ButtonGroup/ButtonGroup"
import ButtonItem from "~components/ButtonGroup/ButtonItem"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

// export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
//   document.querySelector(`[href="/#pricing"]`)
export const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector("#plasmo-inject")

export const getShadowHostId = () => "plasmo-demo"

const styleElement = document.createElement("style")

const styleCache = createCache({
  key: "panda-content-style-cache",
  prepend: true,
  container: styleElement
})

export const getStyle = () => {
  // If you don't use TailwindCSS, you can comment it out (styleElement.textContent = TailwindCSS)
  // Antd style exception due to use of TailwindCSS, you can comment it and import the style.css
  // styleElement.textContent = TailwindCSS

  // import tailwindCSS from "data-text:~tailwindCSS.css"
  // styleElement.textContent = tailwindCSS

  // import cssText from "data-text:~style.css"
  // styleElement.textContent = cssText
  styleElement.textContent = cssText

  return styleElement
}

const PlasmoOverlay = ({ anchor }: PlasmoCSUIProps) => {
  console.log("anchor: ", anchor.element.nextElementSibling?.shadowRoot)

  const shadowRoot = anchor.element.nextElementSibling?.shadowRoot

  const items: MenuProps["items"] = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
      key: "0"
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
      key: "1"
    },
    {
      type: "divider"
    },
    {
      label: "3rd menu item（disabled）",
      key: "3",
      disabled: true
    }
  ]

  const [messageApi, contextHolder] = message.useMessage()

  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message"
    })
  }

  /**
   * Notice:
   * ConfigProvider and StyleProvider used by Antd
   * CacheProvider used by styled-component
   */

  return (
    <ConfigProvider getPopupContainer={() => shadowRoot as any}>
      <StyleProvider container={shadowRoot}>
        <CacheProvider value={styleCache}>
          <div
            style={{ background: "#fff", padding: "20px" }}
            className="container bg-white shadow-lg p-10 text-black"
            id="plasmo-demo-container">
            <div className="title text-black m-4">Styled-Components Demo</div>
            <div>
              <ButtonGroup>
                <ButtonItem
                  isSelect={true}
                  title={"What is your name"}
                  desc={"My name is Jack"}
                />
                <ButtonItem
                  isSelect={false}
                  title={"What is your name"}
                  desc={"My name is Mike"}
                />
              </ButtonGroup>
            </div>
            <div className="title text-black m-4">Antd Demo</div>
            <div>
              <Tooltip placement="top" title="Hello">
                <Button type="primary">Hover here</Button>
              </Tooltip>
            </div>
            <br />
            <div>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>Click here</Space>
                </a>
              </Dropdown>
            </div>
            <br />
            <div>
              {contextHolder}
              <Button type="primary" onClick={success}>
                Success
              </Button>
            </div>
          </div>
        </CacheProvider>
      </StyleProvider>
    </ConfigProvider>
  )
}

export default PlasmoOverlay
