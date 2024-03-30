// Optional, this is just an example of extending the window object for fun and profit. Change it however you want for your own interface
interface Window {
  relay: {
    description: string
    tryRelay: () => Promise<string>
  }
  clientHub: {
    description: string
    connect: () => void
    send: (message: string) => void
    port?: chrome.runtime.Port
  }
}
