import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom' 

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/smartphones`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Smarthpones</NavLink>
                <NavLink to={`/category/gaming`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gaming</NavLink>
                <NavLink to={`/category/audio`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Audio</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar