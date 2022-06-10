import { useEffect, useState } from "react"

function IndexPopup() {
  const [userInfo, setUserInfo] = useState<chrome.identity.UserInfo>(null)

  useEffect(() => {
    chrome.identity.getProfileUserInfo((data) => {
      if (data.email && data.id) {
        setUserInfo(data)
      }
    })

    chrome.identity.getAuthToken(null, (data) => {
      console.log(data)
    })
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      Your email is: <b>{userInfo?.email}</b>
      <button
        disabled={!userInfo}
        onClick={() => {
          window.open(
            `${process.env.PLASMO_PUBLIC_STRIPE_LINK}?client_reference_id=${
              userInfo.id
            }&prefilled_email=${encodeURIComponent(userInfo.email)}`,
            "_blank"
          )
        }}>
        Subscribe to Paid feature
      </button>
    </div>
  )
}

export default IndexPopup
