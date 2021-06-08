import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";

// data
import data from "./restaurantdata";

// Components:
import { Cart } from "./Components/Cart.js";
import { Menu } from "./Components/Menu.js";

// molocules
import { Dropdown } from "./Components/Molocules/Dropdown.js";
import { RestaurantName } from "./Components/Molocules/RestaurantName.js";

// atoms
import { Button } from "./Components/atoms/UI_Elements.js";

// Styling
const AppStyles = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 98vw;
  align-content: center;
  font-size: 1.5rem;
  background-image: url(${(props) => props.props && props.props.imageUrl});
`;

const StyledHeader = styled(AppStyles)`
  position: fixed;
  flex-direction: row;
  width: 98vw; // deals with the margin style somewhere above root
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  border-radius: 1rem;
  background-color: ${(props) => props.props && props.props.primaryColor}; // catches on first reload
  color: ${(props) => props.props && props.props.tertiaryColor};
  background-image: none;
`;
const StyledMain = styled(StyledHeader)`
  min-height: 55rem;
  margin: 4rem 15rem 0 15rem;
  position: unset;
  overflow: wrap;
  align-items: start;
  background-color: unset;
  h2 {
    margin: 1rem 2rem;
    color: ${(props) => props.props && "white"};
    background-color: black;
    height: 3rem;
    padding: 1rem;
    border-radius: 1rem;
  }
  background-image: none;
`;

// App component
function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(data[0].name); // default to first restaurant in the list
  const [cartItems, setCartItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantStyles, setRestaurantStyles] = useState();
  useEffect(() => {
    data.find((shop) => {
      if (shop.name === selectedRestaurant) {
        const styleData = { primaryColor: shop.primaryColor, secondaryColor: shop.secondaryColor, tertiaryColor: shop.tertiaryColor, imageUrl: shop.image };
        setRestaurantStyles(styleData);
        setMenuItems(shop.menu); // update the menu
      }
      return null; // deals with warning of .find not returning a value
    });
  }, [selectedRestaurant]);

  return (
    <>
      <AppStyles props={restaurantStyles}>
        <StyledHeader props={restaurantStyles}>
          <Dropdown data={data} setSelectedRestaurant={setSelectedRestaurant} />
          <RestaurantName name={selectedRestaurant} />
          <Button>Change Theme</Button>
        </StyledHeader>
        <StyledMain props={restaurantStyles}>
          <Cart cartItems={cartItems} setCartItems={setCartItems} props={restaurantStyles} />
          <Menu data={data} menuItems={menuItems} setMenuItems={setMenuItems} selectedRestaurant={selectedRestaurant} cartItems={cartItems} setCartItems={setCartItems} props={restaurantStyles} />
        </StyledMain>
      </AppStyles>
    </>
  );
}

export default App;
