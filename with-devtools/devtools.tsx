import fontPickerHTML from "url:./panels/font-picker/index.html"
import fontPropertiesHTML from "url:./panels/font-properties/index.html"

chrome.devtools.panels.create(
  "Font Picker",
  null,
  // See: https://github.com/PlasmoHQ/plasmo/issues/106#issuecomment-1188539625
  fontPickerHTML.split("/").pop()
)

chrome.devtools.panels.elements.createSidebarPane(
  "Font Properties",
  function (sidebar) {
    sidebar.setPage(fontPropertiesHTML.split("/").pop())
  }
)

function IndexDevtools() {
  return (
    <h2>
      Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
    </h2>
  )
}

export default IndexDevtools
