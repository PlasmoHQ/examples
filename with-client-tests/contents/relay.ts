import { relayMessage } from "@plasmohq/messaging";
import type { PlasmoCSConfig } from "plasmo";

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"],
  run_at: "document_start",
};

relayMessage({
  name: "test-handler",
});
