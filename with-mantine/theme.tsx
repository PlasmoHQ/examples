import { createTheme, MantineProvider } from "@mantine/core"

const theme = createTheme({})
export const ThemeProvider = ({ children }) => {
  return (
    <MantineProvider
      //https://github.com/PlasmoHQ/plasmo/issues/776#issuecomment-1811072653
      cssVariablesSelector=":host"
      theme={theme}>
      {children}
    </MantineProvider>
  )
}
