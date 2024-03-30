import { generateMnemonic } from "bip39"

console.log(
  "Live now; make now always the most precious time. Now will never come again."
)

chrome.action.onClicked.addListener(() => {
  console.log(`action clicked: ${generateMnemonic()}`)
})

/* Note if you're building for firefox or mv2 in general, chrome.action will be undefined so you have to do something like this:

@see https://stackoverflow.com/questions/70216500/chrome-action-is-undefined-migrating-to-v3-manifest

const handleClick = (tab) => {
  console.log("clicked", tab.id);
  if (!tab.id) throw new Error("tab id not found");
  chrome.tabs.sendMessage(tab.id, {
    name: "show-dialog"
  });
};

if (chrome.action != undefined) {
  chrome.action.onClicked.addListener(handleClick);
} else {
  chrome.browserAction.onClicked.addListener(handleClick);
}
*/


chrome.commands.onCommand.addListener((command) => {
  if (command === "test") {
    console.log(`test command: ${generateMnemonic()}`)
  }
})
