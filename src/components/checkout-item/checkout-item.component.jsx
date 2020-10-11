import React from "react";
import {connect} from 'react-redux';
import { addItem, clearItemFromCart, reduceItemFromCart } from "../../redux/cart/cart.action";
import { CheckoutItemContainer, ImageContainer, QuantityContainer, RemoveButtonContainer, TextContainer } from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem, addItem, reduceItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
  <CheckoutItemContainer>
    <ImageContainer>
      <img src={imageUrl} alt="item" />
    </ImageContainer>
    <TextContainer>{name}</TextContainer>
    <QuantityContainer>
      <div onClick={()=>reduceItem(cartItem)}>&#10094;</div>
      <span>{quantity}</span>
      <div onClick={()=>addItem(cartItem)}>&#10095;</div>
    </QuantityContainer>
    <TextContainer>{price}</TextContainer>
    <RemoveButtonContainer onClick={()=>{ clearItem(cartItem) }}>&#10005;</RemoveButtonContainer>
  </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  reduceItem: item => dispatch(reduceItemFromCart(item)),
  clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
