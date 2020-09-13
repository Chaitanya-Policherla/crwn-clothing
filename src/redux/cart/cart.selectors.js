import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const cartItemCounter = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedValue, cartItem) => accumulatedValue+cartItem.quantity, 0)
)