import { useEffect } from "react"

function IndexPage() {
  useEffect(() => window.clientHub.connect(), [])

  return (
    <div style={{ marginTop: "50px" }}>
      Tab A
      <ul>
        <li>
          <a href="/client-hub-a" target="_blank">
            Open Tab A
          </a>
        </li>
        <li>
          <a href="/client-hub-b" target="_blank">
            Open Tab B
          </a>
        </li>
      </ul>
      <div>
        <button
          onClick={async () => {
            window.clientHub.send("This is a message from Tab A")
          }}>
          Send Message From A
        </button>
      </div>
    </div>
  )
}

export default IndexPage
