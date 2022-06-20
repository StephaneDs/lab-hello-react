import "./App.css"
import Navbar from "./Components/NavBar"
import Header from "./Components/Header"
import Button from "./Components/Button"
import Cards from "./Components/Cards.jsx"

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navbar />
        <Header />
        <Button />
      </div>
      <div className="Cards">
        <Cards />
      </div>
    </div>
  )
}
export default App
