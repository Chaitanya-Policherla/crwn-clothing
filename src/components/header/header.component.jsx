import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import './header.styles.scss';
import {connect} from 'react-redux';

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className="options" to='/shop'>Shop</Link>
            <Link className="options" to='/'>CONTACT</Link>
            {
                currentUser ? <div className="options" onClick={() => auth.signOut()} >SIGN OUT</div> : <Link className="options" to='/signIn'>SIGN IN</Link>
            }
            
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);