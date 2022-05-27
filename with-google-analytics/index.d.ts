declare namespace NodeJS {
  interface ProcessEnv {
    PLASMO_PUBLIC_GTAG_ID?: string
  }
}

interface Window {
  dataLayer: Array
  gtag: (a: string, b: any, c?: any) => void
}
