import { NavLink } from 'react-router-dom'; 

const NavBar = () => {

    function myFunction() {
        alert("hola")
        var x = document.getElementById("nav-collapse");
        if (x.className === "menu") {
          x.className += " responsive";
        } else {
          x.className = "nav-principal contenedor";
        }
      }
      
    return (
        <div className="contenedor-navegacion">
            <nav className="nav-principal contenedor menu" id="nav-collapse">
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
                <div className="categoria icon">
                    <a href="#" onClick={ myFunction }><i className="fa fa-bars"></i></a>                
                </div>            
            </nav>
        </div>
    )
}

export default NavBar
