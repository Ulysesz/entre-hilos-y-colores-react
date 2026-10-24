import { Link } from "react-router-dom";

//Pie de página con links y redes

function Footer() {
    return (

        <footer>
            <div className="footer-nav">
                <h3>Categorias</h3>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/galeria">Galería</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>

            <div className="footer-social">
                <h3>Redes</h3>
                <div>
                    <a href="https://www.instagram.com/entre.hilos_y_colores/" target="_blank" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/EntreHilosyColores150" target="_blank" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
                </div>
            </div>
        </footer>

    );
}

export default Footer;