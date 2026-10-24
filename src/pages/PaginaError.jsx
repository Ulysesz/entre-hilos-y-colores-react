import { Link } from "react-router-dom";

// Se muestra cuando la dirección ingresada no existe
function PaginaError() {
  return (
    <section className="pagina-error">
      <h1 className="pages-tittle">404 — Página no encontrada</h1>
      <p>La ruta que buscás no existe.</p>
      <Link className="btn btn-primary" to="/">Volver al inicio</Link>
    </section>
  );
}

export default PaginaError;