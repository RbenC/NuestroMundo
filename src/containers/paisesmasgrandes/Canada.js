import { useFetchCountries } from '../../hooks/useFetchCountries';
import CountryGridItem from '../CountryGridItem';

// const country ="Russian Federation"
const Canada = ({country}) => {    
    const { data: images, loading } = useFetchCountries( country );
    return (
        <div className="contenido-principal contenedor">    
                { loading && <p className="text-center">Loading...</p> }
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

export default Canada
