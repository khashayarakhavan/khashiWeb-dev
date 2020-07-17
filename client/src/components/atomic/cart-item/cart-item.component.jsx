import React from 'react';
import { connect } from "react-redux";
import {
  addItem, clearItemFromCart,

  removeItem
} from "../../../redux/cart/cart.actions";
import {
  CartItemContainer,

  CartItemImage, ItemDetailsContainer,

  RemoveButtonContainer
} from "./cart-item.styles";

const CartItem = ({cartItem, clearItem}) => {
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)} >
        &#10005;
      </RemoveButtonContainer>
    </CartItemContainer>
  );};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

// export default React.memo(CartItem);
export default connect(null, mapDispatchToProps)(CartItem);
