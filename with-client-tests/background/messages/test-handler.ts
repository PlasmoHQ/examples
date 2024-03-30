import type { PlasmoMessaging } from "@plasmohq/messaging"

type testResults = {
  id: number
  name: string
  todo: boolean
  type: string
  skip?: boolean
  actual?: any
  expected?: any
  error?: {
    message: string
    stack: string
  }
}

export type TestRequest = {
  test: testResults
}

export const handler: PlasmoMessaging.MessageHandler<TestRequest, any> = async (
  req,
  res
) => {
  const { test } = req.body
  // TODO: Request to some server to report the failure
  console.log(test)
  res.send({
    message: "Test received"
  })
}

export default handler
