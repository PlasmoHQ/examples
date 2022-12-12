import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

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
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { localStorage } from "redux-persist-webextension-storage"

import counterSlice from "~counter-slice"

// Here you can add all your reducers
const combinedReducers = combineReducers({
    counter: counterSlice
});

const persistConfig = {
    key: "root",
    version: 1,
    storage: localStorage
}

// TODO: Fix persistReducer so it doesn't break the types
const persistedReducer = persistReducer(persistConfig, combinedReducers)

// Until persistReducer is fixed, we need to use this mock store to get the types
const mockStore = configureStore({
    reducer: combinedReducers
})

// @ts-ignore
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
}) as typeof mockStore;

export const persistor = persistStore(store)

// This is what makes Redux sync properly with multiple pages
// Open your extension's options page and popup to see it in action
new Storage().watch({
    [`persist:${persistConfig.key}`]: () => {
        persistor.resync()
    }
})

// Get the types from the mock store
export type RootState = ReturnType<typeof mockStore.getState>;
export type AppDispatch = typeof mockStore.dispatch;

// Export the hooks with the types from the mock store
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
