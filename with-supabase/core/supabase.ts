import { createClient } from "@supabase/supabase-js"

import {
  Storage
} from "@plasmohq/storage"

const storage = new Storage()

export const supabase = createClient(
  process.env.PLASMO_PUBLIC_SUPABASE_URL,
  process.env.PLASMO_PUBLIC_SUPABASE_KEY,
  {
    auth: {
      storage: {
        getItem(key) {
          return storage.get(key)
        },
        setItem(key, data) {
          return storage.set(key, data)
        },
        removeItem(key) {
          return storage.remove(key)
        }
      },
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    }
  }
)
