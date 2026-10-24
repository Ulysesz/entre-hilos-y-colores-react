import { Link } from "react-router-dom";

// Barra de navegación reutilizable con los links de la pagina

function Navbar() {
    return (
        <header>

            <nav className="navbar">
                <Link className="logo" to="/"><img src="/assets/img/logo.png" alt="Logo" />Entre Hilos y Colores</Link>

                <ul className="nav-links">
                    <li> <Link to="/">Inicio</Link></li>
                    <li> <Link to="/productos">Productos</Link></li>
                    <li> <Link to="/galeria">Galería</Link></li>
                    <li> <Link to="/nosotros">Nosotros</Link></li>
                    <li> <Link to="/contacto">Contacto</Link></li>
                </ul>
                <div className="shop">
                    <Link to="/contacto"><i className="fa-regular fa-user"></i></Link>
                    <Link to="/contacto"><i className="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </nav>
        </header>

    );
}

export default Navbar;
