import Item from "../Item/Item"
import './ItemList.css'

const ItemList=({products})=>{
 
    const normalizedProducts = Array.isArray(products) ? products : [products];

    return(
        <div className="item-list">
            {normalizedProducts.map((item)=>(
            <Item key={item.id} product={item}/>
          ))}
      </div>
    )
}

export default ItemList