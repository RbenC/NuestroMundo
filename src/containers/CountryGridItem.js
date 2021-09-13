const CountryGridItem = ( {nombre, capital, poblacion, bandera} ) => {
    return (
        <div>
            <li>
                
                <p className="text-center"><img src={bandera} alt="flag" /></p>
                <p>País: <span>{nombre}</span>  <br/>
                   Capital: {capital}<br/>
                   Pob: {new Intl.NumberFormat("de-DE").format(poblacion)} Hab. </p>  
            </li>
        </div>
    )
}

export default CountryGridItem
