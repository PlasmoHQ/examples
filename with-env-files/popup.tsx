function IndexPopup() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      <a
        target="_blank"
        href="https://docs.plasmo.com/workflows#adding-environment-variables">
        with-env-files example extension
      </a>
      <p>Ship name: {process.env.PLASMO_PUBLIC_SHIP_NAME}</p>
    </div>
  )
}

export default IndexPopup
