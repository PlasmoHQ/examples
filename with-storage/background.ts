import { SecureStorage } from "@plasmohq/storage/secure"
import assert from "assert"

const PASSWORD = "password"
const TEST_KEY = "ship"
const TEST_DATA = "1701"

const main = async () => {
  const storage = new SecureStorage({ area: "local" })

  await storage.setPassword(PASSWORD)

  await storage.set(TEST_KEY, TEST_DATA)

  const foo = await storage.get(TEST_KEY)

  assert(foo === TEST_DATA, "ENCRYPTED FAILED")

  console.log(await storage.getAll())

  await storage.clear()
}

main()
