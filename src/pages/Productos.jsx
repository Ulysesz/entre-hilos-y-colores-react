import Card from "../components/Card.jsx";
import productos from "../data/Productos.js";

function Productos() {
  return (
    <>
      <h1 className="pages-tittle">Productos</h1>
      <section className="cards-section">
        <div className="cards-grid">
          {productos.map((producto) => (
            <Card
              key={producto.id}
              imagen={producto.imagen}
              titulo={producto.titulo}
              descripcion={producto.descripcion}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Productos;