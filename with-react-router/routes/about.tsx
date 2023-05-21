import { useNavigate } from "react-router-dom"

export const About = () => {
  const navigation = useNavigate()

  return (
    <div style={{ padding: 16 }}>
      <span>About page</span>
      <button onClick={() => navigation("/")}>Home</button>
      <button onClick={() => navigation("/lazy")}>Lazy</button>
    </div>
  )
}
