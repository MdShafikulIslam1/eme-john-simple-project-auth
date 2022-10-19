import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../constexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? <button onClick={logOut}>LogOut</button>
                        : <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                }



                <p className='user-text'>{user?.email}</p>
            </div>
        </nav>
    );
};

export default Header;