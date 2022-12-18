import { ConfigProvider } from "antd"
import type { ReactNode } from "react"
import { StyleProvider } from "@ant-design/cssinjs";

export const ThemeProvider = ({ children = null as ReactNode }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#a1701d"
      }
    }}>
      <StyleProvider container={document.querySelector("plasmo-csui").shadowRoot}>
        {children}
      </StyleProvider>
  </ConfigProvider>
)
