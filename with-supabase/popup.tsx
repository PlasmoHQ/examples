import { useState } from "react"

import { supabase } from "~core/store"

function IndexPopup() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (
    type: "LOGIN" | "SIGNUP",
    username: string,
    password: string
  ) => {
    try {
      const { error, user } =
        type === "LOGIN"
          ? await supabase.auth.signIn({ email: username, password })
          : await supabase.auth.signUp({ email: username, password })
      if (error) {
        alert("Error with auth: " + error.message)
      } else if (!user)
        alert("Signup successful, confirmation mail should be sent soon!")
    } catch (error) {
      console.log("error", error)
      alert(error.error_description || error)
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <div className="mb-4">
        <label className="font-bold text-grey-darker block mb-2">Email</label>
        <input
          type="text"
          placeholder="Your Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="font-bold text-grey-darker block mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <a
          onClick={(e) => {
            e.preventDefault()
            handleLogin("SIGNUP", username, password)
          }}
          className="bg-indigo-700 hover:bg-teal text-white py-2 px-4 rounded text-center transition duration-150 hover:bg-indigo-600 hover:text-white">
          Sign up
        </a>
        <a
          onClick={(e) => {
            e.preventDefault()
            handleLogin("LOGIN", username, password)
          }}
          className="border border-indigo-700 text-indigo-700 py-2 px-4 rounded w-full text-center transition duration-150 hover:bg-indigo-700 hover:text-white">
          Login
        </a>
      </div>
    </div>
  )
}

export default IndexPopup
