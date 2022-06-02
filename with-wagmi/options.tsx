import { WagmiConfig } from "wagmi"

import { Profile } from "~components/profile"
import { client } from "~core/wagmi-client"

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
