import { useEffect, useState } from 'react'
import { getCountry } from '../helpers/getCountries';

export const useFetchCountries = ( country ) => {        
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect(() => {        
        getCountry( country )
        .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
        })

    }, [country])

    return state; 
}

