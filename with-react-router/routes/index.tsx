import { Route, Routes } from "react-router-dom"

import LazyDemo from "~views/demo"

import { About } from "./about"
import { Home } from "./home"

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/lazy" element={<LazyDemo />} />
  </Routes>
)
