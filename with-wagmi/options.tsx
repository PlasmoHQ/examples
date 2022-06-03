import { WagmiConfig } from "wagmi"

import { Profile } from "~features/profile"
import { client } from "~features/wagmi-client"

const IndexOptions = () => {
  return (
    <WagmiConfig client={client}>
      <div
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column"
        }}>
        <Profile />
      </div>
    </WagmiConfig>
  )
}

export default IndexOptions
