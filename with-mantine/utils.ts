import type { MantineColorScheme } from "@mantine/core"

function getPlasmoShadowRoot() {
  return document.querySelector("plasmo-csui")?.shadowRoot
}

export function getPlasmoShadowContainer() {
  return getPlasmoShadowRoot()?.querySelector(
    "#plasmo-shadow-container"
  ) as HTMLElement
}

//see https://github.com/PlasmoHQ/plasmo/issues/652
export function injectCssText(cssText: string) {
  const plasmoCsui = getPlasmoShadowRoot()
  const style = document.createElement("style")
  style.textContent = cssText
  plasmoCsui.appendChild(style)
}

export function setMantineColorScheme(colorScheme: MantineColorScheme) {
  getPlasmoShadowContainer()?.setAttribute(
    "data-mantine-color-scheme",
    colorScheme
  )
}
