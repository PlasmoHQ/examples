import type { NextApiRequest, NextApiResponse } from "next"

import { getSubsciption, getUserInfo } from "./_common"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      throw new Error("Invalid request method")
    }

    const userInfo = await getUserInfo(req.headers.authorization)

    const subscription = await getSubsciption(userInfo.email)

    return res.status(200).json({ active: subscription.status === "active" })
  } catch (error) {
    return res.status(401).json({ success: false, error: error.message })
  }
}
