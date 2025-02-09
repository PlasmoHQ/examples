import { OAuth2Client } from "google-auth-library"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
  apiVersion: "2023-10-16"
})

// Verify the Google JWT and get the user's info
export const getUserInfo = async (authHeader: string) => {
  const [type, accessToken] = authHeader.split(" ")

  if (type !== "Bearer" || !accessToken) {
    throw new Error("Invalid or no access token")
  }

  const client = new OAuth2Client()
  client.setCredentials({
    access_token: accessToken
  })

  const userInfoRes = await client.request<{
    id: string
    email: string
    name: string
  }>({
    url: "https://www.googleapis.com/oauth2/v1/userinfo"
  })

  return userInfoRes.data
}

export const getSubsciption = async (email: string) => {
  const customerResp = await stripe.customers.list({
    email,
    limit: 1
  })

  if (customerResp.data.length === 0) {
    throw new Error(`No customer data found for ${email}`)
  }

  const [customer] = customerResp.data

  const subscriptionResp = await stripe.subscriptions.list({
    customer: customer.id
  })

  if (subscriptionResp.data.length === 0) {
    throw new Error(`No subscription found for customer id ${customer.id}`)
  }

  return subscriptionResp.data[0]
}
