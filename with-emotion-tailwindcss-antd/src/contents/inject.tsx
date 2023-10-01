import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}

export const getRootContainer = () =>
  new Promise((resolve) => {
    const checkInterval = setInterval(() => {
      const id = "plasmo-inject"
      if (document.querySelector(`#${id}`)) {
        clearInterval(checkInterval)
        return
      }

      const root = document.querySelector(`[href="/#pricing"]`)

      const mountDiv = document.createElement("div")
      mountDiv.id = "plasmo-inject"

      root?.append(mountDiv)

      clearInterval(checkInterval)
      resolve(mountDiv)
    }, 137)
  })

const Inject = () => {
  return <></>
}

export default Inject
