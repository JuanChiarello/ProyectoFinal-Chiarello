import './ItemDetailContainer.css'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { getItemFromCategory } from '../../firebase/db';
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [items, setItems] = useState([]);
    const { ItemId } = useParams();

    useEffect(() => {
        const getAndSetItems = async () => {
            const products = await getItemFromCategory(ItemId)
            setItems(products)
        }

        getAndSetItems()
    }, [ItemId])

    return (
        <div>
            <div>
                <h1 className='mainTitle'>Nueva Tecnología</h1>
            </div>
            <div>
                {items.map(item => (
                    <ItemDetail
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        img={item.img}
                        category={item.category}
                        description={item.description}
                        price={item.price}
                        stock={item.stock}
                    />
                ))}
            </div>
        </div>
    )

};

export default ItemDetailContainer;
