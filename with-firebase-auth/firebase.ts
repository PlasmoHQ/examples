import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "TODO: Change me",
  authDomain: "TODO: Change me",
  projectId: "TODO: Change me",
  storageBucket: "TODO: Change me",
  messagingSenderId: "TODO: Change me",
  appId: "TODO: Change me"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
