import { MantineProvider } from '@mantine/core'
import type { EmotionCache } from '@mantine/core'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  emotionCache?: EmotionCache
}

export const ThemeProvider = ({ emotionCache, children }: Props) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={emotionCache}>
      {children}
    </MantineProvider>
  )
}
