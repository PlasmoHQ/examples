declare namespace NodeJS {
  interface ProcessEnv {
    CRX_PUBLIC_KEY?: string
    STRIPE_PRIVATE_KEY?: string

    PLASMO_PUBLIC_STRIPE_LINK?: string
  }
}
