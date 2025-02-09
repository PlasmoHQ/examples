import useSWR from "swr"

import { callAPI } from "~core/premium-api"
import { UserInfoProvider, useUserInfo } from "~core/user-info"

const PremiumFeatureButton = () => {
  const { data, error } = useSWR<{ active: boolean }>(
    "/api/check-subscription",
    (uri: string) => callAPI(uri, { method: "GET" })
  )
  const userInfo = useUserInfo()

  if (!!error || !data?.active) {
    return (
      <button
        disabled={!userInfo}
        onClick={async () => {
          chrome.identity.getAuthToken(
            {
              interactive: true
            },
            (token) => {
              if (!!token) {
                window.open(
                  `${
                    process.env.PLASMO_PUBLIC_STRIPE_LINK
                  }?client_reference_id=${
                    userInfo.id
                  }&prefilled_email=${encodeURIComponent(userInfo.email)}`,
                  "_blank"
                )
              }
            }
          )
        }}>
        Subscribe to Paid feature
      </button>
    )
  }

  return (
    <button
      onClick={async () => {
        const data = await callAPI("/api/premium-feature", {
          method: "POST"
        })

        alert(data.code)
      }}>
      Calling Awesome Premium Feature
    </button>
  )
}

const EmailShowcase = () => {
  const userInfo = useUserInfo()

  return (
    <div>
      Your email is: <b>{userInfo?.email}</b>
    </div>
  )
}

function IndexPopup() {
  return (
    <UserInfoProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 16
        }}>
        <h1>
          Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
        </h1>
        <EmailShowcase />
        <PremiumFeatureButton />
      </div>
    </UserInfoProvider>
  )
}

export default IndexPopup
