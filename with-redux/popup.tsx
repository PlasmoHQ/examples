import { Provider } from "react-redux"

import { PersistGate } from "@plasmohq/redux-persist/integration/react"

import { CounterView } from "~counter"
import { persistor, store } from "~store"

function IndexPopup() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CounterView />
      </PersistGate>
    </Provider>
  )
}

export default IndexPopup
