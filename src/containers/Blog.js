import nosotros from '../assets/img/mapa.png'
import { NavLink } from 'react-router-dom'; 

const Blog = () => {
    return (
        <main className="contenido-principal contenedor">
    <h2 className="text-center">Nuestro Blog</h2>

    <section className="contenedor-blog">
      <div className="blog">
        <article className="entrada">
          <h2>¿Cuántos países tiene el Mundo?</h2>
          <div className="imagen">
            <img src={nosotros} alt="imagen nosotros" />
          </div>
          <div className="entrada-meta">
            <p>Fecha: <span>02 Septiembre 2021</span></p>
            <p>Escrito por: <span>NuestroMundo</span></p>
          </div>
          <div className="entrada-blog">
            <p>
            Desde 2011, con la entrada de Sudán del Sur, el órgano tiene 193 países miembros, considerados "Estados soberanos", con sus propias fronteras y gobiernos independientes. También cuenta con dos "Estados observadores", el Vaticano y Palestina, lo que da un total de 195 países.
            </p>
            <p>
            Palestina, sin embargo, no es reconocida como Estado soberano por algunos de los países de la propia ONU. Por eso, algunas listas muestran sólo 194 países en la organización.
            </p>
          </div>
          <NavLink to="/entrada" className="btn max-width">Leer</NavLink>
        </article>

        <article className="entrada">
          <h2>Países con mayores poblaciones</h2>
          <div className="imagen">
          <img src={nosotros} alt="imagen nosotros" />
          </div>
          <div className="entrada-meta">
            <p>Fecha: <span>02 Septiembre 2021</span></p>
            <p>Escrito por: <span>NuestroMundo</span></p>
          </div>
          <div className="entrada-blog">
            <p>
            En el año 2020, la población mundial alcanzaba los 7 800 millones de personas, y una buena parte de ellas (en torno al 36 %) se concentran en tan solo dos países. El número total de habitantes del planeta Tierra se ha triplicado entre 1950 y 2010 y, de cumplirse las previsiones, podría estar cerca de cuatriplicarse en 2050.
            </p>
            <p>
El continente más poblado es Asia, y se estima que en 2070 alcanzará una población de 5 270 millones de personas. Actualmente el 60 % de la población mundial vive allí, el 17 % en África y el 10 % en Europa.
</p>
<p>
Aunque Japón no se encuentra entre los países más poblados del mundo, los datos actualizados en 2020 muestran que su capital, Tokio, es la megaurbe más poblada del planeta: allí viven unos 37,4 millones de personas. Le sigue muy de cerca Delhi, en India, con 30,6 millones de personas. Shangái en China (27,3 millones de habitantes), Säo Paulo en Brasil (22 millones de habitantes) y Ciudad de México en México (21,8 millones de habitantes) completan la clasificación de ciudades.
</p>
<p>
Con respecto a los países, aquí te mostramos (de menos a más), los diez más poblados de todo el planeta (Fuente: Statista)
            </p>
            
          </div>
          <NavLink to="/entradados" className="btn max-width">Leer</NavLink>
        </article>
      </div>
      <aside>
        <h3>Otras entradas del Blog</h3>
        <ul>
          <li><a href="entrada.html">Los Más Ricos</a></li>
          <li><a href="entrada.html">Los Más Pobres</a></li>
        </ul>
      </aside>
    </section>
  </main>
    )
}

export default Blog
