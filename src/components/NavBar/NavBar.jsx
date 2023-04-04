import CarritoIcono from "../CarritoIcono/CarritoIcono"


const NavBar = () => {
  return (
    <nav className="navBar">
        <a className="logo">MundoZippo</a>
        <a className="menuTexto">NOSOTROS</a>
        <a className="menuTexto">PRODUCTOS</a>
        <CarritoIcono/>
    </nav>
  )
}

export default NavBar