import styled from "styled-components";

// import theme context

const StyledRestaurantName = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  font-size: 3rem;
`;

export const RestaurantName = ({ name }) => {
  // when prop changes the RestaurantName wil update.
  return <StyledRestaurantName>{name}</StyledRestaurantName>;
};
