import { Route, Routes } from "react-router-dom"

import { DemoView } from "~views/demo"

import { About } from "./about"
import { Home } from "./home"

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    {process.env.NODE_ENV === "production" ? (
      <Route path="/lazy" lazy={() => import("./lazy-route")} />
    ) : (
      <Route path="/lazy" element={<DemoView />} />
    )}
  </Routes>
)
