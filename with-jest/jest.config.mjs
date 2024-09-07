/**
 * @type {import('@jest/types').Config.InitialOptions}
 */

const config = {
  setupFiles: ["jest-webextension-mock"],
  testRegex: ["^.+\\.test.tsx?$"],
  moduleNameMapper: {
    "~(.*)": "<rootDir>/$1",
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
}

export default config
