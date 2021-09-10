import rusia from '../assets/img/rusia.JPG';
import canada from '../assets/img/canada.JPG';
import eeuu from '../assets/img/USA.JPG';
import { NavLink } from 'react-router-dom';



const TresPaises = () => {
    return (
        <section className="contenedor categorias">
    <h2 className="text-center">Los 3 Países más grandes</h2>

    <div className="listado-categorias">
      <div>
        <div className="categoria">                            
          <img src={rusia} alt="rusia"/>
          <NavLink to="/rusia">Rusia</NavLink>          
          <p>17,1 millones de km2</p>
        </div>
      </div>
      <div>
        <div className="categoria">
        <img src={canada} alt="rusia" /> 
        <NavLink to="/canada">Canada</NavLink>
          <p>9,9 millones de km2</p>
        </div>
      </div>
      <div>
        <div className="categoria">
        <img src={eeuu} alt="rusia" /> 
        <NavLink to="/usa">USA</NavLink>
          <p>9,52 millones de km2</p>
        </div>
      </div>
    </div>
  </section>
    )
}

export default TresPaises
