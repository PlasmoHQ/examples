import Mellowtel from "mellowtel"
import type { PlasmoCSConfig } from "plasmo"

let mellowtel

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true,
  run_at: "document_start"
}
const start = async () => {
  mellowtel = new Mellowtel(process.env.PLASMO_PUBLIC_MELLOWTEL) //Change here with your configuration key
  const resp = await mellowtel.initContentScript()
  console.log("TEST", resp, mellowtel)
}

start()
