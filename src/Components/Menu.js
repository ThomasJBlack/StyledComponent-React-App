import styled from "styled-components";

import { Card } from "./Molocules/Card.js";

// import { ThemeContext } from "../Incubator.js"; // ... something like this

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  border: 1rem outset ${(props) => props.props && props.props.secondaryColor};
  border-radius: 1rem;
  margin: 1rem;
  width: 70%;
  min-width: 70%;
  max-width: 70%;
  flex-wrap: wrap;
  overflow: hidden;
  color: ${(props) => props.props && props.props.tertiaryColor};
`;

export const Menu = ({ data, menuItems, setMenuItems, selectedRestaurant, cartItems, setCartItems, totalAdded, setTotalAdded, props }) => {
  //   console.log(menuItems);
  return (
    <StyledMenu props={props}>
      <h2>Menu</h2>
      {menuItems.map((item) => {
        return (
          <Card key={Math.random(100).toFixed(10) + item.name + "MenuItemKey"} item={item} itemsArr={cartItems} setItemsArr={setCartItems} callBack={addCallback} text="Add to Cart" props={props} />
        );
      })}
    </StyledMenu>
  );
};

const addCallback = (cartItems, item, setCartItems) => {
  const tempArr = [...cartItems];
  tempArr.push(item);
  setCartItems(tempArr);
};
