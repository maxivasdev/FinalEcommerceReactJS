import logo from "./main-logo-NavBar.png"
import "./navbar.css"
import Carrito from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav className="NavBar-Top">
                <Link to="/cart">
                    <Carrito />
                </Link>
            </nav>
            <nav className="NavBar-Middle">
                <Link to="/">
                    <img src={logo} alt="logo" className="Main-Logo" />
                </Link>
                <section className="NavBar-Sections">
                    <NavLink  to="/categoria/alimentos" className={({ isActive }) => isActive ? "Section-button-activo" : "botonInactivo"}>Alimentos</NavLink>
                    <NavLink to="/categoria/juguetes" className={({ isActive }) => isActive ? "Section-button-activo" : "botonInactivo"}>Juguetes</NavLink>
                    <NavLink to="/categoria/paseo" className={({ isActive }) => isActive ? "Section-button-activo" : "botonInactivo"}>Paseo</NavLink>
                    <NavLink to="/categoria/accesorios" className={({ isActive }) => isActive ? "Section-button-activo" : "botonInactivo"}>Accesorios</NavLink>
                    <NavLink to="/categoria/cuchas" className={({ isActive }) => isActive ? "Section-button-activo" : "botonInactivo"}>Cuchas</NavLink>
                </section>
            </nav>
        </>
    )
}

export default NavBar
