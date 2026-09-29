
import { Routes,Route } from 'react-router'
import './App.css'
import { MainLayaout } from './layaout/MainLayaout'
import Home from './pages/Home'
import Servicies from './pages/Servicies'
import { About } from './pages/AboutUs'
import Contact from './pages/Contact'
import  Nosotros from './pages/Nosotros'
import Proyectos from './pages/Proyectos'


function App() {

  return (

    <Routes>
      <Route element={<MainLayaout></MainLayaout>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/servicios"  element={<Servicies></Servicies>}></Route>
        <Route path="/proyectos"  element={<Proyectos></Proyectos>}></Route>
        <Route path="/nosotros"  element={<Nosotros></Nosotros>}></Route>
        <Route path="/nosotros"  element={<About></About>}></Route>
        <Route path="/contacto"  element={<Contact></Contact>}></Route>
      </Route>

    </Routes>


  )
}

export default App
