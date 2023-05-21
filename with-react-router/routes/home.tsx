import { useNavigate } from "react-router-dom"

export const Home = () => {
  const navigation = useNavigate()

  const onNextPage = (): void => {
    navigation("/about")
  }

  return (
    <div style={{ padding: 16 }}>
      <span>Home page</span>
      <button onClick={() => navigation("/about")}>About</button>
      <button onClick={() => navigation("/lazy")}>Lazy</button>
    </div>
  )
}
