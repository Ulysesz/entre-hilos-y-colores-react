import { useState } from "react";

const formularioInicial = {
    name: "",
    email: "",
    tel: "",
    contact: "",
    categoria: "",
    comment: "",
};

function Contact() {

    const [form, setForm] = useState(formularioInicial);


    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(`Evento input -> ${name}:`, value);
        setForm({ ...form, [name]: value });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Evento submit -> datos del formulario:", form);
        setForm(formularioInicial);
    };


    const handleReset = () => {
        console.log("Evento reset -> formulario limpiado");
        setForm(formularioInicial);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nombre y Apellido</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Juan Escobar"
                    value={form.name}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="JuanEscobar@ejemplo.com"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="tel">Teléfono</label>
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    required
                    placeholder="+54 11 9999-9999"
                    value={form.tel}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="contact">Motivo de contacto</label>
                <select
                    name="contact"
                    id="contact"
                    required
                    value={form.contact}
                    onChange={handleChange}
                >
                    <option value="" disabled>Elegí una opción</option>
                    <option value="consulta">Consulta</option>
                    <option value="compra">Compra de un producto</option>
                    <option value="personalizado">Pedido personalizado</option>
                    <option value="otros">Otros</option>
                </select>
            </div>

            <fieldset>
                <legend>¿Qué categoría te interesa?</legend>

                <div className="radio-group">
                    <input
                        type="radio"
                        id="tejidos"
                        name="categoria"
                        value="tejidos"
                        required
                        checked={form.categoria === "tejidos"}
                        onChange={handleChange}
                    />
                    <label htmlFor="tejidos">Tejidos / Amigurumis</label>
                </div>

                <div className="radio-group">
                    <input
                        type="radio"
                        id="porcelana"
                        name="categoria"
                        value="porcelana"
                        required
                        checked={form.categoria === "porcelana"}
                        onChange={handleChange}
                    />
                    <label htmlFor="porcelana">Porcelana fría</label>
                </div>

                <div className="radio-group">
                    <input
                        type="radio"
                        id="ambos"
                        name="categoria"
                        value="ambos"
                        required
                        checked={form.categoria === "ambos"}
                        onChange={handleChange}
                    />
                    <label htmlFor="ambos">Ambos</label>
                </div>
            </fieldset>

            <div className="form-group">
                <label htmlFor="comment">Mensaje</label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="Escribí tu consulta o contanos qué producto estás buscando..."
                    required
                    cols="40"
                    rows="5"
                    value={form.comment}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="form-buttons">
                <button className="btn btn-primary" type="submit">
                    Enviar mensaje
                </button>
                <button className="btn btn-secondary" type="button" onClick={handleReset}>
                    Limpiar el formulario
                </button>
            </div>
        </form>
    );
}

export default Contact;