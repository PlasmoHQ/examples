import { useFirebase } from "~firebase/hook"
import { useFirestoreDoc } from "~firebase/use-firestore-doc"

export default function IndexNewtab() {
  const { user, isLoading, onLogin, onLogout } = useFirebase()

  // Create a test collection, with a hello document:
  const { data: enterpriseData, setData } = useFirestoreDoc<{
    serial: string
  }>("starships/enterprise")

  const { data: crewData, setData: setCrewData } = useFirestoreDoc<{
    name: string
  }>(user?.uid && `crews/${user.uid}`)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        gap: 4
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      {!user ? (
        <button onClick={() => onLogin()}>Log in</button>
      ) : (
        <button onClick={() => onLogout()}>Log out</button>
      )}
      <div>
        {isLoading ? "Loading..." : ""}
        {!!user ? (
          <div>
            Welcome to Plasmo, {user.displayName} your email address is{" "}
            {user.email}
          </div>
        ) : (
          ""
        )}
      </div>
      <h2>Ship serial number:</h2>
      <input
        value={enterpriseData?.serial || ""}
        onChange={(e) =>
          setData({
            serial: e.target.value
          })
        }
      />

      <br />
      <h3>Crew name:</h3>
      <input
        value={crewData?.name || ""}
        onChange={(e) =>
          setCrewData({
            name: e.target.value
          })
        }
      />

      <footer>Crafted by @PlasmoHQ</footer>
    </div>
  )
}
