import * as _Sentry from "@sentry/react"
import { useState } from "react"

const Sentry = _Sentry

// Sentry can be initialized here because this is a tab/popup and is not a shared environment
// NOTE: Please be wary of this as it will include code that lazy loads sentry code. This could
// result in the stores rejecting your submission.
Sentry.init({
  dsn: process.env.PLASMO_PUBLIC_SENTRY_DSN
})

function IndexNewtab() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default Sentry.withProfiler(IndexNewtab)
