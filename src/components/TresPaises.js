import rusia from '../assets/img/rusia.JPG';
import canada from '../assets/img/canada.JPG';
import eeuu from '../assets/img/USA.JPG';



const TresPaises = () => {
    return (
        <section className="contenedor categorias">
    <h2 className="text-center">Los 3 Países más grandes</h2>

    <div className="listado-categorias">
      <div>
        <div className="categoria">          
          <img src={rusia} alt="rusia"/>          
          <p>Rusia</p>
          <p>17,1 millones de km2</p>
        </div>
      </div>
      <div>
        <div className="categoria">
        <img src={canada} alt="rusia" /> 
          <p>Canadá</p>
          <p>9,9 millones de km2</p>
        </div>
      </div>
      <div>
        <div className="categoria">
        <img src={eeuu} alt="rusia" /> 
          <p>EEUU</p>
          <p>9,52 millones de km2</p>
        </div>
      </div>
    </div>
  </section>
    )
}

export default TresPaises
