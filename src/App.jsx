import Contenido from './components/Contenido/Contenido';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import DetalleContenido from './components/DetalleContenido/DetalleContenido';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  

  return (
    <BrowserRouter>
        <NavBar/>

    <Routes>


      <Route path='/' element = {<Contenido/>}/>
      <Route path='/categoria/:cid' element = {<Contenido/>}/>

      <Route path='/detalle/:pid' element = {<DetalleContenido/>}/>


      <Route path='*' element = { <Navigate to = '/' />} /> 
      

      

        

    </Routes>

    
    </BrowserRouter>
  )
}

export default App
