import {
  doc,
  DocumentData,
  DocumentSnapshot,
  getDoc,
  onSnapshot,
  setDoc
} from "firebase/firestore"
import { useCallback, useEffect, useMemo, useState } from "react"

import { useFirebase } from "~firebase/hook"

export const useFirestoreDoc = <T = any>(docPath: string) => {
  const { firestore } = useFirebase()
  const [data, _setData] = useState<T>()
  const [isReady, setIsReady] = useState(false)

  const docRef = useMemo(() => {
    if (!firestore || !docPath) {
      return null
    }

    return doc(firestore, docPath)
  }, [firestore, docPath])

  useEffect(() => {
    if (!docRef) {
      _setData(undefined)
      return
    }

    async function init(_snapshot = null as DocumentSnapshot<DocumentData>) {
      try {
        const snapshot = _snapshot || (await getDoc(docRef))
        _setData(snapshot.data() as T)
        setIsReady(true)
      } catch (error) {
        // TODO: Beacon this
        console.error(error)
      }
    }

    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      init(snapshot)
    })

    return () => {
      unsubscribe()
    }
  }, [docRef])

  const setData = useCallback(
    (_data: T) => {
      if (!docRef) {
        return
      }

      return setDoc(docRef, _data)
    },
    [docRef]
  )

  return {
    data,
    setData,
    isReady
  }
}
