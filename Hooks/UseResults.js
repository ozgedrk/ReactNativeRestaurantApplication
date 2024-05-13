import { useEffect, useState } from "react";
import Yelp from "../API/Yelp";

export default ()=>{

    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchAPI = async(searchTerm)=>{
 
    try {
        const response =  await Yelp.get('/search',{
            params:{
            limit: 50,
            term: searchTerm,
            location: 'İstanbul',
            },
            });
        setResults(response.data.businesses); 
        setErrorMessage('');      
    }
    catch (error) {
            setErrorMessage('Connection Error')
    }
    };
    useEffect(()=>{
        searchAPI('Toast');
    },[]);

    return[searchAPI, results, errorMessage];
}