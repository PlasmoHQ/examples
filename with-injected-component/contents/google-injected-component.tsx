import plasmoLogo from "data-base64:~assets/plasmo-logo.png"
import cssText from "data-text:~/contents/google-injected-component.css"
import type {
  PlasmoContentScript,
  PlasmoGetInlineAnchor,
  PlasmoMountShadowHost
} from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["https://www.google.com/"]
}
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}
export const getShadowHostId = () => "plasmo-injected-component-example"

const bodyWidthStyle = document.createElement("style")
bodyWidthStyle.setAttribute("id", "injected-bodyWidthStyle")
bodyWidthStyle.textContent = "body{max-width: calc(100% - 400px)}"
document.body.appendChild(bodyWidthStyle)

const documentBody = document.querySelector("body")

export const getInlineAnchor: PlasmoGetInlineAnchor = async () => documentBody

export const mountShadowHost: PlasmoMountShadowHost = ({
  shadowHost,
  anchor
}) => {
  anchor.element.appendChild(shadowHost)
  shadowHost.setAttribute("style", "position: absolute; top: 0; right: 0")
}

const GoogleInjectedComponent = () => {
  return (
    <div className="injected-component-container">
      <img src={plasmoLogo} />
      <p className="plasmo-text">
        The Easiest Way to Build, Test, and Ship browser extensions
      </p>
    </div>
  )
}

export default GoogleInjectedComponent
