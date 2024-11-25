import { useState } from "react"

const useSearch =()=>{
    
    const [results, setResults] = useState([])
    const [loading,setLoading] = useState(false)
    
    const searchResults = async (query) =>{
        
        setLoading(true)
        try{
         
            const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
            //const res = await fetch(`http://localhost:8080/producto/findById?id=${query}`)
            //const res = await fetch(`http://localhost:8080/producto/findAll`)
            const resJSON = await res.json()
            setResults(resJSON.results)
            //setResults(resJSON)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    
    return{results,searchResults,loading}
}

export default useSearch;