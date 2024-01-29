import Ajv from "ajv"
import type { PlasmoCSConfig } from "plasmo"

import expectedBlogRequest from "~assets/expected-blog.json"
import { getTestFunction } from "~contents-helpers/get-test-function"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"],
  run_at: "document_start",
  world: "MAIN"
}

const runBasicTests = () => {
  const test = null as any

  test("Some valid examples from the main world", (t) => {
    t.notOk(true == ![], "true == ![]")
    // @ts-ignore due to this always being false
    t.notOk(true == [], "true == []")
    t.ok(
      "b" + "a" + +"a" + "a" === "baNaNa",
      '"b" + "a" + +"a" + "a" === "baNaNa"'
    )
    t.notOk(Object.is(-0, 0), "Object.is(-0, 0)")
    t.ok(-0 === 0, "-0 === 0")
    t.end()
  })

  test("A test that should fail, for testing purposes", (t) => {
    t.isEqual(true, false, "true should equal false")
    t.end()
  })
}

/**
 * This function intercepts the fetch request for the blog.json file and ensures that it is what we expect.
 * You could use this test as a canary to inform you of any changes to the blog.json type, if you were to
 * modify the response.
 */
const replaceFetch = () => {
  const nativeFetch = window.fetch
  window.fetch = (...args: any[]) =>
    new Promise<Response>((resolve, reject) => {
      nativeFetch(...(args as [RequestInfo, RequestInit]))
        .then((result) => {
          if (args[0].includes("blog.json")) {
            const test = getTestFunction()

            const resultClone = result.clone()

            // this test passes as of 19/12/2023, but it can fail if the structure of the blog.json file changes.
            test("testing the blog.json response", (t) => {
              t.plan(4)
              t.ok(result.ok, "result.ok should be true")
              t.ok(
                result?.headers
                  ?.get("content-type")
                  ?.includes("application/json"),
                "content-type should be application/json"
              )

              resultClone.json().then((res) => {
                const ajv = new Ajv({
                  allErrors: true
                })

                const validate = ajv.compile(expectedBlogRequest)

                const valid = validate(res)

                t.ok(valid, "json should match the expected schema")

                t.end()
              })
            })
            resolve(result)
          } else {
            resolve(result)
          }
        })
        .catch((err: any) => reject(err))
    })
}

runBasicTests()
replaceFetch()
