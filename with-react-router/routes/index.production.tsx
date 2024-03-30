import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import { About } from "./about"
import { Home } from "./home"

const LazyDemo = lazy(() => import("~views/demo"))

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route
      path="/lazy"
      element={
        <Suspense>
          <LazyDemo />
        </Suspense>
      }
    />
  </Routes>
)
