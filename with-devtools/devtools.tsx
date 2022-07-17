import panelIcon from "url:~/assets/icon512.png"
import fontPickerHTML from "url:~/panels/font-picker/index.html"
import fontPropertiesHTML from "url:~/panels/font-properties/index.html"

chrome.devtools.panels.create("Font Picker", panelIcon, fontPickerHTML)
chrome.devtools.panels.elements.createSidebarPane(
  "Font Properties",
  function (sidebar) {
    sidebar.setPage(fontPropertiesHTML)
    sidebar.setHeight("8ex")
  }
)

function IndexDevtools() {
  return (
    <div>
      <h2>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h2>
    </div>
  )
}

export default IndexDevtools
