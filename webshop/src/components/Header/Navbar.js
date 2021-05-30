import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../store/actions/userActions'


const Navbar = () => {

    const loggedin = useSelector(state => state.userReducer.loggedIn)
    const dispatch = useDispatch()
   

    
    return (
        <nav className="navbar">
            <h1>Webshop</h1>
            <ul className="nav-links">
                <li><NavLink exact to="/" activeClassName="is-active" className="nav-link">Hem</NavLink></li>
                <li><NavLink to="/products" activeClassName="is-active" className="nav-link">Produkter</NavLink></li>
                <li><NavLink to="/Cart" activeClassName="is-active" className="nav-link"><i className="fas fa-shopping-cart"></i></NavLink></li>
                {
                    loggedin ?  
                    <a onClick={() => dispatch(logoutUser())}>Logga ut</a>
                    : <li><NavLink to="/login" activeClassName="is-active" className="nav-link">Logga In</NavLink></li>

                }
                
                {/* <li><NavLink to="/register" activeClassName="is-active" className="nav-link">Register</NavLink></li> */}
            </ul>
        </nav>
    )
}

export default Navbar

                