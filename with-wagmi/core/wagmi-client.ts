import { configureChains, createClient, defaultChains } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"
import { publicProvider } from "wagmi/providers/public"

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider()
])

type Client = ReturnType<typeof createClient>

// Set up client
export const client: Client = createClient({
  autoConnect: true,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true
      }
    })
  ],
  provider,
  webSocketProvider
})
