import { Route, Routes } from "react-router-dom"

import { About } from "./about"
import { Home } from "./home"

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
)
