import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
    <div class="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className="options" to='/shop'>Shop</Link>
            <Link className="options" to='/'>CONTACT</Link>
        </div>
    </div>
);
export default Header;