import React, { useState } from 'react'
import CountryGrid from './components/CountryGrid';
import SearchCountry from './components/SearchCountry';

const GetCountry = () => {
    const [countries, setCountries] = useState(['']);

    return (
        <div>
            <h2>Nombre de País <i className="fas fa-search"></i></h2>
            <SearchCountry setCountries={ setCountries }/>
            <hr/>
            <ul>
                {
                    countries.map((country)=>( 
                        <CountryGrid 
                            key = { country }
                            country = { country } 
                        />                        
                    ))
                }
            </ul>
            
        </div>
    )
}

export default GetCountry
