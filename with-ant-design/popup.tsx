import { ProCard } from "@ant-design/pro-components"

function IndexPopup() {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 16 }}>
      <ProCard
        title="默认尺寸"
        extra="extra"
        tooltip="这是提示"
        style={{ maxWidth: 300 }}>
        <div>Card content</div>
        <div>Card content</div>
        <div>Card content</div>
      </ProCard>
    </div>
  )
}

export default IndexPopup
