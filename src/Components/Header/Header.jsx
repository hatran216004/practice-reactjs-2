import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';

const Header = () => {
    const [menu, setMenu] = useState('shop');

    return (
        <header className="header fixed">
            <div className="container">
                <div className="header-inner">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>SHOPPER</p>
                    </div>
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
                                <Link to="/womans" className="navbar-link" onClick={() => setMenu('womans')}>
                                    Woman
                                </Link>
                                {menu === 'womans' && <span className="navbar-line"></span>}
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
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                        <Link to="/cart">
                            <img src={cart_icon} alt="Cart" />
                        </Link>
                        <div className="navbar-cart-count">0</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
