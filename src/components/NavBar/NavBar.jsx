import { Link, NavLink } from "react-router-dom"
import CarritoIcono from "../CarritoIcono/CarritoIcono"
import "./NavBar.css"


const NavBar = () => {
  return (
    <nav className="navBar">

      <Link to = "/">
        <p className="logo">MundoZippo</p>
      </Link>

      <NavLink to = "/categoria/moderno">
        <p className="menuTexto">MODERNO</p>
      </NavLink>

      <NavLink to = "/categoria/clasico">
        <p className="menuTexto">CLASICO</p>
      </NavLink>

        <CarritoIcono/>
    </nav>
  )
}

export default NavBar