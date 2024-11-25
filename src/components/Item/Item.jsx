import './Item.css'
const Item = ({product})=>{

    return(
        <div className='item-box'>
            <div className='item'>
                <div className='item__img-container'>
                    <img className='item__img' src={product.thumbnail} alt={product.title} />
                </div>
                <div className='item__text'>
                    <h3 className='item__name'>{product.title}</h3>
                    <p className='item__price'>Precio: ${product.price}</p>
                    <a href={product.permlink} target="_blank" rel="noopener noreferrer"></a>
                </div>
            </div>
        </div>
    )
}

export default Item