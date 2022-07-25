import { NavigateFunction, useNavigate } from "react-router-dom"

export const About = () => {
  const navigation: NavigateFunction = useNavigate()

  const onNextPage = (): void => {
    navigation("/")
  }

  return (
    <div style={{ padding: 16 }}>
      <span>About page</span>
      <button onClick={onNextPage}>Home</button>
    </div>
  )
}
