import Hero from "./components/Hero"
import Highlights from "./components/Highlight"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar/>
        <Hero/>
        <Highlights/>
      </main>
    </>
  )
}

export default App
