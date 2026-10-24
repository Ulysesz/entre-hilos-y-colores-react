function Gallery({ imagenes }) {
    return (
        <div className="gallery">
            {imagenes.map((imagen) => (
                <img
                    key={imagen.id}
                    className="gallery-item"
                    src={imagen.src}
                    alt={imagen.alt}
                />
            ))}
        </div>
    );
}

export default Gallery;