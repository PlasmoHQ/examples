import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  RESYNC,
  persistReducer,
  persistStore
} from "@plasmohq/redux-persist"
import { Storage } from "@plasmohq/storage"
import { configureStore } from "@reduxjs/toolkit"
import { localStorage } from "redux-persist-webextension-storage"

import counterSlice from "~counter-slice"

const rootReducer = counterSlice

const persistConfig = {
  key: "root",
  version: 1,
  storage: localStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          RESYNC
        ]
      }
    })
})
export const persistor = persistStore(store)

// This is what makes Redux sync properly with multiple pages
// Open your extension's options page and popup to see it in action
new Storage().watch({
  [`persist:${persistConfig.key}`]: () => {
    persistor.resync()
  }
})
