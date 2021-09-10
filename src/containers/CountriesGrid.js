import { useEffect, useState } from 'react'; 
import CountryGridItem from './CountryGridItem';

const CountriesGrid = () => {
    const [images, setImages] = useState([]);
   
    useEffect(() => {
       getCountries();
    },[])


    const getCountries = async() => {
        // const url = 'https://restcountries.eu/rest/v2/name/Colombia'  // 1 país
        const url = 'https://restcountries.eu/rest/v2/all' // todos los países
        const resp = await fetch( url );
        const  data  = await resp.json(); 

        const paises = data.map( pais => {
            return {
                id: pais.name,
                nombre: pais.name,
                idioma: pais.languages[0].name,
                lat: pais.latlng[0],
                lng: pais.latlng[1],
                area: pais.area,
                capital: pais.capital,
                subregion: pais.subregion,
                poblacion: pais.population,
                moneda: pais.currencies[0].name,
                simbolo: pais.currencies[0].symbol,
                bandera: pais.flag,
            }
        })
// console.log(paises);
setImages(paises); 

    }
    

    return (

        <main className="contenido-principal contenedor">
            <h2 className="text-center">{images.length}  Banderas del Mundo</h2>
            <ul className="banderas">
                {
                    images.map( pais => (
                        // <li key={pais.id}>
                        //     <img src={pais.bandera}   />
                        //     <p>Nombre: {pais.nombre} <br/>
                        //     Capital: {pais.capital}<br/>
                        //     Población: {pais.poblacion} </p>                            
                        // </li>

                        <CountryGridItem 
                            key={pais.id}
                            { ...pais }
                        />

                    ))
                }
            </ul>

        </main>
    ) 
}

export default CountriesGrid
