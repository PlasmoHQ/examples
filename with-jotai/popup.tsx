import { Provider } from "jotai"

import CounterView from "~counter"

function IndexPopup() {
  return (
    <Provider>
      <CounterView />
    </Provider>
  )
}

export default IndexPopup
