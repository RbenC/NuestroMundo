import nosotros from '../assets/img/mapa.png'

const Entradados = () => {
    return (
      <main className="contenido-principal contenedor">
      <h2 className="text-center">Entrada Blog</h2>

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
            <ol>
                <li>México 128 millones de habitantes</li>
                <li>Rusia 146 millones de habitantes</li>
                <li>Nigeria 200 millones de habitantes</li>
                <li>Bangladesh 163 millones de habitantes</li>
                <li>Brasil 209 millones de habitantes</li>
                <li>Pakistán 212 millones de habitantes</li>
                <li>Indonesia 270 millones de habitantes y se estima que el 3,53 % de la población mundial</li>
                <li>EEUU 330 millones de habitantes, aquí viviría un 4,34 % de la población mundial.</li>
                <li>India 1 390 millones de habitantes. India concentra el 17,94 %</li>
                <li>China concentra el 18,40 % de la población mundial con sus 1 440 millones de habitantes.</li>
                
            </ol>
          </div>
          
        </article>
        
  </main>
    )
}

export default Entradados
