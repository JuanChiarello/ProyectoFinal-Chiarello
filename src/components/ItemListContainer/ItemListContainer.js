import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getItems, getItemFromCategory } from '../../firebase/db'

import { getProducts, getProductsByCategory } from '../../asyncMock'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        getItems()
        
        const fetchData = async () => {
            try {
                let response;
                if (categoryId) {
                    // Si hay un categoryId, obtén productos por categoría
                    response = await getProductsByCategory(categoryId);
                } else {
                    // Si no hay categoryId, obtén todos los productos
                    response = await getProducts();
                }
                setProducts(response);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer