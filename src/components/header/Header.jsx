import styled from "styled-components";

const Header = ({ loggedUser, setShowLogin }) => {
  return (
    <StyledHeader>
      <InnerContainer>
        <h2>Instagram</h2>
        {!loggedUser ? (
          <AuthContainer>
            <AuthLink onClick={() => setShowLogin(true)}>Log In</AuthLink>
            <AuthLink onClick={() => setShowLogin(false)}>Sign Up</AuthLink>
          </AuthContainer>
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
  justify-content: space-evenly;
  align-items: center;
  gap: 80vw;

  h2 {
    font-family: cursive;
  }
`;

const AuthContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const AuthLink = styled.p`
  margin: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
