import styled from "styled-components";

const Header = ({ loggedUser }) => {
  return (
    <StyledHeader>
      <InnerContainer>
        <h2>Instagram</h2>
        {!loggedUser ? (
          <p>Please login</p>
        ) : (
          <p>Hello {loggedUser.user.username}</p>
        )}
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
