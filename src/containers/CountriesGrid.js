import { useFetchCountries } from '../hooks/useFetchCountries';
import CountryGridItem from './CountryGridItem';

const CountryGrid = ( { country }) => {

    const { data: images, loading } = useFetchCountries( country );
    return (
        <div className="contenido-principal contenedor">    
                { loading && <p>Loading...</p> }
                <ul className="banderas">
                {                    
                    images.map( countriesList  => (
                        <CountryGridItem 
                            key={ countriesList.id }
                            { ...countriesList }
                        />
                    ))
                } 
                </ul>      
        </div>
    )
}

export default CountryGrid
