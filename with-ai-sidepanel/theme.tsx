import ConfigProvider from "antd/es/config-provider"
import "@ant-design/v5-patch-for-react-19"
import type { ReactNode } from "react"

export const ThemeProvider = ({ children = null as ReactNode }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#a1701d"
      }
    }}>
    {children}
  </ConfigProvider>
)
