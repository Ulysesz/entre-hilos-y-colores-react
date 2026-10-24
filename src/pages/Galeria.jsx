import Gallery from "../components/Gallery.jsx";
import galeria from "../data/Galeria.js";

function Galeria() {
    return (
        <>
            <h1 className="pages-tittle">Galería</h1>
            <section className="gallery-grid">
                <Gallery imagenes={galeria} />
            </section>
        </>
    );
}

export default Galeria;