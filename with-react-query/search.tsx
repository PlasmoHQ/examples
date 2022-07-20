import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

type User = {
  name: string
  followers: number
}

const Search = () => {
  const [username, setUsername] = useState<string>()

  const { status, error, data } = useQuery<boolean, Error, User>(
    ["githubUser", username],
    async ({ queryKey }) => {
      const res = await fetch(`https://api.github.com/users/${queryKey[1]}`)
      if (res.status === 200) {
        return res.json()
      } else if (res.status === 404) {
        throw new Error("User not found")
      } else {
        throw new Error("Failed to fetch user")
      }
    },
    { enabled: Boolean(username) }
  )

  return (
    <div
      style={{
        padding: "10px"
      }}>
      <input
        type="text"
        placeholder="Github username search"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {status === "loading" && <p>Loading...</p>}

      {status === "error" && <p>Error: {error.message}</p>}

      {status === "success" && (
        <div>
          <p>{data.name}</p>
          <p>{data.followers} followers</p>
        </div>
      )}
    </div>
  )
}

export default Search
