import styled from "styled-components";

import { Button } from "../atoms/UI_Elements.js";

import { useState } from "react";

// import theme context

const StyledCard = styled.div.attrs((props) => ({
  backgound: props.backgound || "red",
  color: props.color || "black",
}))`
  height: 10rem;
  width: 10rem;
  margin: 1rem;
  padding: 0.75rem 1rem;
  :hover {
    height: 11rem;
    width: 11rem;
    margin: 0.5rem;
    padding: 0.75rem 1rem;
  }
  border-radius: 1rem;
  background-color: green;
  box-sizing: border-box;
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
`;

export const Card = ({ item, itemsArr, setItemsArr, callBack, text, props }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <StyledCard props={props}>
      <strong>{item.name}</strong>
      <span>${item.price.toFixed(2)}</span>
      <Button background={isClicked ? "red" : "lightgreen"} onClick={(event) => callBack(itemsArr, item, setItemsArr, isClicked, setIsClicked)}>
        {text}
      </Button>
    </StyledCard>
  );
};
