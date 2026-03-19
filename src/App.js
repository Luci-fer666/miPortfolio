
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Contacto from "./components/contacto/contacto"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Inicio from './components/Inicio/Inicio';
import Proyectos from "./components/proyectos/proyectos.jsx"


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/proyectos' element={<Proyectos/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
