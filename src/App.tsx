import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Notfound from "./pages/Notfound"
import Resume from "./pages/Resume"
import Projects from "./pages/Projects"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App=()=>{
return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={ <About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/notfound" element={<Notfound/>}/>
  </Routes>
  </BrowserRouter>
)
}
export default App