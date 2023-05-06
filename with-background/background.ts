import { generateMnemonic } from "bip39"

console.log(
  "Live now; make now always the most precious time. Now will never come again."
)

chrome.action.onClicked.addListener(() => {
  console.log(`action clicked: ${generateMnemonic()}`)
})

chrome.commands.onCommand.addListener((command) => {
  if (command === "test") {
    console.log(`test command: ${generateMnemonic()}`)
  }
})
