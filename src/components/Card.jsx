import { Link } from "react-router-dom";

//Tarjeta de producto que recibe imagen, título y descripción por props

function Card({ imagen, titulo, descripcion }) {
  return (
    <article className="card">
      <img src={imagen} alt={titulo} />
      <div className="card-body">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <Link to="/contacto" className="btn btn-secondary">Consultar</Link>
      </div>
    </article>
  );
}

export default Card;