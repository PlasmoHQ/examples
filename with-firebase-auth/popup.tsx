import { useFirebase } from "~firebase/hook"

export default function IndexPopup() {
  const { user, isLoading, onLogin, onLogout } = useFirebase()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: "300px"
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

      <footer>Crafted by @PlasmoHQ</footer>
    </div>
  )
}
