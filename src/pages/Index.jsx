import { Link } from "react-router-dom";

function Index() {
    return (

        <main>
            <section className="hero">
                <h1>Entre Hilos y Colores</h1>
                <p>Creaciones hechas a mano en crochet y porcelana fría, diseñadas con dedicación para regalar, decorar y llenar de calidez cada rincón.</p>
                <Link className="btn btn-primary" to="/productos">Ver productos</Link>
            </section>
        </main>

    );
}

export default Index;