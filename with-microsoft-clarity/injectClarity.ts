type InjectClarityType = {
  url: string
  config: {
    projectId: string
    upload: string
    expire: number
    cookies: string[]
    track: boolean
    lean: boolean
    content: boolean
    dob: number
  }
  clarityKey: string
}

export const injectClarity = (data: InjectClarityType) => {
  const { url, config, clarityKey } = data

  // this code serves the purpose of the original tracking code that you get from clarity
  window[clarityKey] = function () {
    ;(window[clarityKey].q = window[clarityKey].q || []).push([
      window,
      document,
      clarityKey,
      "script",
      config.projectId
    ])
  }

  // this section then serves the purpose of the js file that the tracking code requests
  // e.g. https://www.clarity.ms/tag/examplethisisnotreal
  const sync = (): void => {
    const image = new Image()
    image.src = "https://c.clarity.ms/c.gif"
  }

  if (document.readyState === "complete") {
    sync()
  } else {
    window.addEventListener("load", sync)
  }
  if (window[clarityKey].v || window[clarityKey].t) {
    return window[clarityKey]("event", clarityKey, `dup.${config.projectId}`)
  }

  window[clarityKey].t = true

  // this creates a script tag and injects it into the page, with the local clarity.js file
  const scriptElement = document.createElement("script")
  scriptElement.setAttribute("type", "text/javascript")
  scriptElement.setAttribute("async", "true")
  scriptElement.setAttribute("src", url)
  scriptElement.setAttribute("id", "ms_clarity")
  const head = document.head
  head.parentNode.insertBefore(scriptElement, head)

  // this callback gets the ball rolling with clarity
  scriptElement.onload = (): void => {
    window[clarityKey]("start", config)
    window[clarityKey].q.unshift(window[clarityKey].q.pop())
    window[clarityKey]("set", "C_IS", "0")
  }

  return undefined
}
