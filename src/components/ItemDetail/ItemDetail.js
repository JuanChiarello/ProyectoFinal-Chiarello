import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { id, name, price }
        addItem(item, quantity)
    }

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name || 'Product Name Not Available'}
                </h2>
            </header>
            <picture>
                {img ? (
                    <img src={img} alt={name} className='ItemImg' />
                ) : (
                    <div className='placeholder'>Image not available</div>
                )}
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category || 'Category not available'}
                </p>
                <p className='Info'>
                    Descripción: {description || 'Description not available'}
                </p>
                <p className='Info'>
                    Precio: {price ? `$${price}` : 'Price not available'}
                </p>
            </section>
            <footer className='ItemFooter'>
                {quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </article>
    )
}

export default ItemDetail