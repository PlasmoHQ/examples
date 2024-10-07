import type { PlasmoCSConfig } from "plasmo";
import { scope as sentryScope } from "./sentry";

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"],
};

// do something with scope here
sentryScope.setTag("content-script", "true");

// all code that could error should be placed here
try {
  window.addEventListener("load", () => {
    console.log(
      "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true.",
    );

    document.body.style.background = "pink";
  });
} catch (err) {
  sentryScope.captureException(err);
}
