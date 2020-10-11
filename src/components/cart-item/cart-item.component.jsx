import React from 'react';
import './cart-item.styles.jsx';
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles.jsx';

const CartItem = ({item: {name, price, imageUrl, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="cart-item" />
        <ItemDetailsContainer>
            <span className="name">
                {name}
            </span>
            <span className="price">
                {quantity} X ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
);

export default CartItem;