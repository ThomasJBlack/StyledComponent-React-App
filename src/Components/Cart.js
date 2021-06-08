import styled from "styled-components";

import { Card } from "./Molocules/Card.js";

const StyledCart = styled.div`
  display: flex;
  flex-direction: row;
  border: 1rem inset ${(props) => props.props && props.props.secondaryColor};
  margin: 1rem;
  border-radius: 1rem;
  width: 30%;
  min-width: 30%;
  max-width: 30%;
  flex-wrap: wrap;
  color: ${(props) => props.props && props.props.tertiaryColor};
`;

export const Cart = ({ cartItems, setCartItems, props }) => {
  return (
    <StyledCart props={props}>
      <h2>Cart</h2>
      {cartItems.map((item) => {
        return <Card key={Math.random() + item.name + "CartItemKey"} item={item} itemsArr={cartItems} setItemsArr={setCartItems} callBack={removeCallback} text="Remove" props={props} />;
      })}
    </StyledCart>
  );
};

const removeCallback = (cartItems, item, setCartItems, isClicked, setIsClicked) => {
  if (isClicked) {
    const index = cartItems.indexOf(item);
    setCartItems(cartItems.filter((arr, i) => i !== index));
  } else {
    setIsClicked(true);
  }
};
