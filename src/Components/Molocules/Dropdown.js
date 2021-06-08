import styled from "styled-components";

// import theme context

const StyledSelect = styled.select`
  height: 3rem;
  border-radius: 1rem;
  font-size: 1.4rem;
`;

export const Dropdown = ({ data, setSelectedRestaurant }) => {
  return (
    <StyledSelect
      onChange={(event) => {
        setSelectedRestaurant(event.target.value);
      }}
    >
      {data.map((shop) => {
        return (
          <option key={shop.name} value={shop.name}>
            {shop.name}
          </option>
        );
      })}
    </StyledSelect>
  );
};
