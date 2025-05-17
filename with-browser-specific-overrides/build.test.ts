import { exec } from "child_process"
import { promisify } from "util"
import { assert } from "chai"

describe("with-browser-specific-overrides", () => {
  const pexec = promisify(exec)

  it("contains no overrides or specific settings if not targeted", async () => {
    await pexec("pnpm build --target=firefox-mv3")
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const manifest = require("./build/firefox-mv3-prod/manifest.json")
    const commands = manifest.commands
    assert.isDefined(commands)
    assert.isDefined(commands["test"])
    assert.isUndefined(commands["test-chrome"])
    assert.isUndefined(manifest.overrides)
  }).timeout(10000)

  it("contains browser specific settings if targeted", async () => {
    await pexec("pnpm build --target=chrome-mv3")
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const manifest = require("./build/chrome-mv3-prod/manifest.json")
    const commands = manifest.commands
    assert.isDefined(commands)
    assert.isDefined(commands["test"])
    assert.isDefined(commands["test-chrome"])
    assert.isUndefined(manifest.overrides)
  }).timeout(10000)
})
