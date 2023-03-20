import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
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

console.log(
  "ENV vars without the PLASMO_PUBLIC_ prefix are not injected and so will be undefined:",
  process.env.CODE
)
