import { useState } from "react"

import * as styles from "./styles.css"

function IndexPopup() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>vanilla-extract Example</h1>
      <div className={styles.counter}>{count}</div>
      <button
        className={styles.button}
        onClick={() => setCount((prev) => prev + 1)}>
        Click me!
      </button>
    </div>
  )
}

export default IndexPopup
