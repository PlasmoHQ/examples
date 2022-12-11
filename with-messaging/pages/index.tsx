import { sendViaRelay } from "@plasmohq/messaging"

function IndexPage() {
  // This is the same as the `useEffect` hook in React

  return (
    <div>
      <button
        onClick={async () => {
          const hydrated = await sendViaRelay({
            name: "hydrate-options"
          })

          console.log(hydrated)
        }}>
        Hydrate options
      </button>
    </div>
  )
}

export default IndexPage
