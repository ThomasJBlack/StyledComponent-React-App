import styled from "styled-components";

// import theme context

export const Button = styled.button.attrs((props) => ({
  background: props.background || "lightblue",
  color: props.secondaryColor || "black",
}))`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 0.5rem;
  border-radius: 1rem;
`;
