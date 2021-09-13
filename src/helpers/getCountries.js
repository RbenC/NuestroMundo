
    export const getCountry = async( country ) => {
        const url = 'https://restcountries.eu/rest/v2/all' // todos los países
        // const url = `https://restcountries.eu/rest/v2/name/${ encodeURI( country ) }`  // 1 país
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

return paises ; 

    }