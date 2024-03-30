function FirefoxIndexPopup() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "azure",
        padding: 16
      }}>
      <h2>
        Welcome to your{" "}
        <a href="https://www.plasmo.com" target="_blank">
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      THIS IS FIREFOX POPUP
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default FirefoxIndexPopup
