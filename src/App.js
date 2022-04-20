import React from "react"
import Intro from "./components/Intro.jsx"
import About from "./components/About.jsx"
import Interests from "./components/Interests.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <div className="app">
      <Intro />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
