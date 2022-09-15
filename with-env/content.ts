import type { PlasmoContentScript } from "plasmo"

export const config: PlasmoContentScript = {
  matches: ["$PLASMO_PUBLIC_SITE_URL/"]
}

if (process.env.NODE_ENV === "development") {
  console.log("This is a development build")
}

if (process.env.NODE_ENV === "production") {
  console.log("This is a production build")
}

console.log(
  "Shield Frequency - SHHHH:",
  process.env.PLASMO_PUBLIC_SHIELD_FREQUENCY
)
