import nosotros from '../assets/img/mapa.png'

const Entrada = () => {
    return (
        <main className="contenido-principal contenedor">
    <h2 className="text-center">Entrada Blog</h2>

    <article className="entrada contenido-entrada-blog">
      <div className="imagen">
      <img src={nosotros} alt="imagen nosotros" />
      </div>
      <div className="entrada-meta">
        <p>Fecha: <span>22 Octubre 2022</span></p>
        <p>Escrito por: <span>TiendaMuebles</span></p>
      </div>
      <div className="entrada-blog">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          maxime ducimus similique corporis exercitationem, illo repudiandae.
          Nostrum quo rem voluptatum quam, incidunt repellat magni architecto
          omnis soluta, facere eum ullam!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor fugit
          quas tempora vero doloribus incidunt, rem quo ipsam amet, velit
          officia adipisci non nemo similique itaque. Deleniti nostrum cum odit?
        </p>
      </div>
    </article>
  </main>
    )
}

export default Entrada
