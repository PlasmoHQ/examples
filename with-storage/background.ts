import { Storage } from "@plasmohq/storage"
import { SecureStorage } from "@plasmohq/storage/secure"
import assert from "assert"

const PASSWORD = "password"
const TEST_KEY = "ship"
const TEST_DATA = "1701"

async function testSecureStorage() {
  const storage = new SecureStorage({ area: "local" })

  await storage.setPassword(PASSWORD)

  await storage.set(TEST_KEY, TEST_DATA)

  const foo = await storage.get(TEST_KEY)

  assert(foo === TEST_DATA, "ENCRYPTION FAILED")

  console.log(await storage.getAll())

  await storage.clear()
}

async function testBaseStorage() {
  const storage = new Storage()
  await storage.clear()

  storage.watch({
    hello: (c) => {
      console.log("hello", c.newValue)
    },
    "serial-number": (c) => {
      console.log("serial-number", c.newValue)
    },
    make: (c) => {
      console.log("make", c.newValue)
    }
  })

  await storage.set("hello", 1)
  await storage.set("serial-number", 1701)
  await storage.set("make", "plasmo-corp")

  await storage.set("hello", 2)
  await storage.set("serial-number", 8451)
  await storage.set("make", "PlasmoHQ")
}

const main = async () => {
  await testSecureStorage()
  await testBaseStorage()
}

main()
