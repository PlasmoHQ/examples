export {}

function tokenRegistered(registration_id) {
  // The token can be used to send messages specifically to this
  // user. So you can store it server side and when you need to send
  // a message, you can do so.
  console.log("Registered: ", registration_id)
  if (chrome.runtime.lastError) {
    console.log("failed")
    return
  }
}

// You can find this ID by going to your Firebase project settings
// and going to the "Cloud Messaging" tab.
chrome.gcm.register(["<SENDER ID HERE>"], tokenRegistered)

// This will execute whenever FCM sends a message to this extension.
// Even when the service worker is inactive
chrome.gcm.onMessage.addListener((message) => {
  console.log("message", message)
})

/*
You can test this out using the following command in the terminal:

You can find your API key by going to your Firebase project settings
and going to the "Cloud Messaging" tab. Will be in the "legacy API server key" section

User token will be the token you get from the registration_id

curl -X POST --header "Authorization: key=<Your API Key>” \
    --Header "Content-Type: application/json" \
    https://fcm.googleapis.com/fcm/send \
    -d "{\"to\”:\”<User token>\”,\”notification\":{\"title\":\"Hello\",\"body\":\"Yellow\"}}"
*/
