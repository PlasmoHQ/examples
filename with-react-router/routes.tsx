import { Route, Routes } from "react-router-dom"

import { About } from "~pages/about"
import { Home } from "~pages/home"

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
)
