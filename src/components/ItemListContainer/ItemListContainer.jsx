import { useState } from "react"
import useSearch from "../../hooks/useSearch"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer=()=>{

    const {results,searchResults, loading} = useSearch()
    const [query, setQuery]= useState("")

    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(query)
        if(query){
            searchResults(query)
        }
    }

    return(
        <div className="item-list-container">
            <div className="buscador">
                <h1 className="title">Buscar Productos</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Buscar Producto"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                    className="input" />
                    <button className="button" type="submit">
                        Buscar
                    </button>
                </form>

            </div>
                {
                    loading ? (
                        <p>cargando productos...</p>
                    ) : (
                         <ItemList products={results} />
                    )
                } 
        </div>
    )
}
export default ItemListContainer