import '../styles/navbar.css';
import { Link, NavLink } from 'react-router-dom'

export default function Nav(){
    return (
        <div>
            <nav className='navbar'>
                <ul>
                    <li><NavLink to="/"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>BOOKS</NavLink></li>
                    <li><NavLink to="/Favorites"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>FAVORITES</NavLink></li>
                </ul>
            </nav>

        </div>
    )
}