import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <InnerContainer>
        <h2>Instagram</h2>
        <p>Please login</p>
      </InnerContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 80vw;
`;
