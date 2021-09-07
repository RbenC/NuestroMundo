import { NavLink } from 'react-router-dom'; 

const NavBar = () => {
    return (
        <div className="contenedor-navegacion">
            <nav className="nav-principal contenedor">
            <div className="categoria">
                <NavLink to="/">Inicio</NavLink>
            </div>
            <div className="categoria">
                <NavLink to="/paises">Países</NavLink>
            </div>
            <div className="categoria">
                <NavLink to="/pais" className="categoria">País</NavLink>
            </div>
            <div className="categoria">
                <NavLink to="/blog">Blog</NavLink>
            </div>
            <div className="categoria">
                <NavLink to="/galeria">Galería</NavLink>
            </div>
            <div className="categoria">
                <NavLink to="/contacto">Contacto</NavLink>
            </div>
            </nav>
        </div>
    )
}

export default NavBar
