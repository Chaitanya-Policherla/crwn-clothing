import React from "react";
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';
import { CollectionFooterContainer, CollectionItemContainer, ImageContainer, NameContainer, PriceContainer } from "./collection-item.styles.jsx";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (<CollectionItemContainer>
    <ImageContainer imageUrl = {imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>{price}</PriceContainer>
    </CollectionFooterContainer>
    <CustomButton inverted onClick = {()=> addItem(item)}>ADD TO CART</CustomButton>
  </CollectionItemContainer>
  )};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);
