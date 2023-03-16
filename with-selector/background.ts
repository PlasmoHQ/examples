import { init } from "@plasmohq/selector/background"

console.log(process.env.PLASMO_PUBLIC_ITERO_SELECTOR_MONITOR_ID)

init({
  monitorId: process.env.PLASMO_PUBLIC_ITERO_SELECTOR_MONITOR_ID
})
