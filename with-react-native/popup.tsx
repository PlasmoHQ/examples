import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        gap: 4
      }}>
      <TextInput
        value={data}
        onChangeText={setData}
        style={{
          borderWidth: 2,
          borderColor: "black"
        }}
      />
      <Button
        title="View Docs"
        onPress={() => {
          window.open("https://docs.plasmo.com", "_blank")
        }}
      />
      <Text>Crafted by @PlasmoHQ</Text>
    </View>
  )
}

export default IndexPopup
