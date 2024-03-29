import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Header = () => {
    const [menu, setMenu] = useState('shop');
    const { getQuantityItems } = useContext(ShopContext);

    return (
        <header className="header fixed">
            <div className="container">
                <div className="header-inner">
                    <Link to="/" className="logo" onClick={() => setMenu('shop')}>
                        <img src={logo} alt="" />
                        <p>SHOPPER</p>
                    </Link>
                    <nav className="navbar">
                        <ul className="navbar-menu">
                            <li className="navbar-item">
                                <Link to="/" className="navbar-link" onClick={() => setMenu('shop')}>
                                    Shop
                                </Link>
                                {menu === 'shop' && <span className="navbar-line"></span>}
                            </li>
                            <li className="navbar-item">
                                <Link to="/mens" className="navbar-link" onClick={() => setMenu('mens')}>
                                    Men
                                </Link>
                                {menu === 'mens' && <span className="navbar-line"></span>}
                            </li>
                            <li className="navbar-item">
                                <Link to="/womens" className="navbar-link" onClick={() => setMenu('womens')}>
                                    Woman
                                </Link>
                                {menu === 'womens' && <span className="navbar-line"></span>}
                            </li>
                            <li className="navbar-item">
                                <Link to="/kids" className="navbar-link" onClick={() => setMenu('kids')}>
                                    Kids
                                </Link>
                                {menu === 'kids' && <span className="navbar-line"></span>}
                            </li>
                        </ul>
                    </nav>
                    <div className="navbar-login-cart">
                        <Link to="/login" className="navbar-login-btn" onClick={() => setMenu('')}>
                            Login
                        </Link>
                        <Link to="/cart">
                            <img src={cart_icon} alt="Cart" />
                        </Link>
                        <div className="navbar-cart-count">{getQuantityItems()}</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
