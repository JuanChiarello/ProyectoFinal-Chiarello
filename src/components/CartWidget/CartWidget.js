import cart from './assets/cart.jpg';

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" style={{ width: '35px', height: '35px' }} />
            0
        </div>
    )
}

export default CartWidget