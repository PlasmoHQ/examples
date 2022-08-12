import { createRequire } from "module"
import { pathsToModuleNameMapper } from "ts-jest"

const require = createRequire(import.meta.url)
const tsconfig = require("./tsconfig.json")

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */

const config = {
  testEnvironment: "jsdom",
  transform: {
    "\\.tsx?$": "ts-jest"
  },
  testRegex: "^.+\\.test.tsx?$",
  moduleFileExtensions: ["js", "ts", "tsx"],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, {
    prefix: "<rootDir>/"
  }),
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react-jsx"
      }
    }
  },
  setupFiles: ["jest-webextension-mock"]
}

export default config
