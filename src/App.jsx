import { Link, Route, Routes } from "react-router-dom"
import ContenedorCards from "./components/ContenedorCards"
import ContenedorDetalle from "./components/ContenedorDetalle"



function App() {
  return (
    <>  
    <Link className="links" to="/"><h1 className="titulo">Elija un Personaje de Rick and Morty</h1></Link>
    <Routes>
      <Route path="/" element={<ContenedorCards />}></Route>
      <Route path="/personaje/:id" element={<ContenedorDetalle />}></Route>
    </Routes>
    
      
    </>
  )
}

export default App
