import React, {createContext, useContext, useState} from 'react';

const ResultContent = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'
export const ResultContextProvider = ({children}) =>{
    const [results, setResult] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('Elon Musk')

    // /videos, /serch, /images, /news
    const getResults= async( type )=>{
        setIsLoading('true')
        const response = await fetch(`${baseUrl}${type}` ,{
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '99258a01c8msh68d3db07fb1bc8ep174ac4jsn9ce4ead5b406'
            }
        });

        const data = await response.json();
        
        if(type.includes('/news')){
            setResult( data.entries);
        }else if(type.includes('/images')){
            setResult( data.image_results)
        }else{
            setResult( data.results)
        }
        setIsLoading(false)

        console.log(searchTerm, type)
        
    }

   
    return (
        <ResultContent.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContent.Provider>
    )
}

export const useResultContext = ()=> useContext (ResultContent);
