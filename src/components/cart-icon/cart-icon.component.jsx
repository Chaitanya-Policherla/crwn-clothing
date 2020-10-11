import React from 'react';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { cartItemCounter } from '../../redux/cart/cart.selectors';
import { CartContainer, ItemCountContainer, ShoppingIcon } from './cart-icon.styles';


const CartIcon = ({toggleCartHidden, itemsCount}) => (
    <CartContainer onClick={toggleCartHidden} >
        <ShoppingIcon />
        <ItemCountContainer>{itemsCount}</ItemCountContainer>
    </CartContainer>
)

const mapStateToProps = state => ({
    itemsCount: cartItemCounter(state)
});

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);