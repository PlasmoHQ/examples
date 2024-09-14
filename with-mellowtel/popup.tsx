
import Mellowtel from "mellowtel"

const Popup: React.FC = () => {


  const handleMellowtelSettings = async () => {
    const mellowtel = new Mellowtel(process.env.PLASMO_PUBLIC_MELLOWTEL)
    const link = await mellowtel.generateSettingsLink()
    chrome.tabs.create({ url: link })
  }

  return (
    <div>
          <button
            onClick={handleMellowtelSettings}>
            Change Mellowtel Settings
          </button>
    </div>
  )
}

export default Popup
