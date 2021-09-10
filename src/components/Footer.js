const Footer = () => {
    return (
      <footer className="site-footer">
    <div className="grid-footer contenedor">
      <div>
        <h3>Categorías</h3>
        <nav className="footer-menu">
          <a href="#">Tres Países mas grandes</a>
          <a href="#">Tres Países más pequeños</a>
          <a href="#">Países</a>
          <a href="#">País</a>
        </nav>
      </div>
      <div>
        <h3>Nosotros</h3>
        <nav className="footer-menu">
          <a href="#">Nuestra História</a>
          <a href="#">Misión, Visión y Valores</a>
          <a href="#">Políticas de Privacidad</a>
          <a href="#">Términos del Servicio</a>
        </nav>
      </div>
      <div>
        <h3>Soporte</h3>
        <nav className="footer-menu">
          <a href="#">Preguntas Frecuentes</a>
          <a href="#">Ayuda en línea</a>
          <a href="#">Confianza y Seguridad</a>
        </nav>
      </div>
    </div>

    <p className="copyrigth">Todos los derechos reservados, &copy; 2021 NuestroMundo</p>
  </footer>
    )
}

export default Footer
