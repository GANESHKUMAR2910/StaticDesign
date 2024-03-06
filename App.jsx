import Sidebar from "./Sidebar"
import './App.css'
import MenuBar from "./MenuBar"
import NavBar from "./NavBar"

function App() {

  return (
    <div className="main">
      <MenuBar/>
      <NavBar/>
      <Sidebar/>  
    </div>
  )
}

export default App
