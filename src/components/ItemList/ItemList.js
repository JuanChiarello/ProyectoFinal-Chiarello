import Item from "../Item/Item";
import './ItemList.css';

const ItemList = ({ products }) => {
    return (
        <div className="ItemList">
            {products.map(prod => (
                <Item key={prod.id} id={prod.id} name={prod.name} img={prod.img} price={prod.price} stock={prod.stock} />
            ))}
        </div>
    );
};

export default ItemList;
