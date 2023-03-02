import type {PlasmoMessaging} from "@plasmohq/messaging"
import {createClient} from "@propelauth/javascript";

const client = createClient({
    authUrl: process.env.PLASMO_PUBLIC_AUTH_URL,
    enableBackgroundTokenRefresh: true
})
const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    const authInfo = await client.getAuthenticationInfoOrNull();

    // If you want to make a fetch to an external API, pass the access token in
    //   through the Authorization header, like:
    // Authorization: Bearer ACCESS_TOKEN
    // const message = await querySomeApi(req.body.id, authInfo.accessToken)

    res.send({
        authInfo
    })
}

export default handler

