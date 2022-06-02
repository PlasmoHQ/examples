import { useAccount, useConnect, useEnsName } from "wagmi"
import { InjectedConnector } from "wagmi/connectors/injected"

export function Profile() {
  const { data: account } = useAccount()
  const { data: ensName } = useEnsName({ address: account.address })
  const { connect } = useConnect({
    connector: new InjectedConnector()
  })

  if (account) return <div>Connected to {ensName ?? account.address}</div>

  return <button onClick={() => connect()}>Connect Wallet</button>
}
